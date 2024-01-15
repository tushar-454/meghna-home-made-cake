import AdminCakesTable from '@/components/shared/AdminCakesTable';
import Title from '@/components/ui/Title';

const ManageCake = () => {
  return (
    <div>
      <Title>সকল কেক ম্যানেজ করুন</Title>

      {/* ManageCake table list  */}
      <AdminCakesTable />
    </div>
  );
};

export default ManageCake;
