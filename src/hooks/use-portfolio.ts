import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { portfolioService } from '@/lib/api/services/portfolio.service';
import { PortfolioData } from '@/lib/types/portfolio.types';

interface UsePortfolioOptions {
  initialData?: PortfolioData | null;
  staleTime?: number;
}

export const usePortfolio = (options: UsePortfolioOptions = {}) => {
  const { initialData, staleTime = 5 * 60 * 1000 } = options; // 5 minutos por defecto

  return useQuery<PortfolioData | null>({
    queryKey: ['portfolio'],
    queryFn: portfolioService.getFullPortfolio,
    initialData: initialData || undefined,
    staleTime,
    retry: (failureCount, error) => {
      // No reintentar si es un error 404 (ya manejado en el servicio)
      if (error instanceof AxiosError && error.response?.status === 404) {
        return false;
      }
      // Reintentar hasta 3 veces para otros errores
      return failureCount < 3;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};
