import ButtonOutline from '@/components/ui/ButtonOutline';
import getApiData from '@/lib/getApiData';
import Link from 'next/link';
import CakeCard from '../shared/CakeCard';
import Container from './Container';
import Title from './Title';

const NewCakes = async () => {
  const { data: newCakesData } = await getApiData(
    'user/getCakeByCategory?category=new'
  );
  return (
    <section>
      <Container>
        <Title>নতুন ডিজাইন কেক সমূহ</Title>
        {/* <!-- Grid --> */}
        <div className='my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {newCakesData.map((cake, index) => (
            <CakeCard cake={cake} key={index} />
          ))}
        </div>
        {/* <!-- End Grid --> */}
        <Link href={'/cakes'}>
          <ButtonOutline displayName='আরোও দেখুন' />
        </Link>
      </Container>
    </section>
  );
};

export default NewCakes;
