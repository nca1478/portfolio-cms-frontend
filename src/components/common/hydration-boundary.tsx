'use client';

import { ReactNode } from 'react';

import { useHydration } from '@/hooks/use-hydration';

interface HydrationBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

// Componente que previene errores de hidratación
// mostrando un fallback hasta que el componente esté hidratado
export const HydrationBoundary = ({
  children,
  fallback = null,
}: HydrationBoundaryProps) => {
  const isHydrated = useHydration();

  if (!isHydrated) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
