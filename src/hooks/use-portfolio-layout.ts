'use client';

import type { PortfolioData } from '@/lib/types/portfolio.types';

interface UsePortfolioLayoutOptions {
  initialData?: PortfolioData | null;
}

/**
 * Hook para manejar la lógica del layout principal del portfolio
 * Centraliza la configuración y estado del layout
 */
export const usePortfolioLayout = (options: UsePortfolioLayoutOptions = {}) => {
  const { initialData } = options;

  // Estados derivados del layout
  const hasData = Boolean(initialData);
  const isDataLoaded = initialData !== undefined;

  // Configuración del layout
  const layoutConfig = {
    showThemeToggle: true,
    themeTogglePosition: 'fixed bottom-8 right-8',
    containerClasses: 'relative min-h-screen',
  };

  return {
    initialData,
    hasData,
    isDataLoaded,
    layoutConfig,
  };
};
