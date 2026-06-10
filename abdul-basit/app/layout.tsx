import type { Metadata } from 'next';
import { Bebas_Neue, Syne, Outfit } from 'next/font/google';
import './globals.css';
import Ticker from '@/components/layout/Ticker';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Cursor from '@/components/ui/Cursor';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const syne = Syne({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const outfit = Outfit({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Abdul Basit A. — Web Systems · Precision SEO',
    template: '%s | Abdul Basit A.',
  },
  description:
    'Creative digital agency building scalable web systems, precision SEO, and AI solutions. Based in Roosendaal & The Hague, Netherlands.',
  metadataBase: new URL('https://abdulbasit.nl'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Abdul Basit A.',
    title: 'Abdul Basit A. — Web Systems · Precision SEO',
    description:
      'Creative digital agency building scalable web systems, precision SEO, and AI solutions.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${syne.variable} ${outfit.variable}`}
    >
      <body>
        <Cursor />
        <Ticker />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
