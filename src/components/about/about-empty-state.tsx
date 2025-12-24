'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '../ui/section-heading';

interface AboutEmptyStateProps {
  className?: string;
  title?: string;
  subtitle?: string | null;
  message?: string;
}

export const AboutEmptyState = forwardRef<HTMLElement, AboutEmptyStateProps>(
  (
    {
      className,
      title = 'Acerca de mí',
      subtitle,
      message = 'Aún no hay información disponible.',
    },
    ref
  ) => {
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
        <div className="text-muted-foreground text-center">
          <p>{message}</p>
        </div>
      </motion.section>
    );
  }
);

AboutEmptyState.displayName = 'AboutEmptyState';
