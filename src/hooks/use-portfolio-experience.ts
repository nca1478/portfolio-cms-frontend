'use client';

import { usePortfolio } from '@/hooks/use-portfolio';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { DEFAULT_SETTINGS } from '@/lib/constants/default-settings';
import type { PortfolioData } from '@/lib/types/portfolio.types';

interface UsePortfolioExperienceOptions {
  initialData?: PortfolioData | null;
}

export const usePortfolioExperience = (
  options: UsePortfolioExperienceOptions = {}
) => {
  const { initialData } = options;
  const { ref } = useSectionInView('Experiencia');

  const { data: portfolio, isLoading, error } = usePortfolio({ initialData });

  // Estados derivados
  const experiences = portfolio?.experiences || [];
  const title =
    portfolio?.settings?.titleExperiences || DEFAULT_SETTINGS.titleExperiences;
  const subtitle = portfolio?.settings?.subTitleExperiences;
  const hasExperiences = experiences.length > 0;
  const hasNoData = !isLoading && !portfolio;
  const hasRealError = error && !isLoading;

  // Función utilitaria para formatear períodos
  const formatPeriod = (startDate: string, endDate?: string) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate ? new Date(endDate).getFullYear() : 'Presente';
    return startYear === endYear ? `${startYear}` : `${startYear} - ${endYear}`;
  };

  return {
    ref,
    experiences,
    isLoading,
    error,
    title,
    subtitle,
    hasExperiences,
    hasNoData,
    hasRealError,
    formatPeriod,
  };
};
