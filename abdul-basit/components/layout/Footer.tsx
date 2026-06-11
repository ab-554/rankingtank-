import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'GitHub' },
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Twitter / X' },
];

export default function Footer() {
  return (
    <footer className="px-[60px] pt-20 pb-11 border-t max-lg:px-6" style={{ borderColor: 'var(--border)' }}>
      <div className="grid grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-12 mb-14 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {/* Brand */}
        <div>
          <Link href="/" className="no-underline inline-flex items-center gap-[10px] mb-3.5">
            <img src="/logo-monogram.svg" alt="RT" width="32" height="32" className="shrink-0" />
            <img src="/logo-wordmark.svg" alt="RankingTank" width="120" height="28" />
          </Link>
          <p className="text-sm leading-7 max-w-[240px] mb-6" style={{ color: 'var(--muted)' }}>
            Freelance web developer and SEO operator building scalable web systems, precision SEO, and AI automation.
          </p>
          <div className="flex flex-col gap-[7px]">
            <a href="mailto:hello@rankingtank.com" className="text-[13px] font-semibold no-underline transition-colors duration-250" style={{ color: 'var(--silver)' }}>hello@rankingtank.com</a>
            <a href="https://wa.me/923001234567" className="text-[13px] font-semibold no-underline transition-colors duration-250" style={{ color: 'var(--silver)' }}>+92 300 123 4567</a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className="font-display text-[10px] font-bold tracking-[.14em] uppercase mb-[18px]" style={{ color: 'var(--muted)' }}>Navigation</div>
          <ul className="list-none flex flex-col gap-[11px]">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm no-underline transition-colors duration-250 hover:!text-white" style={{ color: 'var(--silver)' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <div className="font-display text-[10px] font-bold tracking-[.14em] uppercase mb-[18px]" style={{ color: 'var(--muted)' }}>Social</div>
          <ul className="list-none flex flex-col gap-[11px]">
            {socialLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-sm no-underline transition-colors duration-250 hover:!text-white" style={{ color: 'var(--silver)' }} target="_blank" rel="noopener">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <div className="font-display text-[10px] font-bold tracking-[.14em] uppercase mb-[18px]" style={{ color: 'var(--muted)' }}>Remote</div>
          <div className="text-[13px] leading-7 mb-[18px]" style={{ color: 'var(--muted)' }}>
            <strong className="block font-semibold mb-[3px]" style={{ color: 'var(--silver)' }}>Remote · Worldwide</strong>
            Available globally<br />
            <a href="mailto:hello@rankingtank.com" className="no-underline" style={{ color: 'var(--blue)' }}>hello@rankingtank.com</a>
          </div>
          <div className="text-[13px] leading-7" style={{ color: 'var(--muted)' }}>
            <strong className="block font-semibold mb-[3px]" style={{ color: 'var(--silver)' }}>Response Time</strong>
            Within 24 hours<br />
            <a href="https://wa.me/923001234567" className="no-underline" style={{ color: 'var(--blue)' }}>WhatsApp available</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 pt-7 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="text-[13px]" style={{ color: 'var(--muted)' }}>&copy; 2026 RankingTank &mdash; Built with precision</div>
        <div className="flex gap-[22px]">
          {['Terms & Conditions', 'Privacy Policy', 'Disclaimer'].map(item => (
            <a key={item} href="#" className="text-[13px] no-underline transition-colors duration-250 hover:!text-white" style={{ color: 'var(--muted)' }}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
