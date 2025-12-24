import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '../ui/section-heading';

interface ProjectsSkeletonProps {
  className?: string;
  title?: string;
  subtitle?: string | null;
}

export const ProjectsSkeleton = forwardRef<HTMLElement, ProjectsSkeletonProps>(
  ({ className, title = 'Proyectos', subtitle }, ref) => {
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
        <div className="flex flex-col gap-7 md:flex-row">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-muted h-96 w-full animate-pulse rounded"
            />
          ))}
        </div>
      </section>
    );
  }
);

ProjectsSkeleton.displayName = 'ProjectsSkeleton';
