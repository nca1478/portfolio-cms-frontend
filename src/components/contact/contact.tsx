'use client';

import { motion } from 'framer-motion';

import { Button, Icons, SectionHeading } from '@/components';
import { usePortfolioContact, usePortfolioContext } from '@/hooks';
import { cn } from '@/lib/utils/utils';

export const Contact = () => {
  const { initialData } = usePortfolioContext();
  const {
    ref,
    title,
    subtitle,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  } = usePortfolioContact({ initialData });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading heading={title} content={subtitle || undefined} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
        <div className="w-full max-w-xl">
          <label
            htmlFor="name"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              errors.name?.message && 'text-destructive'
            )}
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Juan Pérez"
            {...register('name')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.name?.message && 'border-destructive'
            )}
          />
          {errors.name?.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="w-full max-w-xl">
          <label
            htmlFor="email"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              errors.email?.message && 'text-destructive'
            )}
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="hola@gmail.com"
            {...register('email')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.email?.message && 'border-destructive'
            )}
          />
          {errors.email?.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="w-full max-w-xl">
          <label
            htmlFor="subject"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              errors.subject?.message && 'text-destructive'
            )}
          >
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Consulta sobre proyecto"
            {...register('subject')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.subject?.message && 'border-destructive'
            )}
          />
          {errors.subject?.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.subject?.message}
            </p>
          )}
        </div>
        <div className="w-full max-w-xl">
          <label
            htmlFor="message"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              errors.message?.message && 'text-destructive'
            )}
          >
            Mensaje
          </label>
          <textarea
            id="message"
            placeholder="¡Hola! ¿Cómo estás?"
            {...register('message')}
            className={cn(
              'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-60 w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              errors.message?.message && 'border-destructive'
            )}
          ></textarea>
          {errors.message?.message && (
            <p className="text-destructive mt-1 text-sm">
              {errors.message?.message}
            </p>
          )}
        </div>
        <Button size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}{' '}
          <Icons.arrowRight className="ml-2 size-4" />
        </Button>
      </form>
    </motion.section>
  );
};
