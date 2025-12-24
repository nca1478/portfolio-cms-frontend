import type { Metadata } from 'next';

import { siteConfig } from './site-config';

export interface DynamicMetadata {
  title: string;
  description: string;
  keywords: string[];
  robotsIndex: boolean;
  robotsFollow: boolean;
}

export const createMetadata = (dynamicMetadata: DynamicMetadata): Metadata => {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dynamicMetadata.title,
      template: `%s | ${dynamicMetadata.title}`,
    },
    description: dynamicMetadata.description,
    keywords: dynamicMetadata.keywords,
    robots: {
      index: dynamicMetadata.robotsIndex,
      follow: dynamicMetadata.robotsFollow,
    },
    icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon-16x16.png',
      apple: '/favicon/apple-touch-icon.png',
    },
    verification: {
      google: siteConfig.googleSiteVerificationId,
    },
  };
};

export const createFallbackMetadata = (): Metadata => {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    robots: { index: true, follow: true },
    icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon-16x16.png',
      apple: '/favicon/apple-touch-icon.png',
    },
    verification: {
      google: siteConfig.googleSiteVerificationId,
    },
  };
};
