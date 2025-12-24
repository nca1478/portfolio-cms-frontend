import {
  About,
  AboutFallback,
  Contact,
  Experience,
  ExperienceFallback,
  Footer,
  Header,
  HydrationBoundary,
  Intro,
  IntroFallback,
  Projects,
  ProjectsFallback,
  SectionDivider,
  Skills,
  SkillsFallback,
} from '@/components';

export function PortfolioContent() {
  return (
    <div className="container flex flex-col items-center">
      <Header />

      <HydrationBoundary fallback={<IntroFallback />}>
        <Intro />
      </HydrationBoundary>

      <SectionDivider />

      <HydrationBoundary fallback={<AboutFallback />}>
        <About />
      </HydrationBoundary>

      <HydrationBoundary fallback={<SkillsFallback />}>
        <Skills />
      </HydrationBoundary>

      <HydrationBoundary fallback={<ExperienceFallback />}>
        <Experience />
      </HydrationBoundary>

      <HydrationBoundary fallback={<ProjectsFallback />}>
        <Projects />
      </HydrationBoundary>

      <Contact />

      <Footer />
    </div>
  );
}
