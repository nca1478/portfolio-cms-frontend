'use client';

import { usePortfolioContext } from '@/context/portfolio-provider';

/**
 * Hook para manejar la lógica de la página principal del portfolio
 * Centraliza el acceso a los datos iniciales del portfolio
 */
export const usePortfolioPage = () => {
  const { initialData } = usePortfolioContext();

  // Estados derivados
  const hasInitialData = Boolean(initialData);

  return {
    initialData,
    hasInitialData,
  };
};
