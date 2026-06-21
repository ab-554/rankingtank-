'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const schema = z.object({
  name:    z.string().min(2, 'Name is required'),
  email:   z.string().email('Valid email is required'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const labelStyle: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: 700,
  color: 'var(--muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
};

const inputStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border)',
  padding: '12px 0',
  color: 'var(--white)',
  fontSize: '16px',
  outline: 'none',
  width: '100%',
  fontFamily: 'var(--font-body)',
  transition: 'border-color .25s',
};

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="rounded-3xl p-10 relative overflow-hidden"
      style={{ background: 'var(--card-hi)', border: '1px solid var(--border-hi)' }}
    >
      {/* Corner glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '500px', height: '500px',
          top: '-250px', right: '-250px',
          background: 'radial-gradient(circle, rgba(56,152,255,.13) 0%, transparent 65%)',
          animation: 'orb1 18s ease-in-out infinite alternate',
          opacity: 0.5,
        }}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 relative z-10"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Name</label>
          <input
            {...register('name')}
            type="text"
            placeholder="John Doe"
            style={inputStyle}
          />
          {errors.name && (
            <p className="text-xs" style={{ color: '#ff6b6b' }}>{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@company.com"
            style={inputStyle}
          />
          {errors.email && (
            <p className="text-xs" style={{ color: '#ff6b6b' }}>{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Subject</label>
          <input
            {...register('subject')}
            type="text"
            placeholder="Platform Development"
            style={inputStyle}
          />
          {errors.subject && (
            <p className="text-xs" style={{ color: '#ff6b6b' }}>{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label style={labelStyle}>Message</label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Tell us about your project..."
            style={{ ...inputStyle, resize: 'none' }}
          />
          {errors.message && (
            <p className="text-xs" style={{ color: '#ff6b6b' }}>{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn btn-p mt-4 self-start"
          style={{ cursor: 'none', border: 'none' }}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message →'}
        </button>

        {status === 'success' && (
          <p className="text-sm" style={{ color: 'var(--cyan)' }}>
            ✓ Message sent! We&apos;ll be in touch within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm" style={{ color: '#ff6b6b' }}>
            Something went wrong. Please email us at{' '}
            <a href="mailto:hello@abdulbasit.nl" style={{ color: 'var(--blue)' }}>
              hello@abdulbasit.nl
            </a>
          </p>
        )}
      </form>
    </div>
  );
}
