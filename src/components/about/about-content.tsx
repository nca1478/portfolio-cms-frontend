'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '../ui/section-heading';

interface AboutContentProps {
  className?: string;
  title: string;
  subtitle?: string | null;
  aboutMe?: string;
}

export const AboutContent = forwardRef<HTMLElement, AboutContentProps>(
  ({ className, title, subtitle, aboutMe }, ref) => {
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
        <div className="-mt-5 max-w-2xl text-center leading-7">
          <p className="whitespace-pre-line">{aboutMe || ''}</p>
        </div>
      </motion.section>
    );
  }
);

AboutContent.displayName = 'AboutContent';
