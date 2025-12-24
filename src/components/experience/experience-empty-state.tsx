'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components';

interface ExperienceEmptyStateProps {
  className?: string;
  title?: string;
  subtitle?: string | null;
  message?: string;
  isError?: boolean;
}

export const ExperienceEmptyState = forwardRef<
  HTMLElement,
  ExperienceEmptyStateProps
>(
  (
    { className, title = 'Experiencia', subtitle, message, isError = false },
    ref
  ) => {
    const defaultMessage = isError
      ? 'No se puede cargar la experiencia en este momento.'
      : 'Aún no hay experiencias disponibles.';

    return (
      <motion.section
        ref={ref}
        id="experience"
        className={`my-10 scroll-mt-28 md:mb-20 ${className || ''}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <SectionHeading heading={title} content={subtitle || undefined} />
        <div className="text-muted-foreground text-center">
          <p>{message || defaultMessage}</p>
        </div>
      </motion.section>
    );
  }
);

ExperienceEmptyState.displayName = 'ExperienceEmptyState';
