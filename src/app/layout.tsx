import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shane Creedon - A Web Profile',
  description:
    "I'm a young, passionate Software Engineer based in Dublin, Ireland. " +
    'Achieved a BSc Honors degree in Computer Applications in DCU.',
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
