'use client';

import postApiData from '@/lib/postApiData';
import toast from 'react-hot-toast';
const AdminCakeDeleteBtn = ({ cakeId }) => {
  const handleDeleteCake = async () => {
    const { message } = await postApiData(
      `admin/deleteacake/${cakeId}`,
      'DELETE',
      {}
    );
    if (message === 'success') {
      toast.success('ডাটাবেজ থেকে কেকটি মুছে ফেলা হলো');
    } else {
      toast.error('ডাটাবেজ অপারেশনে কোনো সমস্যা হয়েছে');
    }
  };
  return (
    <p
      onClick={handleDeleteCake}
      class='cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline'
    >
      মুছুন
    </p>
  );
};

export default AdminCakeDeleteBtn;
