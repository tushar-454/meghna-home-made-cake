import loading from '@/../public/loading.gif';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='min-h-screen flex flex-col justify-start items-center mt-10 p-10'>
      <h1 className='text-4xl font-bold leading-[4rem] text-center sm:text-inherit'>
        অনুগ্রহ করে অপেক্ষা করুন।
      </h1>
      <Image src={loading} alt='loading' className='w-20' />
    </div>
  );
}
