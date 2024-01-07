import four0four from '@/../public/four0four.gif';
import Image from 'next/image';

function NotFound() {
  return (
    <div className='mt-10 flex min-h-screen flex-col items-center justify-start p-10'>
      <h1 className='text-center text-4xl font-bold leading-[4rem] sm:text-inherit'>
        দুঃখিত পেইজটি খুঁজে পাওয়া যাচ্ছে না !
      </h1>
      <Image src={four0four} alt='four0four' />
    </div>
  );
}

export default NotFound;
