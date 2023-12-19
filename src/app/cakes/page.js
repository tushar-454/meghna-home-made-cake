import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import { IoSearchOutline } from 'react-icons/io5';
const popularCakesData = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const Cakes = () => {
  return (
    <section>
      <Container>
        <Title>আমাদের সকল কেক সমূহ</Title>
        <form>
          <div className='relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]'>
            <div className='flex-[1_0_0%]'>
              <label
                for='hs-search-article-1'
                className='block text-sm text-gray-700 font-medium dark:text-white'
              >
                <span className='sr-only'>Search article</span>
              </label>
              <input
                type='email'
                name='hs-search-article-1'
                id='hs-search-article-1'
                className='py-2.5 px-4 block w-full border-transparent rounded-lg outline-none focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600'
                placeholder='কেকের নাম অথবা ফ্লেভার দিয়ে সার্চ করুন'
              />
            </div>
            <div className='flex-[0_0_auto]'>
              <a
                className='w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                href='#'
              >
                <IoSearchOutline className='text-xl' />
              </a>
            </div>
          </div>
        </form>
        {/* <!-- Grid --> */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
          {popularCakesData.map((cake, index) => (
            <div
              key={index}
              className='group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'
            >
              <div className='w-full h-52 object-cover flex flex-col justify-center items-center rounded-t-xl'>
                <img
                  src='https://cutt.ly/wwDw1rq1'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-4 md:p-6'>
                <span className='block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500'>
                  চকলেট ফ্লেভার
                </span>
                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white'>
                  ভ্যানিলা চকলেট কেক
                </h3>
                <p className='mt-3 text-gray-500'>
                  ২ পাউন্ড এর সাদা ক্রিপ এর সাথে স্পেশাল কিটকেট চকলেট ফ্লেভারের
                  সাথে থাকছে সুন্দর সাজ সজ্জা
                </p>
              </div>
              <div className='mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700'>
                <a
                  className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='#'
                >
                  বিস্তারিত দেখুন
                </a>
                <a
                  className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
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
