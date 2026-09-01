// src/app/layout.js
import { Inter } from 'next/font/google'; // or use any Google font you prefer

const inter = Inter({ subsets: ['latin'] });

import './globals.css';
import Script from 'next/script';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sohrabaliansari.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sohrab Ali Ansari | Full Stack Developer & AI Automation Specialist',
    template: '%s | Sohrab Ali Ansari',
  },
  description:
    'Sohrab Ali Ansari is a Full Stack Developer with 5.6+ years of experience (4.5+ years in full-stack development) specializing in the MEAN stack, Next.js, AWS, and AI automation — prompt engineering, LLM integration, and AI chatbot development.',
  keywords: [
    'Sohrab Ali Ansari',
    'Full Stack Developer',
    'MEAN Stack Developer',
    'MERN Stack Developer',
    'Angular Developer',
    'Next.js Developer',
    'Node.js Developer',
    'AI Automation',
    'Prompt Engineering',
    'AI Chatbot Developer',
    'Gurgaon Full Stack Developer',
    'Hire Full Stack Developer India',
  ],
  authors: [{ name: 'Sohrab Ali Ansari' }],
  creator: 'Sohrab Ali Ansari',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Sohrab Ali Ansari',
    title: 'Sohrab Ali Ansari | Full Stack Developer & AI Automation Specialist',
    description:
      'Full Stack Developer (5.6+ years) specializing in MEAN stack, Next.js, AWS, and AI automation — prompt engineering, LLM integration, and AI chatbots.',
    images: [{ url: '/img/sohrab.png', width: 500, height: 500, alt: 'Sohrab Ali Ansari' }],
  },
  twitter: {
    card: 'summary',
    title: 'Sohrab Ali Ansari | Full Stack Developer & AI Automation Specialist',
    description:
      'Full Stack Developer (5.6+ years) specializing in MEAN stack, Next.js, AWS, and AI automation.',
    images: ['/img/sohrab.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sohrab Ali Ansari',
  jobTitle: 'Full Stack Developer',
  url: siteUrl,
  email: 'mailto:sohrabali180@gmail.com',
  telephone: '+91-9199770786',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
  },
  sameAs: ['https://www.linkedin.com/in/sohrabalitech/', 'https://github.com/sohrab180'],
  knowsAbout: [
    'Angular',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'AWS',
    'AI Automation',
    'Prompt Engineering',
    'LLM Integration',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={true} // Add this to ignore the ColorZilla attribute
      >
        {children}

        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        {/* Add this script to remove ColorZilla attributes */}
        <Script
          id="remove-colorzilla"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if(typeof window !== 'undefined') {
                document.body.removeAttribute('cz-shortcut-listen');
              }
            `
          }}
        />
      </body>
    </html>
  );
}