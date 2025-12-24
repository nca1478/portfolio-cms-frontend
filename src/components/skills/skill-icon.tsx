'use client';

import { memo } from 'react';
import Image from 'next/image';

interface SkillIconProps {
  svgContent?: string | null;
  svgUrl?: string | null;
  skillName: string;
}

export const SkillIcon = memo(
  ({ svgContent, svgUrl, skillName }: SkillIconProps) => {
    try {
      return (
        <div className="group relative">
          {svgUrl ? (
            // Render SVG from URL (Cloudinary)
            <Image
              src={svgUrl}
              alt={skillName}
              width={48}
              height={48}
              className="size-12 cursor-pointer transition-transform hover:scale-110 dark:invert"
              aria-label={skillName}
            />
          ) : svgContent ? (
            // Render inline SVG (legacy support)
            <div
              className="size-12 cursor-pointer transition-transform hover:scale-110 [&>svg]:fill-black [&>svg]:text-black dark:[&>svg]:fill-white dark:[&>svg]:text-white [&>svg_circle]:fill-black dark:[&>svg_circle]:fill-white [&>svg_path]:fill-black dark:[&>svg_path]:fill-white [&>svg_rect]:fill-black dark:[&>svg_rect]:fill-white"
              dangerouslySetInnerHTML={{ __html: svgContent }}
              aria-label={skillName}
            />
          ) : null}
          {/* Tooltip */}
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
            {skillName}
            {/* Arrow */}
            <div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-gray-900 dark:bg-gray-100" />
          </div>
        </div>
      );
    } catch {
      // Silently fail - don't show anything if there's an error
      return null;
    }
  }
);

SkillIcon.displayName = 'SkillIcon';
