import { forwardRef } from 'react';

import { SectionHeading } from '@/components';

interface ExperienceSkeletonProps {
  className?: string;
  title?: string;
  subtitle?: string | null;
}

export const ExperienceSkeleton = forwardRef<
  HTMLElement,
  ExperienceSkeletonProps
>(({ className, title = 'Experiencia', subtitle }, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className={`my-10 scroll-mt-28 md:mb-20 ${className || ''}`}
    >
      <SectionHeading heading={title} content={subtitle || undefined} />
      <div className="relative max-w-screen-md space-y-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-muted h-40 w-full animate-pulse rounded" />
        ))}
      </div>
    </section>
  );
});

ExperienceSkeleton.displayName = 'ExperienceSkeleton';
