'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, CSSProperties } from 'react';
 import Image from'next/image';

const iconButtonClasses = cva(
  'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-button-icon text-text-light hover:bg-teal-700 focus:ring-teal-500',
        secondary: 'bg-button-secondary text-text-primary hover:bg-gray-100 focus:ring-gray-500',
        ghost: 'bg-transparent text-text-primary hover:bg-gray-100 focus:ring-gray-500',
      },
      size: {
        small: 'p-1',
        medium: 'p-2',
        large: 'p-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonClasses> {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  fill_background_color?: string;
  border_border_radius?: string;
  padding?: string;
  margin?: string;
}

const IconButton = ({
  src,
  width = 24,
  height = 24,
  alt = 'icon',
  fill_background_color,
  border_border_radius,
  padding,
  margin,
  variant,
  size,
  disabled = false,
  className,
  onClick,
  type = 'button',
  ...props
}: IconButtonProps) => {
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''

  const optionalClasses = [
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
  ].filter(Boolean).join(' ')

  const customStyles: CSSProperties = {
    ...(fill_background_color && { backgroundColor: fill_background_color }),
    ...(border_border_radius && { borderRadius: border_border_radius }),
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        iconButtonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </button>
  )
}

export default IconButton