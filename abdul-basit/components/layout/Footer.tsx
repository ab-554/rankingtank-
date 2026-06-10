import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/offerings', label: 'Offerings' },
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
          <div className="font-display text-[22px] font-extrabold tracking-tight mb-3.5" style={{ color: 'var(--white)' }}>
            Abdul Basit A.<sup className="text-[10px]" style={{ color: 'var(--blue)' }}>®</sup>
          </div>
          <p className="text-sm leading-7 max-w-[240px] mb-6" style={{ color: 'var(--muted)' }}>
            Creative digital agency building scalable web systems, precision SEO, and AI solutions that make real impact.
          </p>
          <div className="flex flex-col gap-[7px]">
            <a href="mailto:hello@abdulbasit.nl" className="text-[13px] font-semibold no-underline transition-colors duration-250" style={{ color: 'var(--silver)' }}>hello@abdulbasit.nl</a>
            <a href="tel:+31850211121" className="text-[13px] font-semibold no-underline transition-colors duration-250" style={{ color: 'var(--silver)' }}>+31 85 021 11 21</a>
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

        {/* Offices */}
        <div>
          <div className="font-display text-[10px] font-bold tracking-[.14em] uppercase mb-[18px]" style={{ color: 'var(--muted)' }}>Offices</div>
          <div className="text-[13px] leading-7 mb-[18px]" style={{ color: 'var(--muted)' }}>
            <strong className="block font-semibold mb-[3px]" style={{ color: 'var(--silver)' }}>Roosendaal (HQ)</strong>
            Aanwas 35, 4704 SC<br />
            <a href="tel:+31850211121" className="no-underline" style={{ color: 'var(--blue)' }}>+31 85 021 11 21</a>
          </div>
          <div className="text-[13px] leading-7" style={{ color: 'var(--muted)' }}>
            <strong className="block font-semibold mb-[3px]" style={{ color: 'var(--silver)' }}>The Hague (HUB)</strong>
            Binckhorstlaan 36, 2516 BE<br />
            <a href="tel:+31702071579" className="no-underline" style={{ color: 'var(--blue)' }}>+31 70 207 15 79</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 pt-7 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="text-[13px]" style={{ color: 'var(--muted)' }}>© 2026 Abdul Basit A. — Founded on good vibes</div>
        <div className="flex gap-[22px]">
          {['Terms & Conditions', 'Privacy Policy', 'Disclaimer', 'Manage Cookies'].map(item => (
            <a key={item} href="#" className="text-[13px] no-underline transition-colors duration-250 hover:!text-white" style={{ color: 'var(--muted)' }}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
