'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
 import NextLink from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

const linkClasses = cva(
  'inline-flex items-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'text-link-text hover:text-text-accent focus:ring-teal-500',
        light: 'text-text-light hover:text-gray-200 focus:ring-gray-500',
        accent: 'text-text-accent hover:text-teal-700 focus:ring-teal-500',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>, VariantProps<typeof linkClasses> {
  href: string;
  children: ReactNode;
  external?: boolean;
}

const Link = ({
  href,
  children,
  external = false,
  variant,
  size,
  className,
  ...props
}: LinkProps) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(linkClasses({ variant, size }), className)}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      className={twMerge(linkClasses({ variant, size }), className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}

export default Link