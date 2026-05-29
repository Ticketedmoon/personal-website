import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shane Creedon - A Web Profile',
  description:
    'Shane Creedon is a Software Development Engineer II at Microsoft, ' +
    'based in Dublin, Ireland. B.Sc (Hons) in Computer Applications from DCU.',
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
