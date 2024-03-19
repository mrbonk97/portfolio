'use client';
import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);
  if (isLoading) return <div className='bg-neutral-100 h-full '>로딩중</div>;

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
