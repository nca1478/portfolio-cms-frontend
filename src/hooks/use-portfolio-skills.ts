'use client';

import { usePortfolio } from '@/hooks/use-portfolio';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { DEFAULT_SETTINGS } from '@/lib/constants/default-settings';
import type { PortfolioData, Skill } from '@/lib/types/portfolio.types';

interface UsePortfolioSkillsOptions {
  initialData?: PortfolioData | null;
}

export const usePortfolioSkills = (options: UsePortfolioSkillsOptions = {}) => {
  const { initialData } = options;
  const { ref } = useSectionInView('Habilidades');

  const { data: portfolio, isLoading, error } = usePortfolio({ initialData });

  // Estados derivados - Usar datos disponibles
  const currentData = portfolio || initialData;

  // Procesar skills
  let skills: Skill[] = [];
  if (currentData) {
    skills = currentData.skillsByCategory
      .flatMap((category) => category.skills)
      .filter((skill) => skill.icon || skill.file);
  }

  const title =
    currentData?.settings?.titleSkills || DEFAULT_SETTINGS.titleSkills;
  const subtitle = currentData?.settings?.subTitleSkills;
  const hasSkills = skills.length > 0;
  const showSkeleton = isLoading && !currentData;
  const settings = currentData?.settings;

  return {
    ref,
    skills,
    isLoading,
    error,
    title,
    subtitle,
    hasSkills,
    showSkeleton,
    settings,
    portfolio: currentData,
  };
};
