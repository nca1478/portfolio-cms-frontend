'use client';

import { usePortfolio } from '@/hooks/use-portfolio';
import { useSectionInView } from '@/hooks/use-section-in-view';
import type { PortfolioData } from '@/lib/types/portfolio.types';

interface UsePortfolioIntroOptions {
  initialData?: PortfolioData | null;
}

export const usePortfolioIntro = (options: UsePortfolioIntroOptions = {}) => {
  const { initialData } = options;
  const { ref } = useSectionInView('Inicio');

  const {
    data: portfolio,
    isLoading,
    error,
  } = usePortfolio({
    initialData,
    staleTime: 10 * 60 * 1000, // 10 minutos para datos de intro
  });

  // Estados derivados - Usar datos disponibles
  const currentData = portfolio || initialData;
  const showSkeleton = isLoading && !currentData;
  const hasError = !isLoading && !currentData;
  const personalInfo = currentData?.personalInfo;

  return {
    ref,
    portfolio: currentData,
    personalInfo,
    isLoading,
    error,
    showSkeleton,
    hasError,
  };
};
