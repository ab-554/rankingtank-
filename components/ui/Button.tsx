import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'ghost';
  size?: 'default' | 'sm';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  style?: React.CSSProperties;
}

export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  children,
  className,
  onClick,
  type = 'button',
  style,
}: ButtonProps) {
  const classes = cn(
    'btn',
    variant === 'primary' ? 'btn-p' : 'btn-g',
    size === 'sm' && 'btn-sm',
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
