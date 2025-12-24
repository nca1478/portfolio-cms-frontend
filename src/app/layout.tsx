import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ThemeProvider, Toaster } from '@/components';
import { ActiveSectionProvider } from '@/context';
import {
  createFallbackMetadata,
  createMetadata,
  fonts,
  getActiveMetadata,
  QueryProvider,
} from '@/lib';
import { cn } from '@/lib/utils/utils';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const dynamicMetadata = await getActiveMetadata();
    return createMetadata(dynamicMetadata);
  } catch (error) {
    console.error(
      'Error generando metadatos dinámicos, recurriendo a estáticos:',
      error
    );
    return createFallbackMetadata();
  }
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <QueryProvider>
          <ThemeProvider attribute="class">
            <ActiveSectionProvider>
              {children}
              <Toaster position="top-center" />
            </ActiveSectionProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
