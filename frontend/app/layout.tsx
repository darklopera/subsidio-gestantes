import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Subsidio Madres Gestantes - Tangamandapio',
  description: 'Sistema de verificación de elegibilidad para el subsidio de madres gestantes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-green-800 text-white shadow-md">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-bold text-lg tracking-tight">
              Municipio de Tangamandapio
            </span>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-green-200 transition-colors">Formulario</Link>
              <Link href="/historial" className="hover:text-green-200 transition-colors">Historial</Link>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-gray-400 text-center text-xs py-4">
          © {new Date().getFullYear()} Alcaldía de Tangamandapio — Sistema de Subsidios
        </footer>
      </body>
    </html>
  );
}