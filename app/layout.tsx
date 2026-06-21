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
    default: 'RankingTank \u2014 Web Systems \u00b7 Precision SEO',
    template: '%s | RankingTank',
  },
  description:
    'Pakistan-based freelance web developer and SEO operator building scalable web systems, precision SEO, and AI automation that drive real results.',
  metadataBase: new URL('https://rankingtank.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'RankingTank',
    title: 'RankingTank \u2014 Web Systems \u00b7 Precision SEO',
    description:
      'Scalable web systems, precision SEO, and AI automation \u2014 built to dominate markets.',
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
