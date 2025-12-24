'use client';

import { ProjectsContent } from './projects-content';
import { ProjectsEmptyState } from './projects-empty-state';
import { ProjectsSkeleton } from './projects-skeleton';

import { usePortfolioContext } from '@/context';
import { usePortfolioProjects } from '@/hooks';

export const Projects = () => {
  const { initialData } = usePortfolioContext();
  const {
    ref,
    isLoading,
    error,
    title,
    subtitle,
    hasProjects,
    currentPage,
    projectsPerPage,
    showNavigation,
    handlePrevious,
    handleNext,
    getCurrentProjects,
  } = usePortfolioProjects({ initialData });

  if (isLoading) {
    return <ProjectsSkeleton ref={ref} title={title} subtitle={subtitle} />;
  }

  if (error || !hasProjects) {
    return (
      <ProjectsEmptyState
        ref={ref}
        title={title}
        subtitle={subtitle}
        isError={true}
      />
    );
  }

  return (
    <ProjectsContent
      ref={ref}
      title={title}
      subtitle={subtitle}
      currentPage={currentPage}
      projectsPerPage={projectsPerPage}
      showNavigation={showNavigation}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
      getCurrentProjects={getCurrentProjects}
    />
  );
};
