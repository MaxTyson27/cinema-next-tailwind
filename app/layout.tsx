import './globals.scss';
import { Outfit } from 'next/font/google';
import type { Metadata } from 'next';

const outfit = Outfit({ subsets: ['latin'], variable: '--mont' })

export const metadata: Metadata = {
  title: 'Cinema Max',
  description: 'Best films and serials here!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}
