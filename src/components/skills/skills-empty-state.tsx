'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components';

interface SkillsEmptyStateProps {
  className?: string;
  title?: string;
  subtitle?: string | null;
  message?: string;
  isError?: boolean;
}

export const SkillsEmptyState = forwardRef<HTMLElement, SkillsEmptyStateProps>(
  (
    { className, title = 'Habilidades', subtitle, message, isError = false },
    ref
  ) => {
    const defaultMessage = isError
      ? 'No se pueden cargar las habilidades en este momento.'
      : 'Aún no hay habilidades disponibles.';

    return (
      <motion.section
        ref={ref}
        id="skills"
        className={`my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20 ${className || ''}`}
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

SkillsEmptyState.displayName = 'SkillsEmptyState';
