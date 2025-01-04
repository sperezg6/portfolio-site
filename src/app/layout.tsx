import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Santiago Pérez - Portfolio',
  description: 'Computer Engineer & Tech Analyst Portfolio',
  icons: {
    icon: [
      {
        url: 'external/logo.svg',
        type: 'image/svg+xml',
      }
    ]
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}