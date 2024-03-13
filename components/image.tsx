'use client';

import { useScroll, useTransform, MotionValue, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Im2({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref} className='h-[1000px]'>
        <Image src={'/vercel.svg'} alt='logo.svg' width={600} height={600} />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default Im2;
