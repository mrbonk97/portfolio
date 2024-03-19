'use client';
import Image from 'next/image';
import { Variants, easeIn, easeInOut, motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const LeftElement = ({ item }: { item: number }) => {
  return (
    <div className='fixed left-0 w-[600px] h-full overflow-hidden z-10 shadow-[rgba(0,0,15,0.5)_10px_5px_20px_0px]'>
      <motion.div className='v-full' transition={{ duration: 0.6, ease: 'easeInOut' }} animate={{ x: item }}>
        <div className='absolute v-full flex2 bg-emerald-50'>
          <Image src='/khnp.svg' alt='project' width={300} height={300} />
        </div>
        <div className='absolute v-full flex2 bg-rose-100 ml-[600px] '>
          <Image src='/our-memory.svg' alt='project' width={300} height={300} />
        </div>
        <div className='absolute v-full flex2 bg-blue-100 ml-[1200px]'>
          <Image src='/cloud-storage.png' alt='project' width={300} height={300} />
        </div>
      </motion.div>
    </div>
  );
};

const RightElement = ({ onHover }: { onHover: (item: number) => void }) => {
  return (
    <div className='pl-[600px]'>
      <article className='h-[100vh] flex2 relative' onMouseEnter={() => onHover(0)}>
        <span className='absolute left-[10%] top-[10%] text-7xl font-bold text-neutral-400'>P. 1</span>
        <hgroup className='flex flex-col gap-5 font-semibold'>
          <h1 className='text-7xl font-bold tracking-wide'>한수원 ERP 고도화</h1>
          <span className='text-2xl mt-2 mb-5 ml-1'>한국수력원자력 경영관리분야 ERP 고도화 프로젝트</span>
          <h2 className='text-xl ml-1'>업무 : BSC 성과지표 시스템 개발</h2>
          <h3 className='text-xl ml-1'>기간 : 2023.02.20 ~ 2024.02.26</h3>
          <h3 className='text-xl ml-1'>규모 : 120명</h3>
          <h3 className='text-xl ml-1'>스택 : 넥사크로, xUP, Oracle</h3>
        </hgroup>
      </article>
      <article className='h-[100vh] flex2 relative bg-[#8785A2]' onMouseEnter={() => onHover(1)}>
        <span className='absolute left-[10%] top-[10%] text-7xl font-bold text-neutral-400'>P. 2</span>
        <hgroup className='flex flex-col gap-5 font-semibold'>
          <h1 className='text-7xl font-bold tracking-wide'>우만시</h1>
          <span className='text-2xl mt-2 mb-5 ml-1'>우리가 만난 시간 앱</span>
          <h2 className='text-xl ml-1'>업무 : 백엔드 개발</h2>
          <h3 className='text-xl ml-1'>기간 : 2023.02.20 ~ 2024.02.26</h3>
          <h3 className='text-xl ml-1'>규모 : 40명</h3>
          <h3 className='text-xl ml-1'>스택 : 스프링부트, 레디스, Mysql</h3>
        </hgroup>
      </article>
      <article className='h-[100vh] flex2 relative bg-blue-300' onMouseEnter={() => onHover(2)}>
        <span className='absolute left-[10%] top-[10%] text-7xl font-bold text-neutral-400'>P. 3</span>
        <hgroup className='flex flex-col gap-5 font-semibold'>
          <h1 className='text-7xl font-bold tracking-wide'>간단 공유</h1>
          <span className='text-2xl mt-2 mb-5 ml-1'>간단한 파일 공유</span>
          <h2 className='text-xl ml-1'>업무 : 백엔드 개발</h2>
          <h3 className='text-xl ml-1'>기간 : 2023.02.20 ~ 2024.02.26</h3>
          <h3 className='text-xl ml-1'>규모 : 40명</h3>
          <h3 className='text-xl ml-1'>스택 : 스프링부트, 레디스, Mysql</h3>
        </hgroup>
      </article>
    </div>
  );
};

const ProjectPage = () => {
  const [item, setItem] = useState(0);
  const handleHover = (item: number) => setItem(-item * 600);

  return (
    <main className='text-neutral-700'>
      <LeftElement item={item} />
      <RightElement onHover={handleHover} />
    </main>
  );
};
export default ProjectPage;
