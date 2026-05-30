import type { Metadata } from 'next';
import './materialize.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shane Creedon - A Web Profile',
  description:
    'Shane Creedon is a Software Development Engineer at Microsoft, ' +
    'based in Dublin, Ireland. 1.1 (First-Class Honours) B.Sc in Computer Science from DCU.',
  verification: {
    google: 'EKQvwxqNhqjAPTSligwYZCWWAm36dn7WBh6eintW6VI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
