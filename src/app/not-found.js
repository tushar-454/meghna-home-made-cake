import four0four from '@/../public/four0four.gif';
import Image from 'next/image';

function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>
        দুঃখিত পেইজটি খুঁজে পাওয়া যাচ্ছে না !
      </h1>
      <Image src={four0four} alt='four0four' />
    </div>
  );
}

export default NotFound;
