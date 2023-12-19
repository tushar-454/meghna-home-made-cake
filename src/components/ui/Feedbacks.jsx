import Container from './Container';
import Title from './Title';
const popularCakesData = [{}, {}, {}, {}, {}, {}];

const Feedbacks = () => {
  return (
    <section>
      <Container>
        <Title>গ্রাহকদের মন্তব্য</Title>
        {/* <!-- Grid --> */}
        <div class='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
          {popularCakesData.map((cake, index) => (
            <a
              key={index}
              class='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href='#'
            >
              <div class='p-4 md:p-5'>
                <div class='flex flex-col gap-4 justify-between items-center'>
                  <div class='w-full h-52 object-cover flex flex-col justify-center items-center bg-blue-600 rounded-t-xl'>
                    <img
                      src={
                        (index + 1) % 2 === 0
                          ? 'https://cutt.ly/XwDefdvc'
                          : 'https://cutt.ly/bwDexjav'
                      }
                      alt=''
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <h3 class='group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200'>
                      রেশমি আক্তার
                    </h3>
                    <p class='text-sm text-gray-500 text-justify'>
                      কেকটি খুবই সফট ও সতেজ ছিলো, এবং সব ইনগ্রেটিএন্ট গুলো টপনচ
                      ছিলো কেকটি খুবই সফট ও সতেজ ছিলো, এবং সব ইনগ্রেটিএন্ট{' '}
                      <span className='text-orange-500'>...আরোও পড়ুন</span>
                    </p>
                  </div>
                  {/* <div class='ps-3'>
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
