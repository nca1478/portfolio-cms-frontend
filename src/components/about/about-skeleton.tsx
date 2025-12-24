import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '../ui/section-heading';
import { LoadingSkeleton } from './loading-skeleton';

interface AboutSkeletonProps {
  className?: string;
  title?: string;
  subtitle?: string | null;
}

export const AboutSkeleton = forwardRef<HTMLElement, AboutSkeletonProps>(
  ({ className, title = 'Acerca de mí', subtitle }, ref) => {
    return (
      <motion.section
        ref={ref}
        id="about"
        className={`my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20 ${className || ''}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading heading={title} content={subtitle || undefined} />
        <LoadingSkeleton />
      </motion.section>
    );
  }
);

AboutSkeleton.displayName = 'AboutSkeleton';
