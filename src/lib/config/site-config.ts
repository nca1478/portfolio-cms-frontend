import { env } from '@/env.mjs';

export const siteConfig = {
  // Static fallback values - these will be used if dynamic metadata fails
  title: 'Pedro Perez | Fullstack developer',
  description:
    'Desarrollador full-stack con 5+ años de experiencia. Experto en JavaScript moderno y diseño. También contribuyo a código abierto y escribo artículos técnicos.',
  keywords: [
    'Pedro Perez',
    'Fullstack developer',
    'Back-end',
    'Front-end',
    'Javascript',
    'Typescript',
    'HTML',
    'CSS',
    'Front-end',
    'React',
    'Next.js',
    'UI/UX',
    'Responsive design',
    'Back-end',
    'Nodejs',
    'Nestjs',
    'Postgres',
    'Mongodb',
    'Docker',
    'Google Cloud',
  ],
  // Site configuration (not managed dynamically)
  url: env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID || '',
};
