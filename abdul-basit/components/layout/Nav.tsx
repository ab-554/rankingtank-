'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/offerings', label: 'Offerings' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="flex items-center justify-between px-[60px] py-4 sticky top-0 z-[500] border-b max-lg:px-6"
        style={{
          background: 'rgba(4,6,13,.82)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderColor: 'var(--border)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-[17px] font-extrabold tracking-tight no-underline flex items-center gap-[10px]"
          style={{ color: 'var(--white)' }}
        >
          Abdul Basit <span style={{ color: 'var(--blue)' }}>&nbsp;A.</span>
        </Link>

        {/* Center nav — hidden below 1100px */}
        <ul className="hidden lg:flex items-center gap-[2px] list-none">
          {navLinks.map(link => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium no-underline py-[7px] px-[15px] rounded-full tracking-[.01em] transition-colors duration-250"
                  style={{
                    color: isActive ? 'var(--white)' : 'var(--silver)',
                    background: isActive ? 'var(--blue-dim)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-[10px]">
          <Link
            href="/projects"
            className="hidden sm:inline-flex text-[12px] font-semibold tracking-[.04em] no-underline py-[7px] px-4 rounded-full border transition-all duration-250 hover:border-[var(--blue)] hover:text-[var(--blue)] hover:bg-[var(--blue-dim)]"
            style={{ color: 'var(--silver)', borderColor: 'var(--border-hi)' }}
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="hidden sm:inline-flex text-[13px] font-bold text-white no-underline py-[9px] px-[22px] rounded-full transition-all duration-250 hover:-translate-y-px"
            style={{ background: 'var(--blue)', boxShadow: '0 0 20px var(--blue-glow)' }}
          >
            Contact me →
          </Link>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
            aria-label="Toggle menu"
            style={{ cursor: 'none' }}
          >
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: 'var(--white)',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                background: 'var(--white)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: 'var(--white)',
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="btn btn-p mt-6"
          style={{ fontSize: '16px' }}
        >
          Contact me →
        </Link>
      </div>
    </>
  );
}
