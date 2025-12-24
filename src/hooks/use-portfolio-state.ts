'use client';

import { AxiosError } from 'axios';

/**
 * Hook para manejar estados comunes del portfolio
 * Centraliza la lógica de manejo de errores y estados de carga
 */
export const usePortfolioState = () => {
  // Función para determinar si mostrar skeleton
  const shouldShowSkeleton = (
    isLoading: boolean,
    hasInitialData: boolean,
    isHydrated: boolean = true
  ) => {
    return !isHydrated || (isLoading && !hasInitialData);
  };

  // Función para manejar errores de manera consistente
  const handleError = (error: unknown, context: string = 'portfolio') => {
    if (error instanceof AxiosError) {
      const is404 = error.response?.status === 404;

      if (!is404) {
        console.error(`Error fetching ${context}:`, error);
      }

      return {
        is404,
        isNetworkError: !error.response,
        statusCode: error.response?.status,
        message: error.message,
      };
    }

    console.error(`Unexpected error in ${context}:`, error);
    return {
      is404: false,
      isNetworkError: false,
      statusCode: null,
      message: 'Error inesperado',
    };
  };

  // Función para determinar si hay contenido disponible
  const hasContent = (data: unknown): boolean => {
    if (Array.isArray(data)) {
      return data.length > 0;
    }

    if (typeof data === 'object' && data !== null) {
      return Object.keys(data).length > 0;
    }

    return Boolean(data);
  };

  // Estados de UI comunes
  const getEmptyState = (
    message: string = 'Aún no hay información disponible.'
  ) => ({
    message,
    showIcon: true,
  });

  const getErrorState = (
    message: string = 'No se puede cargar la información en este momento.'
  ) => ({
    message,
    showRetry: true,
  });

  return {
    shouldShowSkeleton,
    handleError,
    hasContent,
    getEmptyState,
    getErrorState,
  };
};
