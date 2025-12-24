'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button, Icons } from '@/components';
import { usePortfolioErrorHandler } from '@/hooks';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const { isRateLimit, errorCode, errorTitle, errorMessage } =
    usePortfolioErrorHandler(error);

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 text-center"
      >
        {/* Número de error con animación */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
        >
          <h1 className="font-heading text-primary text-9xl font-extrabold md:text-[12rem]">
            {errorCode}
          </h1>
        </motion.div>

        {/* Mensaje de error */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4"
        >
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            {errorTitle}
          </h2>
          <p className="text-muted-foreground max-w-md text-lg">
            {errorMessage}
          </p>
        </motion.div>

        {/* Información adicional para rate limit */}
        {isRateLimit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground flex items-center gap-2 text-sm"
          >
            <Icons.calendar className="size-4" />
            <span>Espera unos minutos antes de intentar nuevamente</span>
          </motion.div>
        )}

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            onClick={reset}
            size="lg"
            variant="default"
            disabled={isRateLimit}
          >
            {isRateLimit ? 'Espera un momento...' : 'Intentar de nuevo'}
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">
              <Icons.home className="mr-2 size-5" />
              Volver al inicio
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
