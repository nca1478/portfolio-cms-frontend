'use client';

import { useEffect, useState } from 'react';

import { usePortfolio } from '@/hooks/use-portfolio';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { DEFAULT_SETTINGS } from '@/lib/constants/default-settings';
import type { PortfolioData, Project } from '@/lib/types/portfolio.types';

interface UsePortfolioProjectsOptions {
  initialData?: PortfolioData | null;
}

export const usePortfolioProjects = (
  options: UsePortfolioProjectsOptions = {}
) => {
  const { initialData } = options;
  const { ref } = useSectionInView('Proyectos');

  const { data: portfolio, isLoading, error } = usePortfolio({ initialData });
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(1);

  // Estados derivados
  const projects = portfolio?.projects || [];
  const title =
    portfolio?.settings?.titleProjects || DEFAULT_SETTINGS.titleProjects;
  const subtitle = portfolio?.settings?.subTitleProjects;
  const hasProjects = projects.length > 0;
  const hasNoData = !isLoading && !portfolio;
  const hasRealError = error && !isLoading;

  // Detectar tamaño de pantalla y ajustar proyectos por página
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Resetear página cuando cambia projectsPerPage
  useEffect(() => {
    setCurrentPage(0);
  }, [projectsPerPage]);

  // Cálculos de paginación
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const showNavigation = projects.length > projectsPerPage;

  // Funciones de navegación
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCurrentProjects = (): Project[] => {
    const startIndex = currentPage * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  };

  return {
    ref,
    projects,
    isLoading,
    error,
    title,
    subtitle,
    hasProjects,
    hasNoData,
    hasRealError,
    currentPage,
    projectsPerPage,
    totalPages,
    showNavigation,
    handlePrevious,
    handleNext,
    getCurrentProjects,
  };
};
