'use client';

import { usePortfolio } from '@/hooks/use-portfolio';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { DEFAULT_SETTINGS } from '@/lib/constants/default-settings';
import type { PortfolioData } from '@/lib/types/portfolio.types';

interface UsePortfolioAboutOptions {
  initialData?: PortfolioData | null;
}

export const usePortfolioAbout = (options: UsePortfolioAboutOptions = {}) => {
  const { initialData } = options;
  const { ref } = useSectionInView('Sobre mí');

  const { data: portfolio, isLoading, error } = usePortfolio({ initialData });

  // Estados derivados - Usar datos disponibles
  const currentData = portfolio || initialData;
  const title =
    currentData?.settings?.titleAbout || DEFAULT_SETTINGS.titleAbout;
  const subtitle = currentData?.settings?.subTitleAbout;
  const aboutMe = currentData?.personalInfo?.aboutMe;
  const hasContent = Boolean(aboutMe);
  const showSkeleton = isLoading && !currentData;

  return {
    ref,
    portfolio: currentData,
    isLoading,
    error,
    title,
    subtitle,
    aboutMe,
    hasContent,
    showSkeleton,
  };
};
