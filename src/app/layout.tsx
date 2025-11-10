import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Little Wonders Public School',
    template: 'Little Wonders Public School | %s',
  },
  description: 'Transform your future with Little Wonders Public School. Access quality education services, international programs, and join thousands of successful students worldwide.',
  keywords: 'education platform, online learning, international education, courses, student success, educational services',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'Little Wonders Public School',
      template: 'Little Wonders Public School | %s',
    },
    description: 'Start your beautiful and bright educational journey with proven results. Join our global learning community today.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fedubright9442back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.9" />
        <script type="module" src="https://static.rocket.new/rocket-shot.js?v=0.0.1" /></body>
    </html>
  );
}