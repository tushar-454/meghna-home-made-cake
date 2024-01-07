import loading from '@/../public/loading.gif';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='mt-10 flex min-h-screen flex-col items-center justify-start p-10'>
      <h1 className='text-center text-4xl font-bold leading-[4rem] sm:text-inherit'>
        অনুগ্রহ করে অপেক্ষা করুন।
      </h1>
      <Image src={loading} alt='loading' className='w-20' />
    </div>
  );
}
