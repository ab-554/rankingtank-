import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with RankingTank for your next web development, SEO, or AI automation project. Pakistan-based, serving clients worldwide.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="START A"
        titleAccent="LEGENDARY PROJECT"
      />

      <section
        className="py-[120px] px-[60px] max-lg:px-6 grid grid-cols-2 max-lg:grid-cols-1 gap-[60px] items-start"
        style={{ paddingTop: '40px' }}
      >
        {/* LEFT - Info */}
        <RevealWrapper>
          <h2
            className="font-display font-extrabold tracking-tight mb-4"
            style={{ fontSize: '32px' }}
          >
            Get in Touch
          </h2>
          <p className="text-sm leading-7 mb-10" style={{ color: 'var(--silver)' }}>
            Whether it&apos;s a scalable web system, precision SEO campaign, or AI automation pipeline, I&apos;m ready to architect your next phase of growth — from Pakistan, for the world.
          </p>

          <div className="flex flex-col gap-5 mb-10">
            {/* Email */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="font-display font-bold text-base mb-1">Email</div>
              <a
                href="mailto:hello@rankingtank.com"
                className="text-sm font-bold no-underline"
                style={{ color: 'var(--blue)' }}
              >
                hello@rankingtank.com
              </a>
            </div>

            {/* WhatsApp */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="font-display font-bold text-base mb-1">WhatsApp</div>
              <a
                href="https://wa.me/923001234567"
                className="text-sm font-bold no-underline"
                style={{ color: 'var(--blue)' }}
              >
                +92 300 123 4567
              </a>
            </div>

            {/* Location */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="font-display font-bold text-base mb-1">Location</div>
              <p className="text-sm mb-1" style={{ color: 'var(--silver)' }}>Pakistan &mdash; Serving clients worldwide</p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Response within 24 hours</p>
            </div>
          </div>

          <div className="flex gap-3">
            {[
              { label: 'in', title: 'LinkedIn' },
              { label: 'gh', title: 'GitHub' },
              { label: 'ig', title: 'Instagram' },
              { label: 'tw', title: 'Twitter / X' },
            ].map(s => (
              <a
                key={s.label}
                href="#"
                title={s.title}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold no-underline transition-all duration-250 hover:-translate-y-1"
                style={{ background: 'var(--blue-dim)', border: '1px solid var(--border-hi)', color: 'var(--blue)', cursor: 'none' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </RevealWrapper>

        {/* RIGHT - Form */}
        <RevealWrapper delay="d2">
          <ContactForm />
        </RevealWrapper>
      </section>
    </>
  );
}
