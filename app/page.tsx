'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
export default function Home() {
  const [hov, setHov] = useState(false);
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  if (!render) return <main className='h-full bg-[#F3EFE7]'>로딩중</main>;

  return (
    <main className='h-full bg-[#F3EFE7] flex flex-col items-center justify-center gap-20'>
      <div className='overflow-hidden relative w-full h-24 flex items-center justify-center'>
        <motion.h1
          className='text-8xl font-extrabold text-[#FF3B00] tracking-widest absolute'
          animate={
            hov
              ? { top: 100 }
              : {
                  top: 0,
                  transition: {
                    delay: 0.2,
                  },
                }
          }
        >
          안녕하세요!
        </motion.h1>
      </div>
      <Link href='/project'>
        <motion.section
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          className='relative text-xl font-semibold h-[200px] w-[200px] spin text-[#FF3B00]/80 hover:text-[#FF3B00] duration-150 cursor-pointer flex items-center justify-center'
        >
          <span className='circle rotate-[20deg]'>안</span>
          <span className='circle rotate-[40deg]'>녕</span>
          <span className='circle rotate-[60deg]'>하</span>
          <span className='circle rotate-[80deg]'>세</span>
          <span className='circle rotate-[100deg]'>요</span>
          <span className='circle rotate-[120deg]'>·</span>
          <span className='circle rotate-[140deg]'>반</span>
          <span className='circle rotate-[160deg]'>갑</span>
          <span className='circle rotate-[180deg]'>습</span>
          <span className='circle rotate-[200deg]'>니</span>
          <span className='circle rotate-[220deg]'>다</span>
          <span className='circle rotate-[240deg]'>다</span>
          <span className='circle rotate-[260deg]'>·</span>
          <span className='circle rotate-[280deg]'>살</span>
          <span className='circle rotate-[300deg]'>펴</span>
          <span className='circle rotate-[320deg]'>보</span>
          <span className='circle rotate-[340deg]'>기</span>
          <span className='circle rotate-[360deg]'>·</span>
        </motion.section>
      </Link>
      <div className='overflow-hidden relative w-full h-24 flex items-center justify-center'>
        <motion.h1
          className='text-8xl font-extrabold text-[#FF3B00] tracking-widest absolute'
          animate={
            hov
              ? {
                  top: 100,
                  transition: {
                    delay: 0.1,
                  },
                }
              : {
                  top: 0,
                  transition: {
                    delay: 0.1,
                  },
                }
          }
        >
          저의 포트폴리오
        </motion.h1>
      </div>
      <div className='overflow-hidden relative w-full h-24 flex items-center justify-center'>
        <motion.h1
          className='text-8xl font-extrabold text-[#FF3B00] tracking-widest absolute'
          animate={
            hov
              ? {
                  top: 100,
                  transition: {
                    delay: 0.2,
                  },
                }
              : { top: 0 }
          }
        >
          방문에 감사드립니다.
        </motion.h1>
      </div>
    </main>
  );
}
