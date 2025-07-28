// src/app/layout.js
import { Inter } from 'next/font/google'; // or use any Google font you prefer

const inter = Inter({ subsets: ['latin'] });

import './globals.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        suppressHydrationWarning={true} // Add this to ignore the ColorZilla attribute
      >
        {children}
        
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