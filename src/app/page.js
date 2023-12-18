import Carousel from '../components/ui/CarouselComponent';

const Home = () => {
  return (
    <section>
      <div className='my-5'>
        <h1 className='flex flex-col items-center font-black text-2xl sm:text-4xl leading-[2rem] sm:leading-[3rem]'>
          <span>স্বাগতম </span> <span>মেঘনা হোমমেড কেক স্টোরে</span>
        </h1>
      </div>
      {/* carosel  */}
      <Carousel />
    </section>
  );
};

export default Home;
