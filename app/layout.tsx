import type { Metadata } from 'next';
import { Noto_Sans_KR, Gugi, Bagel_Fat_One, Black_Han_Sans } from 'next/font/google';
import './globals.css';

const inter = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '김현석',
  description: '김현석의 포트폴리오',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='bg-[#F3EFE7]'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
