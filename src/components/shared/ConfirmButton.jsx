'use client';

const ConfirmButton = ({ id, orderStatus }) => {
  const handleApproveOrder = async () => {
    fetch(`http://www.localhost:5000/api/v1/admin/updateorderinfo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ orderStatus: 'Confirm' }),
    });
  };
  return (
    <td class='px-6 py-4'>
      <button onClick={handleApproveOrder}>
        {orderStatus === 'pending' ? 'নিশ্চিত করুন' : 'নিশ্চিত'}
      </button>
    </td>
  );
};

export default ConfirmButton;
