import { forwardRef } from 'react';

interface IntroSkeletonProps {
  className?: string;
}

export const IntroSkeleton = forwardRef<HTMLElement, IntroSkeletonProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        id="home"
        className={`my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28 ${className || ''}`}
      >
        <div className="bg-muted h-8 w-48 animate-pulse rounded" />
        <div className="bg-muted h-16 w-full max-w-3xl animate-pulse rounded" />
        <div className="bg-muted h-20 w-full max-w-xl animate-pulse rounded" />
        <div className="flex flex-row gap-2">
          <div className="bg-muted h-11 w-32 animate-pulse rounded" />
          <div className="bg-muted h-11 w-32 animate-pulse rounded" />
        </div>
      </section>
    );
  }
);

IntroSkeleton.displayName = 'IntroSkeleton';
