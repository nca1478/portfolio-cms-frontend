'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button, Icons } from '@/components';
import { Project as ProjectType } from '@/lib';

type TProps = {
  project: ProjectType;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotateX: -15,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: 0.15 * index,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { title, description, skills, file, githubUrl, liveUrl } = project;
  const imageUrl = file?.url || '/images/placeholder-project.svg';

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="flex size-full flex-col rounded border p-5 md:w-1/2"
    >
      <div className="aspect-video w-full overflow-hidden rounded">
        {liveUrl ? (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block size-full cursor-pointer"
          >
            <Image
              src={imageUrl}
              alt={title}
              height={390}
              width={600}
              className="size-full rounded object-cover transition-transform hover:scale-105"
            />
          </Link>
        ) : (
          <Image
            src={imageUrl}
            alt={title}
            height={390}
            width={600}
            className="size-full rounded object-cover"
          />
        )}
      </div>
      <h3 className="mt-3 line-clamp-1 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground mb-2 mt-1 line-clamp-2 min-h-12">
        {description}
      </p>
      <div className="mb-4 flex min-h-10 flex-wrap gap-2">
        {skills.slice(0, 4).map((skill) => (
          <Button
            variant="outline"
            size="sm"
            key={skill.name}
            className="pointer-events-none"
          >
            {skill.name}
          </Button>
        ))}
        {skills.length > 4 && (
          <Button variant="outline" size="sm" className="pointer-events-none">
            +{skills.length - 4}
          </Button>
        )}
      </div>
      <div className="border-t pt-4" />
      <div className="mt-auto flex justify-end gap-2">
        {liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Icons.externalLink className="mr-2 size-4" />
              Ver Online
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Icons.github className="mr-2 size-4" />
              Repo
            </Link>
          </Button>
        )}
      </div>
    </motion.div>
  );
};
