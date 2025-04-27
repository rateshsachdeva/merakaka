import { SessionProvider } from 'next-auth/react';
import './globals.css';

export const metadata = {
  title: 'Merakaka',
  description: 'Mom-focused AI chatbot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}

// 👇 Add this small client component INSIDE layout file
function SessionWrapper({ children }: { children: React.ReactNode }) {
  'use client';

  return <SessionProvider>{children}</SessionProvider>;
}
