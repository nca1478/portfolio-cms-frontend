import Link from 'next/link';

import { Icons } from '@/components';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-muted-foreground/10 my-10 w-full border-t pt-10">
      <div className="flex flex-col items-center gap-6">
        <div className="text-muted-foreground text-center text-sm">
          <p>© {currentYear} Nelson Cadenas. Todos los derechos reservados.</p>
          <p className="mt-2">Desarrollado con usando Next.js y Tailwind CSS</p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Icons.github className="size-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
