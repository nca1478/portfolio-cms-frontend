import { siteConfig } from '../../config/site-config';

interface MetadataSettings {
  title: string;
  description: string;
  keywords: string[];
  robotsIndex: boolean;
  robotsFollow: boolean;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

// Cache for metadata to avoid multiple requests
let metadataCache: MetadataSettings | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 1 * 60 * 1000; // 1 minute (reduced from 5 minutes)

export async function getMetadata(
  forceRefresh: boolean = false
): Promise<MetadataSettings> {
  // Check if cache is still valid (unless force refresh is requested)
  const now = Date.now();
  if (!forceRefresh && metadataCache && now - cacheTimestamp < CACHE_DURATION) {
    return metadataCache;
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/settings/public/metadata/active`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(forceRefresh && { 'Cache-Control': 'no-cache' }),
        },
        // Reduce Next.js cache time and add cache busting
        next: {
          revalidate: forceRefresh ? 0 : 60, // 1 minute or no cache if force refresh
          tags: ['metadata'], // Add tag for revalidation
        },
        // Add cache busting for browser cache
        ...(forceRefresh && { cache: 'no-store' as RequestCache }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const metadata: MetadataSettings = await response.json();

    // Update cache
    metadataCache = metadata;
    cacheTimestamp = now;

    return metadata;
  } catch (error) {
    console.error('Error fetching metadata:', error);

    // Fallback to static configuration
    return {
      title: siteConfig.title,
      description: siteConfig.description,
      keywords: siteConfig.keywords,
      robotsIndex: true,
      robotsFollow: true,
    };
  }
}

// Function to invalidate cache manually
export function invalidateMetadataCache(): void {
  metadataCache = null;
  cacheTimestamp = 0;
}

export function generateRobotsContent(
  robotsIndex: boolean,
  robotsFollow: boolean
): string {
  const indexDirective = robotsIndex ? 'index' : 'noindex';
  const followDirective = robotsFollow ? 'follow' : 'nofollow';
  return `${indexDirective}, ${followDirective}`;
}
