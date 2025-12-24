'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { Icons, SectionHeading } from '@/components';
import { cn } from '@/lib/utils/utils';

interface ExperienceItem {
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: Array<{ name: string }>;
}

interface ExperienceContentProps {
  className?: string;
  title: string;
  subtitle?: string | null;
  experiences: ExperienceItem[];
  formatPeriod: (startDate: string, endDate?: string) => string;
}

export const ExperienceContent = forwardRef<
  HTMLElement,
  ExperienceContentProps
>(({ className, title, subtitle, experiences, formatPeriod }, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className={`my-10 scroll-mt-28 md:mb-20 ${className || ''}`}
    >
      <SectionHeading heading={title} content={subtitle || undefined} />
      <div className="relative max-w-screen-md">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="not-last:pb-12 relative pl-8 [&:not(:last-child)]:pb-10"
          >
            <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]">
              <div className="border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2" />
            </div>
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
              className={cn('space-y-3 opacity-0')}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full border">
                  <Icons.building className="size-5" />
                </div>
                <span className="text-lg font-semibold">
                  {experience.company}, {experience.location}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium">{experience.position}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <Icons.calendar className="size-4" />
                  <span>
                    {formatPeriod(experience.startDate, experience.endDate)}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-full border px-3 py-1 text-sm "
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
});

ExperienceContent.displayName = 'ExperienceContent';
