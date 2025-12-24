'use client';

import { motion } from 'framer-motion';

import { SkillIcon } from '@/components';
import type { Skill } from '@/lib';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

interface SkillsIconsProps {
  skills: Skill[];
}

export const SkillsIcons = ({ skills }: SkillsIconsProps) => {
  if (skills.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 flex w-full flex-wrap justify-center gap-8 px-5 sm:gap-10 md:mt-14">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <SkillIcon
            svgContent={skill.icon}
            svgUrl={skill.file?.url}
            skillName={skill.name}
          />
        </motion.div>
      ))}
    </div>
  );
};
