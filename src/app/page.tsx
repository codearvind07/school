import { Metadata } from 'next';
 import HomePage from'./HomePage';

export const metadata: Metadata = {
    title: 'Little Wonders Public School',
    description: 'Transform your educational journey with Little Wonders Public School. Access quality education services, international programs, and join thousands of successful students worldwide. Start building your bright future today.',
    keywords: 'education platform, online learning, international education, courses, student success, educational services, bright future, quality education',
    openGraph: {
        title: 'Little Wonders Public School',
        description: 'Transform your educational journey with Little Wonders Public School. Access quality education services, international programs, and join thousands of successful students worldwide.',
    },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: 'Little Wonders Public School',
    url: 'https://www.littlewonderspublicschoolcpj.com',
    image: 'https://www.littlewonderspublicschoolcpj.com/images/slider2.jpg',
    description: 'Little Wonders Public School provides quality education in Captainganj, Kushinagar.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bauliya, Captainganj',
      addressLocality: 'Kushinagar',
      addressRegion: 'Uttar Pradesh',
      postalCode: '274301',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8173055035',
      contactType: 'admissions'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}