import { useEffect } from 'react';

interface ErrorInfo {
  isRateLimit: boolean;
  errorCode: string;
  errorTitle: string;
  errorMessage: string;
}

export function usePortfolioErrorHandler(error: Error): ErrorInfo {
  useEffect(() => {
    // Log del error para debugging
    console.error('Error capturado:', error);
  }, [error]);

  // Detectar si es un error 429 (rate limit)
  const isRateLimit =
    error.message.includes('429') ||
    error.message.toLowerCase().includes('rate limit') ||
    error.message.toLowerCase().includes('too many requests');

  const errorCode = isRateLimit ? '429' : '500';
  const errorTitle = isRateLimit
    ? 'Demasiadas solicitudes'
    : 'Error del servidor';
  const errorMessage = isRateLimit
    ? 'Has realizado demasiadas solicitudes. Por favor, espera un momento antes de intentar nuevamente.'
    : 'Lo sentimos, algo salió mal en el servidor. Por favor, intenta nuevamente más tarde.';

  return {
    isRateLimit,
    errorCode,
    errorTitle,
    errorMessage,
  };
}
