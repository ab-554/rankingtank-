import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import RevealWrapper from '@/components/ui/RevealWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Abdul Basit A. for your next digital project. Offices in Roosendaal and The Hague, Netherlands.',
};

const offices = [
  { name: 'Roosendaal (HQ)',  address: 'Aanwas 35, 4704 SC',         phone: '+31 85 021 11 21', tel: '+31850211121' },
  { name: 'The Hague (HUB)',  address: 'Binckhorstlaan 36, 2516 BE',  phone: '+31 70 207 15 79', tel: '+31702071579' },
];

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
            Whether it&apos;s a scalable system, precision SEO campaign, or AI automation, we&apos;re ready to architect your next phase of growth.
          </p>

          <div className="flex flex-col gap-5 mb-10">
            {offices.map(o => (
              <div
                key={o.name}
                className="rounded-2xl p-6"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <div className="font-display font-bold text-base mb-1">{o.name}</div>
                <p className="text-sm mb-3" style={{ color: 'var(--silver)' }}>{o.address}</p>
                <a
                  href={`tel:${o.tel}`}
                  className="text-sm font-bold no-underline"
                  style={{ color: 'var(--blue)' }}
                >
                  {o.phone}
                </a>
              </div>
            ))}

            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="font-display font-bold text-base mb-1">Direct Email</div>
              <a
                href="mailto:hello@abdulbasit.nl"
                className="text-sm font-bold no-underline"
                style={{ color: 'var(--blue)' }}
              >
                hello@abdulbasit.nl
              </a>
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
