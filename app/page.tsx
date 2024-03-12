import Link, { LinkProps } from 'next/link';

export default function Home() {
  return (
    <main className='h-full bg-[#F3EFE7] flex flex-col items-center justify-center gap-20'>
      <h1 className='text-8xl font-extrabold text-[#FF3B00] tracking-widest'>안녕하세요!</h1>
      <Link href='/project'>
        <section className='relative text-xl font-semibold h-[200px] w-[200px] spin text-[#FF3B00] hover:text-[#FF3B00]/70 duration-150 cursor-pointer flex items-center justify-center'>
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
        </section>
      </Link>
      <h1 className='text-8xl font-extrabold text-[#FF3B00] tracking-wider'>저의 포트폴리오</h1>
      <h1 className='text-8xl tracking-wider font-extrabold text-[#FF3B00]'>방문에 감사드립니다.</h1>
    </main>
  );
}
