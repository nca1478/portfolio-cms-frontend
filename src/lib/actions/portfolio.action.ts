'use server';

import { portfolioService } from '@/lib/api/services/portfolio.service';
import type { PortfolioData } from '@/lib/types/portfolio.types';

export async function getPortfolioData(): Promise<PortfolioData | null> {
  try {
    return await portfolioService.getFullPortfolio();
  } catch (error) {
    // El servicio ya maneja los errores 404, solo logueamos otros errores
    console.error('Error fetching portfolio data:', error);
    return null;
  }
}
