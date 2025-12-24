'use client';

import {
  ExperienceContent,
  ExperienceEmptyState,
  ExperienceSkeleton,
} from '@/components';
import { usePortfolioContext, usePortfolioExperience } from '@/hooks';

export const Experience = () => {
  const { initialData } = usePortfolioContext();
  const {
    ref: sectionRef,
    experiences,
    isLoading,
    error,
    title,
    subtitle,
    hasExperiences,
    formatPeriod,
  } = usePortfolioExperience({ initialData });

  if (isLoading) {
    return (
      <ExperienceSkeleton ref={sectionRef} title={title} subtitle={subtitle} />
    );
  }

  if (error || !hasExperiences) {
    return (
      <ExperienceEmptyState
        ref={sectionRef}
        title={title}
        subtitle={subtitle}
        isError={true}
      />
    );
  }

  return (
    <ExperienceContent
      ref={sectionRef}
      title={title}
      subtitle={subtitle}
      experiences={experiences}
      formatPeriod={formatPeriod}
    />
  );
};
