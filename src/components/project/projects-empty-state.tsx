'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '../ui/section-heading';

interface ProjectsEmptyStateProps {
  className?: string;
  title?: string;
  subtitle?: string | null;
  message?: string;
  isError?: boolean;
}

export const ProjectsEmptyState = forwardRef<
  HTMLElement,
  ProjectsEmptyStateProps
>(
  (
    { className, title = 'Proyectos', subtitle, message, isError = false },
    ref
  ) => {
    const defaultMessage = isError
      ? 'No se pueden cargar los proyectos en este momento.'
      : 'Aún no hay proyectos disponibles.';

    return (
      <section
        ref={ref}
        id="projects"
        className={`my-10 scroll-mt-28 md:mb-20 ${className || ''}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.175,
          }}
          viewport={{
            once: true,
          }}
        >
          <SectionHeading heading={title} content={subtitle || undefined} />
        </motion.div>
        <div className="text-muted-foreground text-center">
          <p>{message || defaultMessage}</p>
        </div>
      </section>
    );
  }
);

ProjectsEmptyState.displayName = 'ProjectsEmptyState';
