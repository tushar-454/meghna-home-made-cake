'use client';

import toast from 'react-hot-toast';

const ConfirmButton = ({ id, orderStatus }) => {
  const handleApproveOrder = async () => {
    const res = await fetch(
      `http://www.localhost:5000/api/v1/admin/updateorderinfo/${id}`,
      {
        next: {
          revalidate: 1,
        },
        method: 'PATCH',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify({ orderStatus: 'confirm' }),
      }
    );
    const { message } = await res.json();
    if (message === 'success') {
      toast.success('অর্ডারটি কনফার্ম করা হলো');
    }
  };
  return (
    <td class='px-6 py-4'>
      <button
        onClick={
          orderStatus === 'pending'
            ? handleApproveOrder
            : () => {
                toast.error('অর্ডারটি কনফার্ম করা হয়েছে');
              }
        }
      >
        {orderStatus === 'pending' ? 'নিশ্চিত করুন' : 'নিশ্চিত'}
      </button>
    </td>
  );
};

export default ConfirmButton;
