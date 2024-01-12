import getApiData from '@/lib/getApiData';
import CommentCard from '../shared/CommentCard';
import Container from './Container';
import Title from './Title';

const Feedbacks = async () => {
  const { data: allComments } = await getApiData(`user/getcomments`);

  return (
    <section>
      <Container>
        <Title>গ্রাহকদের মন্তব্য</Title>
        {/* <!-- Grid --> */}
        <div className='my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {allComments.map((comment, index) => (
            <CommentCard comment={comment} key={index} />
          ))}
        </div>
        {/* <!-- End Grid --> */}
      </Container>
    </section>
  );
};

export default Feedbacks;
