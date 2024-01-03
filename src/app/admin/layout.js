import AdminAside from '@/components/shared/AdminAside';
import Container from '@/components/ui/Container';

const AdminLayout = ({ children }) => {
  return (
    <section>
      <Container>
        <div className='border min-h-screen my-5 flex gap-5'>
          <AdminAside />
          <div className='flex-grow'>{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default AdminLayout;
