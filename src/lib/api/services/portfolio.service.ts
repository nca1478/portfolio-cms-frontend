import { AxiosError } from 'axios';

import { axiosClient } from '../axios-client';
import { API_ENDPOINTS } from '../endpoints';

import { PortfolioData } from '@/lib/types/portfolio.types';

export const portfolioService = {
  getFullPortfolio: async (): Promise<PortfolioData | null> => {
    try {
      const response = await axiosClient.get<PortfolioData>(
        API_ENDPOINTS.PORTFOLIO
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        // 404 significa que no hay datos disponibles o está desactivado
        // No es un error real, simplemente no hay contenido
        return null;
      }
      // Re-lanzar otros errores para que sean manejados por React Query
      throw error;
    }
  },
};
