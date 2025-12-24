'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button, Icons } from '@/components';

export default function NotFound() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 text-center"
      >
        {/* Número 404 con animación */}
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
            404
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
            Página no encontrada
          </h2>
          <p className="text-muted-foreground max-w-md text-lg">
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </p>
        </motion.div>

        {/* Botón para volver al inicio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button asChild size="lg">
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
