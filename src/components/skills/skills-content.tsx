'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { SkillsIcons } from './skills-icons';

import { SectionHeading } from '@/components';
import type { Skill } from '@/lib';

interface SkillsContentProps {
  className?: string;
  title: string;
  subtitle?: string | null;
  skills: Skill[];
}

export const SkillsContent = forwardRef<HTMLElement, SkillsContentProps>(
  ({ className, title, subtitle, skills }, ref) => {
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
        <SkillsIcons skills={skills} />
      </motion.section>
    );
  }
);

SkillsContent.displayName = 'SkillsContent';
