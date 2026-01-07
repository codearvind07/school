import React from 'react';
import '../styles/index.css';
import { nexa } from './fonts';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://www.littlewonderspublicschoolcpj.com'),
  title: {
    default: 'Little Wonders Public School',
    template: '%s | Little Wonders Public School',
  },
  description: 'Little Wonders Public School in Captainganj, Kushinagar offers quality education, modern facilities, and holistic development for a bright future.',
  keywords: [
    'Little Wonders Public School Bauliya',
    'Little Wonders Public School Captainganj',
    'Best school in Captainganj',
    'Top school in Bauliya',
    'Best CBSE school in Captainganj',
    'English medium school in Captainganj',
    'Best primary school in Kushinagar',
    'Public school in Bauliya Captainganj',
    'Private school in Captainganj',
    'Best affordable school in Captainganj',
    'CBSE pattern school in Kushinagar',
    'School near Bauliya',
    'School near Captainganj',
    'Schools in Kushinagar district',
    'Best school near me Bauliya',
    'English medium school near Captainganj bus stand',
    'Best kids school in Bauliya',
    'New public school in Captainganj',
    'Computer Studies',
    'Computer learning school in Kushinagar',
    'Best computer education for kids Captainganj',
    'Smart class school in Bauliya',
    'Art & Craft',
    'Best art classes for kids in Captainganj',
    'Creative activity school in Bauliya',
    'Physical Education',
    'Best sports school in Captainganj',
    'Physical education school in Kushinagar',
    'Moral & Value Education',
    'Value-based school in Captainganj',
    'Character development school in Bauliya',
    'Which is the best school for kids in Captainganj?',
    'Affordable school with good education in Bauliya',
    'English medium school admissions in Captainganj',
    'Public school with computer education in Kushinagar',
    'Best school for holistic development in Captainganj',
    'Primary school with modern facilities in Bauliya',
    'School admissions open 2025–26 Captainganj',
    'Best school for nursery admission in Bauliya',
    'Best school for quality education Kushinagar',
    'Safe school for children in Bauliya',
    'Best disciplined school in Captainganj'
  ],
  authors: [{ name: 'Little Wonders Public School' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.littlewonderspublicschoolcpj.com',
    siteName: 'Little Wonders Public School',
    title: {
      default: 'Little Wonders Public School',
      template: '%s | Little Wonders Public School',
    },
    description: 'Start your beautiful and bright educational journey with proven results. Join our learning community in Kushinagar today.',
    images: [
      {
        url: '/images/slider2.jpg',
        width: 1200,
        height: 630,
        alt: 'Little Wonders Public School Campus',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Little Wonders Public School",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bauliya, Captainganj",
      "addressLocality": "Captainganj",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "274301",
      "addressCountry": "IN"
    },
    "telephone": "+918173055035",
    "email": "info@littlewonderspublicschoolcpj.com",
    "url": "https://www.littlewonderspublicschoolcpj.com",
    "description": "Little Wonders Public School in Captainganj, Kushinagar offers quality education, modern facilities, and holistic development for a bright future.",
    "keywords": [
      "Little Wonders Public School Bauliya",
      "Best school in Captainganj",
      "English medium school in Captainganj",
      "Computer Studies",
      "Smart class school in Bauliya",
      "Best sports school in Captainganj",
      "Value-based school in Captainganj",
      "School admissions open 2025–26 Captainganj"
    ]
  };
  return (
    <html lang="en" className={`${nexa.variable} font-sans`}>
      <body >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}

        <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2FLittle Wonders Public School9442back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.9" />
        <script type="module" src="https://static.rocket.new/rocket-shot.js?v=0.0.1" />
      </body>
    </html>
  );
}