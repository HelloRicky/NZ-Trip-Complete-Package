import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/i18n/LanguageContext';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'NZ South Island Trip 2026',
  description: 'New Zealand South Island family trip – April 11–20, 2026. 7 travelers, 5 accommodation bases.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
