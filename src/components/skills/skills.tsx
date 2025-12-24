'use client';

import { SkillsContent } from './skills-content';
import { SkillsEmptyState } from './skills-empty-state';
import { SkillsSkeleton } from './skills-skeleton';

import { usePortfolioContext } from '@/context';
import { usePortfolioSkills } from '@/hooks';

export const Skills = () => {
  const { initialData } = usePortfolioContext();
  const {
    ref: sectionRef,
    skills,
    error,
    title,
    subtitle,
    hasSkills,
    showSkeleton,
  } = usePortfolioSkills({
    initialData,
  });

  if (showSkeleton) {
    return (
      <SkillsSkeleton ref={sectionRef} title={title} subtitle={subtitle} />
    );
  }

  if (error || !hasSkills) {
    return (
      <SkillsEmptyState
        ref={sectionRef}
        title={title}
        subtitle={subtitle}
        isError={!!error}
      />
    );
  }

  return (
    <SkillsContent
      ref={sectionRef}
      title={title}
      subtitle={subtitle}
      skills={skills}
    />
  );
};
