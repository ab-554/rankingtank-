'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '/projects', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.35, ease: [0.22, 0.68, 0, 1.2] as const },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 0.68, 0, 1.2] as const },
  },
};

const linkItemVariants = {
  closed: { opacity: 0, x: 40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.22, 0.68, 0, 1.2] as const },
  }),
};

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="flex items-center justify-between px-6 lg:px-[60px] py-4 sticky top-0 z-[500] border-b"
        style={{
          background: '#04060d',
          borderColor: 'rgba(56,152,255,.09)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/logo-wordmark.svg"
            alt="RankingTank"
            width={140}
            height={32}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Center nav — hidden below lg */}
        <ul className="hidden lg:flex items-center gap-[2px] list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium no-underline py-[7px] px-[15px] rounded-full tracking-[.01em] transition-colors duration-250"
                  style={{
                    color: isActive ? '#edf3ff' : '#8b9ab5',
                    background: isActive ? 'rgba(56,152,255,.10)' : 'transparent',
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
            href="/contact"
            className="hidden sm:inline-flex text-[12px] font-bold tracking-[.04em] no-underline py-[9px] px-5 rounded-full border transition-all duration-250 hover:-translate-y-px text-[#edf3ff]"
            style={{
              border: '1px solid rgba(56,152,255,.24)',
              background: 'linear-gradient(135deg, rgba(56,152,255,.08), rgba(0,224,255,.06))',
            }}
          >
            RUN A FREE AUDIT
          </Link>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: '#edf3ff',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                background: '#edf3ff',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300 origin-center"
              style={{
                background: '#edf3ff',
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile slide-out overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[490] flex flex-col items-center justify-center"
            style={{ background: '#04060d' }}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={linkItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-center no-underline py-3 px-6 transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 'clamp(28px, 7vw, 48px)',
                    fontWeight: 800,
                    letterSpacing: '-.02em',
                    color: pathname === link.href ? '#edf3ff' : '#8b9ab5',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={navLinks.length}
              variants={linkItemVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="mt-8"
            >
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 text-[16px] font-bold text-white no-underline py-[14px] px-[28px] rounded-full transition-all duration-250 hover:-translate-y-px"
                style={{
                  background: '#3898ff',
                  boxShadow: '0 0 20px rgba(56,152,255,.28)',
                }}
              >
                RUN A FREE AUDIT →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
