import Image from 'next/image';
import Container from './Container';
import Title from './Title';
const popularCakesData = [{}, {}, {}, {}, {}, {}];

const Feedbacks = () => {
  return (
    <section>
      <Container>
        <Title>গ্রাহকদের মন্তব্য</Title>
        {/* <!-- Grid --> */}
        <div className='my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {popularCakesData.map((cake, index) => (
            <a
              key={index}
              className='group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href='#'
            >
              <div className='p-4 md:p-5'>
                <div className='flex flex-col items-center justify-between gap-4'>
                  <div className='items-cente flex h-52 w-full flex-col justify-center rounded-t-xl  object-cover'>
                    <Image
                      src={
                        (index + 1) % 2 === 0
                          ? 'https://cutt.ly/XwDefdvc'
                          : 'https://cutt.ly/bwDexjav'
                      }
                      alt=''
                      width={100}
                      height={100}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-gray-400'>
                      রেশমি আক্তার
                    </h3>
                    <p className='text-justify text-sm text-gray-500'>
                      কেকটি খুবই সফট ও সতেজ ছিলো, এবং সব ইনগ্রেটিএন্ট গুলো টপনচ
                      ছিলো কেকটি খুবই সফট ও সতেজ ছিলো, এবং সব ইনগ্রেটিএন্ট{' '}
                      <span className='text-orange-500'>...আরোও পড়ুন</span>
                    </p>
                  </div>
                  {/* <div className='ps-3'>
                    <RiArrowRightSLine />
                  </div> */}
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* <!-- End Grid --> */}
      </Container>
    </section>
  );
};

export default Feedbacks;
