import { Metadata } from 'next';
 import HomePage from'./HomePage';

export const metadata: Metadata = {
    title: 'Start Your Beautiful And Bright Future - Little Wonders Public School',
    description: 'Transform your educational journey with Little Wonders Public School. Access quality education services, international programs, and join thousands of successful students worldwide. Start building your bright future today.',
    keywords: 'education platform, online learning, international education, courses, student success, educational services, bright future, quality education',
    openGraph: {
        title: 'Start Your Beautiful And Bright Future - Little Wonders Public School',
        description: 'Transform your educational journey with Little Wonders Public School. Access quality education services, international programs, and join thousands of successful students worldwide.',
    },
};

export default function Page() {
  return <HomePage />
}