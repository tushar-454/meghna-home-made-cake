import Feedbacks from '@/components/ui/Feedbacks';
import NewCakes from '@/components/ui/NewCakes';
import PopularCakes from '@/components/ui/PopularCakes';
import Carousel from '../components/ui/CarouselComponent';

const Home = () => {
  return (
    <section>
      <div className='my-5'>
        <h1 className='flex flex-col items-center text-2xl font-black leading-[2rem] sm:text-4xl sm:leading-[3rem]'>
          <span>স্বাগতম </span> <span>মেঘনা হোমমেড কেক স্টোরে</span>
        </h1>
      </div>
      {/* carosel  */}
      <Carousel />
      <PopularCakes />
      <NewCakes />
      <Feedbacks />
    </section>
  );
};

export default Home;
