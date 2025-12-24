import { useEffect, useState } from 'react';

/**
 * Hook para detectar si el componente ya se hidrato en el cliente
 * Útil para mostrar skeletons durante la hidratación inicial
 */
export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}
