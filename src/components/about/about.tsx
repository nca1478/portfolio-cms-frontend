'use client';

import { AboutContent } from './about-content';
import { AboutEmptyState } from './about-empty-state';
import { AboutSkeleton } from './about-skeleton';

import { usePortfolioAbout, usePortfolioContext } from '@/hooks';

export const About = () => {
  const { initialData } = usePortfolioContext();
  const { ref, title, subtitle, aboutMe, hasContent, showSkeleton } =
    usePortfolioAbout({ initialData });

  if (showSkeleton) {
    return <AboutSkeleton ref={ref} title={title} subtitle={subtitle} />;
  }

  if (!hasContent) {
    return <AboutEmptyState ref={ref} title={title} subtitle={subtitle} />;
  }

  return (
    <AboutContent
      ref={ref}
      title={title}
      subtitle={subtitle}
      aboutMe={aboutMe}
    />
  );
};
