import ButtonFill from '../shared/ButtonFill';
import Container from './Container';
import Title from './Title';
const popularCakesData = [{}, {}, {}, {}, {}, {}];
const PopularCakes = () => {
  return (
    <section>
      <Container>
        <Title>জনপ্রিয় কেক সমূহ</Title>
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
        <ButtonFill>আরোও দেখুন</ButtonFill>
      </Container>
    </section>
  );
};

export default PopularCakes;