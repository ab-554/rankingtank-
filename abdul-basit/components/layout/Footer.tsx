import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { href: '/projects', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/seo', label: 'SEO Optimization' },
  { href: '/services/ai-automation', label: 'AI Automation' },
  { href: '/services/consulting', label: 'Technical Consulting' },
];

export default function Footer() {
  return (
    <footer
      className="px-6 lg:px-[60px] pt-20 pb-11 border-t"
      style={{ background: '#04060d', borderColor: 'rgba(56,152,255,.09)' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
        {/* Brand column */}
        <div>
          <Link href="/" className="inline-flex items-center no-underline mb-4">
            <Image
              src="/logo-wordmark.svg"
              alt="RankingTank"
              width={140}
              height={32}
              className="h-7 w-auto"
            />
          </Link>
          <p
            className="text-sm leading-7 max-w-[260px] mb-6"
            style={{ color: '#8b9ab5' }}
          >
            Freelance web developer and SEO operator building scalable web
            systems, precision SEO, and AI automation.
          </p>
        </div>

        {/* Quick Links column */}
        <div>
          <div
            className="text-[10px] font-bold tracking-[.14em] uppercase mb-[18px]"
            style={{ color: '#445060' }}
          >
            Quick Links
          </div>
          <ul className="list-none flex flex-col gap-[11px] p-0 m-0">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm no-underline transition-colors duration-250"
                  style={{ color: '#8b9ab5' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services column */}
        <div>
          <div
            className="text-[10px] font-bold tracking-[.14em] uppercase mb-[18px]"
            style={{ color: '#445060' }}
          >
            Services
          </div>
          <ul className="list-none flex flex-col gap-[11px] p-0 m-0">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-sm no-underline transition-colors duration-250"
                  style={{ color: '#8b9ab5' }}
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7 border-t"
        style={{ borderColor: 'rgba(56,152,255,.09)' }}
      >
        <div className="text-[13px]" style={{ color: '#8b9ab5' }}>
          Remote · Worldwide
        </div>
        <div className="text-[13px]" style={{ color: '#8b9ab5' }}>
          &copy; {new Date().getFullYear()} RankingTank &mdash; Built with precision
        </div>
      </div>
    </footer>
  );
}
