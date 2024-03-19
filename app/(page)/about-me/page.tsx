'use client';
import { easeIn, motion } from 'framer-motion';

const AboutMePage = () => {
  const variants = {
    smooth: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },

    seperator: {
      width: 1000,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
        ease: easeIn,
      },
    },
    seperatorInit: {
      width: 0,
      y: 1,
    },
    smoothDelay: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  };

  return (
    <main className=' bg-[#F3EFE7] flex flex-col items-center text-neutral-700'>
      <article className='mt-52 w-full flex flex-col items-center'>
        <motion.h1
          className='w-[700px] text-7xl font-bold leading-snug'
          variants={variants}
          initial='hidden'
          whileInView='smooth'
          viewport={{ once: true }}
        >
          안녕하세요!
          <br />
          <span className='text-blue-500'>프론트엔드</span> 개발자
          <br />
          지망생 <span className='text-blue-500'>김현석</span>입니다.
        </motion.h1>
        <motion.div
          className='w-[1000px] h-0.5 rounded-full bg-neutral-300 my-10'
          variants={variants}
          initial='seperatorInit'
          whileInView='seperator'
          viewport={{ once: true }}
        />
        <motion.p
          className='text-xl font-semibold leading-10 text-center'
          variants={variants}
          initial='hidden'
          whileInView='smoothDelay'
          viewport={{ once: true }}
        >
          저는 현대적인 UI·UX를 통해 사용자의 경험을 높이는 것을 목표로 삼고 있습니다.
          <br />
          애니메이션과 레이아웃을 적절하게 활용하여 사용자의 시선을 집중시키고
          <br />
          Sementic 코드를 작성하여 사용자 접근성을 높이기 위해 노력합니다.
        </motion.p>
      </article>

      <article className='mt-60 w-[600px] font-semibold'>
        <motion.h2
          className='pl-2 text-4xl text-neutral-500'
          variants={variants}
          initial='hidden'
          whileInView='smoothDelay'
          viewport={{ once: true }}
        >
          CAREER
        </motion.h2>
        <motion.hgroup
          className='mt-8 space-y-3'
          variants={variants}
          initial='hidden'
          whileInView='smooth'
          viewport={{ once: true }}
        >
          <div className='w-full flex items-center justify-between'>
            <h2 className='text-6xl'>한전KDN</h2>
            <h3 className='text-3xl font-medium'>2022.12 ~ 2024.02</h3>
          </div>
          <h3 className='text-xl text-right'>BSC 성과지표 시스템 고도화</h3>
          <h3 className='text-xl text-right'>넥사크로, Oracle, Ibatis</h3>
        </motion.hgroup>
        <motion.hgroup
          className='mt-20 space-y-3'
          variants={variants}
          initial='hidden'
          whileInView='smooth'
          viewport={{ once: true }}
        >
          <div className='w-full flex items-center justify-between'>
            <h2 className='text-6xl '>전남대학교</h2>
            <h3 className='text-3xl font-medium'>2021.07 ~ 2022.08</h3>
          </div>
          <h3 className='text-xl text-right'>손동작 인식 머신러닝 연구</h3>
          <h3 className='text-xl text-right'>Tensorflow</h3>
        </motion.hgroup>
      </article>

      <motion.div
        className='w-[1000px] h-0.5 rounded-full bg-neutral-300 my-32'
        variants={variants}
        initial='seperatorInit'
        whileInView='seperator'
        viewport={{ once: true }}
      />

      <article className='w-[600px] font-semibold'>
        <motion.h2
          className='pl-2 text-4xl text-neutral-500'
          variants={variants}
          initial='hidden'
          whileInView='smoothDelay'
          viewport={{ once: true }}
        >
          EDUCATION
        </motion.h2>
        <motion.hgroup
          className='mt-8 space-y-3'
          variants={variants}
          initial='hidden'
          whileInView='smooth'
          viewport={{ once: true }}
        >
          <div className='w-full flex items-center justify-between'>
            <h2 className='text-6xl'>하나금융TI</h2>
            <h3 className='text-3xl font-medium'>2024.02 ~ 진행중</h3>
          </div>
          <h3 className='text-xl text-right'>데이터분석 채용연계형 교육생</h3>
        </motion.hgroup>
        <motion.hgroup
          className='mt-20 space-y-3'
          variants={variants}
          initial='hidden'
          whileInView='smooth'
          viewport={{ once: true }}
        >
          <div className='w-full flex items-center justify-between'>
            <h2 className='text-6xl'>전남대학교</h2>
            <h3 className='text-3xl font-medium'>2016.03 ~ 2023.02</h3>
          </div>
          <h3 className='text-xl text-right'>컴퓨터정보통신공학</h3>
        </motion.hgroup>
      </article>

      <motion.div
        className='w-[1000px] h-0.5 rounded-full bg-neutral-300 my-32'
        variants={variants}
        initial='seperatorInit'
        whileInView='seperator'
        viewport={{ once: true }}
      />

      <article className='w-[600px] mb-32 font-semibold'>
        <motion.h2
          className='pl-2 text-4xl text-neutral-500'
          variants={variants}
          initial='hidden'
          whileInView='smoothDelay'
          viewport={{ once: true }}
        >
          CERTIFICATE
        </motion.h2>
        <motion.hgroup
          className='mt-8 space-y-14'
          variants={variants}
          initial='hidden'
          whileInView='smooth'
          viewport={{ once: true }}
        >
          <h2 className='text-6xl'>정보처리기사</h2>
          <h2 className='text-6xl'>토익 990</h2>
        </motion.hgroup>
      </article>
    </main>
  );
};

export default AboutMePage;
