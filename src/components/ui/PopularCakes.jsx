import ButtonFill from '@/components/ui/ButtonFill';
import Image from 'next/image';
import Link from 'next/link';
import { TbCurrencyTaka } from 'react-icons/tb';
import Container from './Container';
import Title from './Title';
const popularCakesData = [{}, {}, {}, {}, {}, {}];
const PopularCakes = () => {
  return (
    <section>
      <Container>
        <Title>জনপ্রিয় কেক সমূহ</Title>
        {/* <!-- Grid --> */}
        <div className='my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {popularCakesData.map((cake, index) => (
            <div
              key={index}
              className='group flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]'
            >
              <div className='flex h-52 w-full flex-col items-center justify-center rounded-t-xl object-cover'>
                <Image
                  src='https://cutt.ly/wwDw1rq1'
                  width={100}
                  height={100}
                  alt=''
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='p-4 md:p-6'>
                <span className='mb-1 block text-xs font-semibold uppercase text-blue-600 dark:text-blue-500'>
                  চকলেট ফ্লেভার
                </span>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white'>
                  ভ্যানিলা চকলেট কেক
                </h3>
                <p className='mt-3 text-gray-500'>
                  ২ পাউন্ড এর সাদা ক্রিপ এর সাথে স্পেশাল কিটকেট চকলেট ফ্লেভারের
                  সাথে থাকছে সুন্দর সাজ সজ্জা
                </p>
                <h3 className='mt-5 flex items-center text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white'>
                  <span>
                    <span className='flex'>
                      মূল্য (পাউন্ড) → ৬০০
                      <TbCurrencyTaka />
                    </span>{' '}
                  </span>
                  <sub>
                    <del className='text-red-400'>৮০০</del>
                  </sub>
                </h3>
              </div>
              <div className='mt-auto flex divide-x divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700'>
                <a
                  className='inline-flex w-full items-center justify-center gap-x-2 rounded-es-xl bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='#'
                >
                  বিস্তারিত দেখুন
                </a>
                <a
                  className='inline-flex w-full items-center justify-center gap-x-2 rounded-ee-xl bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='#'
                >
                  কার্ট এ যোগ করুন
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- End Grid --> */}
        <Link href={'/cakes'}>
          <ButtonFill displayName={'আরোও দেখুন'} />
        </Link>
      </Container>
    </section>
  );
};

export default PopularCakes;
