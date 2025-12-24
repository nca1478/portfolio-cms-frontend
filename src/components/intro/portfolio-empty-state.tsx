'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components';

interface PortfolioEmptyStateProps {
  className?: string;
  message?: string;
}

export const PortfolioEmptyState = forwardRef<
  HTMLElement,
  PortfolioEmptyStateProps
>(({ className, message = 'Aún no hay información disponible.' }, ref) => {
  return (
    <motion.section
      ref={ref}
      id="home"
      className={`my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20 ${className || ''}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="Portafolio" content={undefined} />
      <div className="text-muted-foreground text-center">
        <p>{message}</p>
      </div>
    </motion.section>
  );
});

PortfolioEmptyState.displayName = 'PortfolioEmptyState';
