import AdminOrdersTableList from '@/components/shared/AdminOrdersTableList';
import Title from '@/components/ui/Title';

const Orders = () => {
  return (
    <div>
      <Title>সকল অর্ডার সমূহ</Title>
      {/* all order table list  */}
      <AdminOrdersTableList />
    </div>
  );
};

export default Orders;
