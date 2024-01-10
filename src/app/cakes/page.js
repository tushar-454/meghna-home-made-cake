import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import getApiData from '@/lib/getApiData';
import Image from 'next/image';
import { IoSearchOutline } from 'react-icons/io5';
import { TbCurrencyTaka } from 'react-icons/tb';

const Cakes = async () => {
  const {data:allcakes} = await getApiData();
  console.log(allcakes);
  return (
    <section>
      <Container>
        <Title>আমাদের সকল কেক সমূহ</Title>
        <form>
          <div className='relative z-10 flex space-x-3 rounded-lg border bg-white p-3 shadow-lg shadow-gray-100 dark:border-gray-700 dark:bg-slate-900 dark:shadow-gray-900/[.2]'>
            <div className='flex-[1_0_0%]'>
              <label
                htmlFor='hs-search-article-1'
                className='block text-sm font-medium text-gray-700 dark:text-white'
              >
                <span className='sr-only'>Search article</span>
              </label>
              <input
                type='email'
                name='hs-search-article-1'
                id='hs-search-article-1'
                className='block w-full rounded-lg border-transparent px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-transparent dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                placeholder='কেকের নাম অথবা ফ্লেভার দিয়ে সার্চ করুন'
              />
            </div>
            <div className='flex-[0_0_auto]'>
              <a
                className='inline-flex h-[46px] w-[46px] items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                href='#'
              >
                <IoSearchOutline className='text-xl' />
              </a>
            </div>
          </div>
        </form>
        {/* <!-- Grid --> */}
        <div className='my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {allcakes.map((cake, index) => (
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
                  {cake.flavour}
                </span>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white'>
                  {cake.name}
                </h3>
                <p className='mt-3 text-gray-500'>
                 {cake.description}
                </p>
                <h3 className='mt-5 flex items-center text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white'>
                  <span>
                    <span className='flex'>
                      মূল্য (পাউন্ড) → {cake.salePrice}
                      <TbCurrencyTaka />
                    </span>{' '}
                  </span>
                  <sub>
                    <del className='text-red-400'>{cake.price}</del>
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
      </Container>
    </section>
  );
};

export default Cakes;
