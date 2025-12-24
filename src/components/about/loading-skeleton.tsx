import { cn } from '@/lib/utils/utils';

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
  lineHeight?: string;
}

export const LoadingSkeleton = ({
  className,
  lines = 2,
  lineHeight = 'h-20',
}: LoadingSkeletonProps) => {
  return (
    <div className={cn('-mt-5 max-w-2xl space-y-4', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={cn('bg-muted w-full animate-pulse rounded', lineHeight)}
        />
      ))}
    </div>
  );
};
