'use client';

import { createContext, ReactNode, useContext } from 'react';

import type { PortfolioData } from '@/lib';

interface PortfolioContextType {
  initialData: PortfolioData | null;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

interface PortfolioProviderProps {
  children: ReactNode;
  initialData: PortfolioData | null;
}

export function PortfolioProvider({
  children,
  initialData,
}: PortfolioProviderProps) {
  return (
    <PortfolioContext.Provider value={{ initialData }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolioContext() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error(
      'usePortfolioContext must be used within a PortfolioProvider'
    );
  }
  return context;
}
