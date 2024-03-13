'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const Navbar = () => {
  const params = usePathname();
  console.log(params);
  return (
    <nav className='fixed top-0 w-full text-2xl px-5 py-4 shadow-lg flex items-center gap-20 z-20'>
      <Image src='vercel.svg' alt='logo' width={200} height={100} className='md:ml-10' />
      <div className='w-full flex items-center justify-end gap-20 md:mr-10'>
        <Link
          className={`font-bold cursor-pointer text-black hover:text-black/80 duration-200 ${
            params == '/' && 'underline'
          }`}
          href={'/'}
        >
          홈
        </Link>
        <Link
          className={`font-bold cursor-pointer text-black hover:text-black/80 duration-200 ${
            params == '/project' && 'underline'
          }`}
          href={'/project'}
        >
          프로젝트
        </Link>
        <Link
          className={`font-bold cursor-pointer text-black hover:text-black/80 duration-200 ${
            params == '/about-me' && 'underline'
          }`}
          href={'/about-me'}
        >
          소개
        </Link>
        <Link
          className={`font-bold cursor-pointer text-black hover:text-black/80 duration-200 ${
            params == '/contact' && 'underline'
          }`}
          href={'/contact'}
        >
          연락
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
