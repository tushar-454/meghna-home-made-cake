import AdminAside from '@/components/shared/AdminAside';
import Container from '@/components/ui/Container';

const AdminLayout = ({ children }) => {
  return (
    <section>
      <Container>
        <div className='my-5 flex min-h-screen gap-5 border'>
          <AdminAside />
          <div className='flex-grow overflow-x-auto'>{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default AdminLayout;
