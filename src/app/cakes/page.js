import CakeCard from '@/components/shared/CakeCard';
import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import getApiData from '@/lib/getApiData';
import { IoSearchOutline } from 'react-icons/io5';

const Cakes = async () => {
  const { data: allcakes } = await getApiData('user/getallcakes');

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
            <CakeCard cake={cake} key={index} />
          ))}
        </div>
        {/* <!-- End Grid --> */}
      </Container>
    </section>
  );
};

export default Cakes;
