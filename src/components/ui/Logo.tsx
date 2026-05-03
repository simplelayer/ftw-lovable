type LogoSize = 'sm' | 'md' | 'lg';
type LogoVariant = 'default' | 'light';

interface LogoProps {
  size?: LogoSize;
  variant?: LogoVariant;
  className?: string;
}

const sizeConfig: Record<LogoSize, { height: number; width: number }> = {
  sm: { height: 42, width: 189 },
  md: { height: 56, width: 252 },
  lg: { height: 66, width: 297 },
};

export default function Logo({
  size = 'md',
  variant = 'default',
  className = '',
}: LogoProps) {
  const { height, width } = sizeConfig[size];

  return (
    <img
      src="/ftw-lockup-navbar-transparent.png"
      alt="FollowThrough Works — Managed Technology Operations"
      height={height}
      width={width}
      className={`h-auto object-contain ${
        variant === 'light' ? 'brightness-0 invert' : ''
      } ${className}`}
      style={{ height: `${height}px`, width: 'auto' }}
    />
  );
}
