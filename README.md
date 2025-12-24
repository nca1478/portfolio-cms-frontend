# 🌟 Portfolio Personal - Frontend

Sitio web de portfolio personal moderno y optimizado construido con Next.js 15, TypeScript y Tailwind CSS. Diseñado para mostrar habilidades, experiencia profesional y proyectos de manera elegante y performante.

## 🎯 Características Principales

- ✅ **Server-Side Rendering (SSR)** para SEO óptimo y carga rápida
- ✅ **Diseño responsive** que se adapta a todos los dispositivos
- ✅ **Modo claro/oscuro** con persistencia y detección automática
- ✅ **Animaciones fluidas** con Framer Motion para una UX excepcional
- ✅ **Iconos SVG dinámicos** cargados desde la API del backend
- ✅ **Formulario de contacto** funcional con validación robusta
- ✅ **SEO optimizado** con meta tags dinámicos y sitemap automático
- ✅ **Performance optimizada** con lazy loading y code splitting
- ✅ **Accesibilidad completa** siguiendo estándares WCAG
- ✅ **Integración completa** con el CMS backend para contenido dinámico

## 🎉 Descripción del Proyecto

Portfolio personal que consume datos dinámicamente del backend CMS, permitiendo actualizar contenido sin necesidad de redesplegar el sitio. Incluye secciones para información personal, habilidades técnicas, experiencia profesional y showcase de proyectos.

## 📋 Tabla de Contenidos

- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [🏗️ Arquitectura](#️-arquitectura)
- [📋 Requisitos Previos](#-requisitos-previos)
- [💾 Instalación y Configuración](#-instalación-y-configuración)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Características de UI/UX](#-características-de-uiux)
- [🔌 Integración con Backend](#-integración-con-backend)
- [🚀 Performance y SEO](#-performance-y-seo)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🐛 Troubleshooting](#-troubleshooting)

## 💾 Instalación y Configuración

### 1. Instalación de Dependencias

```bash
# Clonar el repositorio (si no está clonado)
git clone <repository-url>
cd portfolio-cms/frontend

# Instalar dependencias
npm install

# Verificar instalación
npm list --depth=0
```

### 2. Configuración de Variables de Entorno

```bash
# Copiar archivo de ejemplo
cp .env.example .env.local

# Editar variables según tu entorno
nano .env.local
```

#### Variables Requeridas

```env
# URL del sitio (requerido para sitemap)
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com

# API del backend (para contenido dinámico)
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api/v1

# Resend API (para formulario de contacto)
RESEND_API_KEY=tu_resend_api_key

# Opcional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Verificar Backend (Opcional)

```bash
# Si usas contenido dinámico, verificar que el backend esté corriendo
curl http://localhost:3001/api/v1/portfolio

# Si no está corriendo:
cd ../backend && npm run start:dev
```

### 4. Iniciar Desarrollo

```bash
# Modo desarrollo con Turbo
npm run dev

# El sitio estará disponible en:
# http://localhost:3000
```

### 5. Verificar Instalación

1. Abrir `http://localhost:3000`
2. Verificar que todas las secciones cargan correctamente
3. Probar el modo claro/oscuro
4. Verificar animaciones y transiciones

## 🛠️ Stack Tecnológico

### Core Framework

- **Next.js 15.2.4** - Framework React con SSR/SSG y App Router
- **React 19** - Librería UI con las últimas características
- **TypeScript** - Tipado estático para desarrollo robusto

### Styling y UI

- **Tailwind CSS 3.4** - Framework utility-first para estilos
- **Tailwind Animate** - Animaciones CSS optimizadas
- **Framer Motion 12.6** - Animaciones fluidas y transiciones
- **Lucide React** - Iconos SVG optimizados y consistentes
- **next-themes** - Manejo de temas claro/oscuro

### Formularios y Validación

- **React Hook Form 7.54** - Gestión performante de formularios
- **Zod 3.24** - Validación de esquemas type-safe
- **@hookform/resolvers** - Integración RHF + Zod

### Estado y HTTP

- **TanStack Query 5.90** - Estado asíncrono y cache inteligente
- **Zustand 5.0** - Estado global ligero
- **Axios 1.13** - Cliente HTTP con interceptores

### Comunicación y SEO

- **Resend 4.2** - Servicio de email para formulario de contacto
- **next-sitemap 4.2** - Generación automática de sitemap
- **@t3-oss/env-nextjs** - Validación de variables de entorno

### Herramientas de Desarrollo

- **ESLint** - Linting con reglas específicas para Next.js
- **Prettier** - Formateo automático de código
- **Husky** - Git hooks para calidad de código
- **Commitlint** - Convenciones de commits

## 🏗️ Arquitectura

### Arquitectura de Next.js App Router

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout raíz
│   ├── page.tsx           # Página principal
│   ├── loading.tsx        # UI de carga
│   ├── error.tsx          # Manejo de errores
│   └── not-found.tsx      # Página 404
├── components/             # Componentes reutilizables
│   ├── ui/                # Componentes base
│   ├── sections/          # Secciones del portfolio
│   ├── forms/             # Componentes de formularios
│   └── layout/            # Componentes de layout
├── lib/                   # Utilidades y configuración
├── hooks/                 # Custom hooks
├── types/                 # Definiciones de tipos
├── services/              # Servicios de API
└── styles/                # Estilos adicionales
```

### Principios de Diseño

- **Performance First**: SSR, lazy loading, optimización de imágenes
- **SEO Optimizado**: Meta tags dinámicos, structured data, sitemap
- **Accesibilidad**: ARIA labels, navegación por teclado, contraste
- **Mobile First**: Diseño responsive desde móvil hacia desktop
- **Type Safety**: TypeScript en toda la aplicación

## 📋 Requisitos Previos

### Software Requerido

- **Node.js 18+** (LTS recomendado)
- **npm 9+** o **yarn 1.22+**
- **Git** para control de versiones

### Servicios Externos

- **Resend Account** - Para formulario de contacto (opcional)
- **Backend API** - Para contenido dinámico (opcional)
- **Analytics** - Google Analytics, Vercel Analytics, etc. (opcional)

### Verificación de Requisitos

```bash
# Verificar versiones
node --version    # >= 18.0.0
npm --version     # >= 9.0.0

# Verificar backend (si se usa contenido dinámico)
curl http://localhost:3001/api/v1/portfolio
```

## 📁 Estructura del Proyecto

```
frontend/
├── public/                     # Assets estáticos
│   ├── images/                # Imágenes del portfolio
│   │   ├── hero/              # Imágenes del hero
│   │   ├── projects/          # Screenshots de proyectos
│   │   └── icons/             # Iconos y favicons
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml            # Generado automáticamente
│
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── globals.css        # Estilos globales y Tailwind
│   │   ├── layout.tsx         # Layout raíz con providers
│   │   ├── page.tsx           # Página principal del portfolio
│   │   ├── loading.tsx        # Componente de carga
│   │   ├── error.tsx          # Manejo de errores
│   │   └── not-found.tsx      # Página 404 personalizada
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── ui/                # Componentes base
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── sections/          # Secciones del portfolio
│   │   │   ├── hero.tsx       # Sección principal
│   │   │   ├── about.tsx      # Información personal
│   │   │   ├── skills.tsx     # Habilidades técnicas
│   │   │   ├── experience.tsx # Experiencia profesional
│   │   │   ├── projects.tsx   # Showcase de proyectos
│   │   │   └── contact.tsx    # Formulario de contacto
│   │   ├── layout/            # Componentes de layout
│   │   │   ├── header.tsx     # Navegación principal
│   │   │   ├── footer.tsx     # Pie de página
│   │   │   └── navigation.tsx # Menú de navegación
│   │   └── forms/             # Componentes de formularios
│   │       └── contact-form.tsx
│   │
│   ├── lib/                    # Utilidades y configuración
│   │   ├── utils.ts           # Utilidades generales
│   │   ├── cn.ts              # Utility para clases CSS
│   │   ├── constants.ts       # Constantes de la aplicación
│   │   ├── validations.ts     # Esquemas de validación Zod
│   │   └── env.ts             # Validación de variables de entorno
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── use-theme.ts       # Hook para tema claro/oscuro
│   │   ├── use-scroll.ts      # Hook para scroll y navegación
│   │   └── use-intersection.ts # Hook para animaciones on-scroll
│   │
│   ├── services/               # Servicios de API
│   │   ├── api.ts             # Cliente HTTP configurado
│   │   ├── portfolio.ts       # Servicios del portfolio
│   │   └── contact.ts         # Servicio de contacto
│   │
│   ├── types/                  # Definiciones de tipos TypeScript
│   │   ├── portfolio.types.ts # Tipos del portfolio
│   │   ├── api.types.ts       # Tipos de API
│   │   └── common.types.ts    # Tipos comunes
│   │
│   └── styles/                 # Estilos adicionales
│       └── components.css     # Estilos específicos de componentes
│
├── .env.example               # Ejemplo de variables de entorno
├── .env.local                 # Variables locales (no commitear)
├── next.config.js             # Configuración de Next.js
├── tailwind.config.ts         # Configuración de Tailwind CSS
├── tsconfig.json              # Configuración de TypeScript
├── next-sitemap.config.js     # Configuración del sitemap
└── package.json               # Dependencias y scripts
```

## 🎨 Características de UI/UX

### Diseño Responsive

#### Breakpoints de Tailwind

```css
/* Mobile First Approach */
sm: 640px   /* Tablet pequeña */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeño */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

#### Componentes Adaptativos

```typescript
// Ejemplo de componente responsive
const HeroSection = () => {
  return (
    <section className="
      px-4 py-8           /* Mobile */
      sm:px-6 sm:py-12    /* Tablet */
      lg:px-8 lg:py-16    /* Desktop */
      xl:px-12 xl:py-20   /* Desktop grande */
    ">
      <h1 className="
        text-2xl          /* Mobile */
        sm:text-3xl       /* Tablet */
        lg:text-4xl       /* Desktop */
        xl:text-5xl       /* Desktop grande */
      ">
        Portfolio Personal
      </h1>
    </section>
  );
};
```

### Sistema de Temas

#### Modo Claro/Oscuro

```typescript
// Implementación con next-themes
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
};

// Hook para usar el tema
const useTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, setTheme, toggleTheme, systemTheme };
};
```

#### Paleta de Colores

```css
/* Tailwind CSS Custom Colors */
:root {
  --primary: 220 90% 56%; /* Blue */
  --secondary: 220 14% 96%; /* Light Gray */
  --accent: 142 76% 36%; /* Green */
  --muted: 220 14% 96%; /* Muted Gray */
}

.dark {
  --primary: 217 91% 60%; /* Light Blue */
  --secondary: 222 84% 5%; /* Dark Gray */
  --accent: 142 70% 45%; /* Light Green */
  --muted: 217 33% 17%; /* Dark Muted */
}
```

### Animaciones con Framer Motion

#### Animaciones de Entrada

```typescript
// Animación de fade-in con slide
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Animación escalonada para listas
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Uso en componentes
const SkillsSection = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          variants={fadeInUp}
          className="skill-card"
        >
          {skill.name}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

#### Animaciones de Hover

```typescript
// Efectos hover para tarjetas de proyectos
const projectCardVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={projectCardVariants}
      initial="rest"
      whileHover="hover"
      className="project-card"
    >
      {/* Contenido del proyecto */}
    </motion.div>
  );
};
```

### Iconos SVG Dinámicos

#### Carga desde Backend

```typescript
// Servicio para obtener habilidades con iconos
const getSkillsWithIcons = async (): Promise<Skill[]> => {
  const response = await api.get('/portfolio/skills');
  return response.data.map((skill: Skill) => ({
    ...skill,
    // El icono SVG viene como string desde el backend
    icon: skill.icon || null
  }));
};

// Componente para renderizar iconos SVG
const SkillIcon = ({ skill }: { skill: Skill }) => {
  if (!skill.icon) return <DefaultIcon />;

  return (
    <div
      className="skill-icon"
      dangerouslySetInnerHTML={{ __html: skill.icon }}
      title={skill.name}
    />
  );
};
```

#### Tooltips Interactivos

```typescript
// Tooltip con información de habilidad
const SkillWithTooltip = ({ skill }: { skill: Skill }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer"
        >
          <SkillIcon skill={skill} />
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{skill.name}</p>
        <p className="text-sm text-muted-foreground">
          Nivel: {skill.level}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};
```

## 🔌 Integración con Backend

### Arquitectura de Datos

#### Contenido Estático vs Dinámico

```typescript
// Configuración híbrida
const CONTENT_SOURCE = {
  // Contenido estático (rápido, no requiere backend)
  static: {
    hero: true,
    navigation: true,
    footer: true,
  },
  // Contenido dinámico (actualizable desde CMS)
  dynamic: {
    personalInfo: true,
    skills: true,
    experiences: true,
    projects: true,
  },
};
```

#### Servicios de API

```typescript
// Cliente HTTP configurado
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Servicio del portfolio
export const portfolioService = {
  // Obtener información personal
  getPersonalInfo: async (): Promise<PersonalInfo> => {
    const response = await api.get('/portfolio/personal-info');
    return response.data;
  },

  // Obtener habilidades por categoría
  getSkills: async (): Promise<SkillsByCategory> => {
    const response = await api.get('/portfolio/skills');
    return response.data;
  },

  // Obtener experiencia profesional
  getExperiences: async (): Promise<Experience[]> => {
    const response = await api.get('/portfolio/experiences');
    return response.data;
  },

  // Obtener proyectos
  getProjects: async (): Promise<Project[]> => {
    const response = await api.get('/portfolio/projects');
    return response.data;
  },
};
```

### Server-Side Rendering (SSR)

#### Carga de Datos en el Servidor

```typescript
// app/page.tsx - Página principal con SSR
export default async function HomePage() {
  // Datos cargados en el servidor
  const [personalInfo, skills, experiences, projects] = await Promise.all([
    portfolioService.getPersonalInfo(),
    portfolioService.getSkills(),
    portfolioService.getExperiences(),
    portfolioService.getProjects()
  ]);

  return (
    <main>
      <HeroSection personalInfo={personalInfo} />
      <AboutSection personalInfo={personalInfo} />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  );
}
```

#### Manejo de Errores en SSR

```typescript
// Fallback para cuando el backend no está disponible
const getPortfolioData = async () => {
  try {
    return await portfolioService.getAll();
  } catch (error) {
    console.warn('Backend no disponible, usando datos estáticos');
    return {
      personalInfo: staticPersonalInfo,
      skills: staticSkills,
      experiences: staticExperiences,
      projects: staticProjects,
    };
  }
};
```

### Estado del Cliente

#### TanStack Query para Cache

```typescript
// Queries para datos del portfolio
export const usePortfolioQueries = () => {
  const personalInfo = useQuery({
    queryKey: ['portfolio', 'personal-info'],
    queryFn: portfolioService.getPersonalInfo,
    staleTime: 5 * 60 * 1000, // 5 minutos
    cacheTime: 10 * 60 * 1000, // 10 minutos
  });

  const skills = useQuery({
    queryKey: ['portfolio', 'skills'],
    queryFn: portfolioService.getSkills,
    staleTime: 5 * 60 * 1000,
  });

  return { personalInfo, skills };
};
```

## 🚀 Performance y SEO

### Optimizaciones de Performance

#### Lazy Loading y Code Splitting

```typescript
// Lazy loading de componentes pesados
const ProjectsSection = lazy(() => import('./sections/projects'));
const ContactForm = lazy(() => import('./forms/contact-form'));

// Uso con Suspense
const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />

      <Suspense fallback={<SkillsSkeleton />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsSection />
      </Suspense>
    </main>
  );
};
```

#### Optimización de Imágenes

```typescript
// Componente de imagen optimizada
import Image from 'next/image';

const OptimizedImage = ({ src, alt, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  );
};
```

### SEO Optimization

#### Meta Tags Dinámicos

```typescript
// app/layout.tsx - Meta tags globales
export const metadata: Metadata = {
  title: {
    default: 'Portfolio Personal - Desarrollador Full Stack',
    template: '%s | Portfolio Personal',
  },
  description:
    'Portfolio profesional de desarrollador Full Stack especializado en React, Node.js y tecnologías modernas.',
  keywords: ['desarrollador', 'full stack', 'react', 'nodejs', 'portfolio'],
  authors: [{ name: 'Tu Nombre' }],
  creator: 'Tu Nombre',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Portfolio Personal - Desarrollador Full Stack',
    description:
      'Portfolio profesional con proyectos y experiencia en desarrollo web.',
    siteName: 'Portfolio Personal',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Personal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Personal - Desarrollador Full Stack',
    description: 'Portfolio profesional con proyectos y experiencia.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

#### Structured Data (JSON-LD)

```typescript
// Datos estructurados para SEO
const generateStructuredData = (personalInfo: PersonalInfo) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.fullName,
    jobTitle: personalInfo.title,
    description: personalInfo.description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    sameAs: [
      personalInfo.linkedinUrl,
      personalInfo.githubUrl
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: personalInfo.email,
      contactType: 'professional'
    }
  };
};

// Componente para inyectar JSON-LD
const StructuredData = ({ data }: { data: object }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
```

#### Sitemap Automático

```javascript
// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tu-dominio.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*'],
  generateIndexSitemap: false,
};
```

## 🧪 Testing

### Estrategia de Testing

#### Unit Tests con Jest

```bash
# Instalar dependencias de testing
npm install -D jest @testing-library/react @testing-library/jest-dom

# Ejecutar tests
npm run test

# Tests con coverage
npm run test:coverage
```

#### Configuración de Jest

```javascript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
};

module.exports = createJestConfig(customJestConfig);
```

#### Ejemplos de Tests

```typescript
// __tests__/components/hero-section.test.tsx
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/sections/hero';

const mockPersonalInfo = {
  fullName: 'John Doe',
  title: 'Full Stack Developer',
  description: 'Passionate developer...'
};

describe('HeroSection', () => {
  it('renders personal information correctly', () => {
    render(<HeroSection personalInfo={mockPersonalInfo} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
  });

  it('displays call-to-action buttons', () => {
    render(<HeroSection personalInfo={mockPersonalInfo} />);

    expect(screen.getByRole('button', { name: /contactar/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /descargar cv/i })).toBeInTheDocument();
  });
});
```

### E2E Testing con Playwright

```bash
# Instalar Playwright
npm install -D @playwright/test

# Ejecutar E2E tests
npm run test:e2e
```

```typescript
// e2e/portfolio.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Portfolio Homepage', () => {
  test('should load and display all sections', async ({ page }) => {
    await page.goto('/');

    // Verificar que todas las secciones están presentes
    await expect(page.locator('[data-testid="hero-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="about-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="skills-section"]')).toBeVisible();
    await expect(
      page.locator('[data-testid="projects-section"]')
    ).toBeVisible();
  });

  test('should toggle theme correctly', async ({ page }) => {
    await page.goto('/');

    // Verificar tema inicial
    await expect(page.locator('html')).not.toHaveClass('dark');

    // Cambiar a tema oscuro
    await page.click('[data-testid="theme-toggle"]');
    await expect(page.locator('html')).toHaveClass('dark');
  });
});
```

## 🚀 Deployment

### Build para Producción

```bash
# Compilar aplicación
npm run build

# Verificar build
npm run start

# Analizar bundle (opcional)
npm install -D @next/bundle-analyzer
```

### Variables de Entorno en Producción

```env
# Producción
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_API_BASE_URL=https://api.tu-dominio.com/api/v1
RESEND_API_KEY=tu_resend_api_key_produccion
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Deployment en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Configurar variables de entorno en Vercel dashboard
```

#### Configuración de Vercel

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

### Deployment en Netlify

```bash
# Build command
npm run build && npm run export

# Publish directory
out

# Configurar redirects para SPA
echo '/*    /index.html   200' > out/_redirects
```

### Docker (Opcional)

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Builder
FROM base AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

## 🐛 Troubleshooting

### Problemas Comunes

#### Error: Backend no responde

```bash
# Verificar conexión al backend
curl http://localhost:3001/api/v1/portfolio

# Si falla, usar datos estáticos como fallback
# Verificar configuración en services/portfolio.ts
```

#### Error: Imágenes no cargan

```bash
# Verificar configuración de Next.js
# next.config.js
module.exports = {
  images: {
    domains: ['localhost', 'tu-dominio.com'],
    formats: ['image/webp', 'image/avif']
  }
};
```

#### Error: Build falla

```bash
# Verificar TypeScript
npm run typecheck

# Verificar linting
npm run lint

# Limpiar cache de Next.js
rm -rf .next
npm run build
```

#### Error: Variables de entorno

```bash
# Verificar que las variables estén definidas
echo $NEXT_PUBLIC_SITE_URL

# Verificar validación en lib/env.ts
# Asegurarse que todas las variables requeridas estén en .env.local
```

### Performance Issues

#### Bundle Size Grande

```bash
# Analizar bundle
npm install -D @next/bundle-analyzer
npm run analyze

# Optimizaciones:
# 1. Lazy loading de componentes
# 2. Tree shaking de librerías
# 3. Optimización de imágenes
```

#### Slow Loading

```typescript
// Implementar loading states
const ProjectsSection = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: portfolioService.getProjects
  });

  if (isLoading) return <ProjectsSkeleton />;

  return <ProjectsList projects={projects} />;
};
```

### SEO Issues

#### Meta Tags no aparecen

```typescript
// Verificar que metadata esté en layout.tsx o page.tsx
export const metadata: Metadata = {
  title: 'Tu título',
  description: 'Tu descripción',
};
```

#### Sitemap no se genera

```bash
# Verificar configuración
npm run postbuild

# Verificar que next-sitemap.config.js esté configurado
# Verificar NEXT_PUBLIC_SITE_URL en variables de entorno
```

---

**Desarrollado con ❤️ usando Next.js 15, TypeScript y las mejores prácticas de desarrollo web moderno**
