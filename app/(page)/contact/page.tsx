import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { LuContact } from 'react-icons/lu';
import { MdPermContactCalendar } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { easeIn, motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <main className='w-full h-full flex items-center justify-center gap-20'>
      <Image src='/me.jpg' alt='myphoto' width={400} height={600} />
      <hgroup className='text-neutral-700 font-semibold'>
        <h1>연락주시면 빠른시일 내 회신드리겠습니다.</h1>
      </hgroup>
    </main>
  );
};
export default ContactPage;
