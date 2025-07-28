// src/app/layout.js
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
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