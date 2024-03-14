'use client';
import Card from '@/components/card';
import Image from 'next/image';
import { Variants, easeIn, easeInOut, motion, useScroll, useSpring } from 'framer-motion';
import { inView } from 'framer-motion/dom';
import { useEffect, useRef, useState } from 'react';

const ProjectPage = () => {
  const [item, setItem] = useState(0);

  const handleHover = (item: number) => {
    setItem(-item * 600);
  };

  return (
    <div className='bg-[#F3EFE7] flex flex-col'>
      <div className='fixed left-0 w-[600px] h-[100vh] overflow-hidden z-10 shadow-[rgba(0,0,15,0.5)_10px_5px_20px_0px]'>
        <motion.div className='w-full h-full' transition={{ duration: 0.6, ease: 'easeInOut' }} animate={{ x: item }}>
          <div className='absolute w-full h-full flex items-center justify-center bg-white'>
            <Image src='/khnp.svg' alt='project' width={300} height={300} className='h-auto' />
          </div>
          <div className='absolute ml-[600px] w-full h-full flex items-center justify-center bg-[#FFE2E2]'>
            <Image src='/our-memory.svg' alt='project' width={300} height={300} className='h-auto' />
          </div>
          <div className='absolute ml-[1200px] w-full h-full flex items-center justify-center bg-blue-100'>
            <Image src='/cloud-storage.png' alt='project' width={300} height={300} className='h-auto' />
          </div>
        </motion.div>
      </div>
      <div className='w-full pl-[600px]'>
        <div
          className='w-full h-[1000px] bg-[#F3EFE7] flex items-center justify-center'
          onMouseEnter={() => handleHover(0)}
        >
          <hgroup className='space-y-5'>
            <h1 className='text-6xl font-bold'>한수원 ERP 고도화</h1>
            <h2 className='text-2xl'>한국수력원자력 ERP 고도화 프로젝트</h2>
            <h3 className='text-xl'>기간 : 2023.02.20 ~ 2024.02.26</h3>
            <h3 className='text-xl'>규모 : 120명</h3>
            <h3 className='text-xl'>스택 : 넥사크로, xUP, Oracle</h3>
          </hgroup>
        </div>
        <div
          className='w-full h-[1000px] bg-[#8785A2] flex items-center justify-center'
          onMouseEnter={() => handleHover(1)}
        >
          <hgroup className='space-y-5'>
            <h1 className='text-6xl font-bold'>우만시</h1>
            <h2 className='text-2xl'>우리가 만난 시간 앱</h2>
            <h3 className='text-xl'>기간 : 2023.02.20 ~ 2024.02.26</h3>
            <h3 className='text-xl'>규모 : 4명</h3>
            <h3 className='text-xl'>스택 : 스프링부트, 레디스, Mysql</h3>
            <button>살펴보기</button>
          </hgroup>
        </div>
        <div className='w-full h-[1000px] bg-blue-300' onMouseEnter={() => handleHover(2)}>
          aas
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
