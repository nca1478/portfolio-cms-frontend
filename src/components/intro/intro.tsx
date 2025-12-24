'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  Button,
  Icons,
  IntroSkeleton,
  PortfolioEmptyState,
} from '@/components';
import { usePortfolioContext } from '@/context';
import { usePortfolioIntro } from '@/hooks';

export const Intro = () => {
  const { initialData } = usePortfolioContext();
  const { ref, personalInfo, showSkeleton, hasError } = usePortfolioIntro({
    initialData,
  });

  if (showSkeleton) {
    return <IntroSkeleton ref={ref} />;
  }

  if (hasError || !personalInfo) {
    return <PortfolioEmptyState ref={ref} />;
  }

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      {/* Aviso de disponibilidad para trabajar */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">¡Disponible para trabajar!</span>
        </Link>
      </motion.div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        {personalInfo.title}
      </motion.h1>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-xl"
      >
        {personalInfo.description}
      </motion.p>

      {/* Contáctame */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Contáctame <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        {/* Descargar CV */}
        {personalInfo.cvUrl && (
          <Button
            variant="outline"
            size="lg"
            className="hidden sm:flex"
            asChild
          >
            <Link
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar CV <Icons.download className="ml-2 size-4" />
            </Link>
          </Button>
        )}

        {/* Linkedin Button */}
        {personalInfo.linkedinUrl && (
          <Button variant="outline" size="icon" asChild>
            <Link
              href={personalInfo.linkedinUrl}
              aria-label="Linkedin"
              target="_blank"
            >
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
        )}

        {/* Github Button */}
        {personalInfo.githubUrl && (
          <Button variant="outline" size="icon" asChild>
            <Link
              href={personalInfo.githubUrl}
              aria-label="Github"
              target="_blank"
            >
              <Icons.github className="size-5" />
            </Link>
          </Button>
        )}
      </motion.div>
    </section>
  );
};
