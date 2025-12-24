'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { Button, Icons, Project, SectionHeading } from '@/components';
import type { Project as ProjectType } from '@/lib/types/portfolio.types';

interface ProjectsContentProps {
  className?: string;
  title: string;
  subtitle?: string | null;
  currentPage: number;
  projectsPerPage: number;
  showNavigation: boolean;
  handlePrevious: () => void;
  handleNext: () => void;
  getCurrentProjects: () => ProjectType[];
}

export const ProjectsContent = forwardRef<HTMLElement, ProjectsContentProps>(
  (
    {
      className,
      title,
      subtitle,
      currentPage,
      projectsPerPage,
      showNavigation,
      handlePrevious,
      handleNext,
      getCurrentProjects,
    },
    ref
  ) => {
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
        <div className="relative flex items-center gap-4">
          {/* Flecha izquierda */}
          {showNavigation && (
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              aria-label="Página anterior"
              className="shrink-0"
            >
              <Icons.chevronLeft className="size-5" />
            </Button>
          )}

          {/* Contenedor de proyectos */}
          <div className="flex-1">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-7 md:flex-row"
            >
              {getCurrentProjects().map((project, index) => (
                <Project
                  key={project.title}
                  project={project}
                  index={currentPage * projectsPerPage + index}
                />
              ))}
            </motion.div>
          </div>

          {/* Flecha derecha */}
          {showNavigation && (
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Página siguiente"
              className="shrink-0"
            >
              <Icons.chevronRight className="size-5" />
            </Button>
          )}
        </div>
      </section>
    );
  }
);

ProjectsContent.displayName = 'ProjectsContent';
