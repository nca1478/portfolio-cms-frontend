'use client';

/**
 * Hook para centralizar las configuraciones de animaciones del portfolio
 * Proporciona configuraciones consistentes para framer-motion
 */
export const usePortfolioAnimations = () => {
  // Configuraciones de animación estándar
  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.175 },
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: 'tween', duration: 0.2 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  const slideInFromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.3 },
  };

  // Configuraciones para viewport
  const viewportOnce = {
    once: true,
  };

  // Configuraciones para whileInView
  const whileInViewFadeUp = {
    opacity: 1,
    y: 0,
  };

  // Delays escalonados para listas
  const getStaggerDelay = (index: number, baseDelay: number = 0.1) => ({
    delay: baseDelay * index,
  });

  return {
    fadeInUp,
    fadeInScale,
    fadeIn,
    slideInFromRight,
    viewportOnce,
    whileInViewFadeUp,
    getStaggerDelay,
  };
};
