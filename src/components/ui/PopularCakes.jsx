import ButtonFill from '@/components/ui/ButtonFill';
import getApiData from '@/lib/getApiData';
import Link from 'next/link';
import CakeCard from '../shared/CakeCard';
import Container from './Container';
import Title from './Title';

const PopularCakes = async () => {
  const { data: popularCakesData } = await getApiData(
    'user/getCakeByCategory?category=popular'
  );
  return (
    <section>
      <Container>
        <Title>জনপ্রিয় কেক সমূহ</Title>
        {/* <!-- Grid --> */}
        <div className='my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {popularCakesData.map((cake, index) => (
            <CakeCard cake={cake} key={index} />
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
