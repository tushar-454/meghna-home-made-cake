import four0four from '@/../public/four0four.gif';
import Image from 'next/image';

function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-start items-center mt-10 p-10'>
      <h1 className='text-4xl font-bold leading-[4rem] text-center sm:text-inherit'>
        দুঃখিত পেইজটি খুঁজে পাওয়া যাচ্ছে না !
      </h1>
      <Image src={four0four} alt='four0four' />
    </div>
  );
}

export default NotFound;
