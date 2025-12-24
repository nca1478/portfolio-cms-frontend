import { forwardRef } from 'react';

import { SectionHeading } from '@/components';

interface SkillsSkeletonProps {
  className?: string;
  title?: string;
  subtitle?: string | null;
}

export const SkillsSkeleton = forwardRef<HTMLElement, SkillsSkeletonProps>(
  ({ className, title = 'Habilidades', subtitle }, ref) => {
    return (
      <section
        ref={ref}
        id="skills"
        className={`my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20 ${className || ''}`}
      >
        <SectionHeading heading={title} content={subtitle || undefined} />
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-muted size-20 animate-pulse rounded-lg"
            />
          ))}
        </div>
      </section>
    );
  }
);

SkillsSkeleton.displayName = 'SkillsSkeleton';
