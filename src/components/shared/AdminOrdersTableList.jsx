import getApiData from '@/lib/getApiData';
import Link from 'next/link';
import ConfirmButton from './ConfirmButton';

const AdminOrdersTableList = async () => {
  const { data: allorders } = await getApiData('admin/getallorders');
  return (
    <div class='mr-5 relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 whitespace-nowrap'>
          <tr>
            <th scope='col' class='px-6 py-3'>
              কাস্টমার তথ্য
            </th>
            <th scope='col' class='px-6 py-3'>
              ডেলিভারি ঠিকানা
            </th>
            <th scope='col' class='px-6 py-3'>
              তারিখ
            </th>
            <th scope='col' class='px-6 py-3'>
              উইশ বার্তা
            </th>
            <th scope='col' class='px-6 py-3'>
              নির্দেশনা
            </th>
            <th scope='col' class='px-6 py-3'>
              কেকের তথ্য
            </th>
            <th scope='col' class='px-6 py-3'>
              মোট টাকা
            </th>
            <th scope='col' class='px-6 py-3 whitespace-nowrap'>
              পেমেন্ট স্ট্যাটাস
            </th>
            <th scope='col' class='px-6 py-3'>
              অ্যাকশন
            </th>
          </tr>
        </thead>
        <tbody>
          {allorders.map((order, index) => (
            <tr
              key={index}
              class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'
            >
              <th
                scope='row'
                class='w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                <p className='flex flex-col'>
                  <span>{order.name}</span>
                  <span>
                    <a href={`tel:${order.mobile}`}>{order.mobile}</a>
                  </span>
                </p>
              </th>
              <td class='px-6 py-4'>{order.address}</td>
              <td class='px-6 py-4 whitespace-nowrap'>{order.date}</td>
              <td class='px-6 py-4'>{order.wishText}</td>
              <td class='px-6 py-4'>{order.instruction}</td>
              <td class='px-6 py-4'>
                {order.orderItem.map((item, index) => (
                  <div className='p-1 bg-supernova-100/30 mb-1'>
                    <p key={index}>
                      <Link
                        href={`/cake/${item.cakeId}`}
                        className='whitespace-nowrap'
                      >
                        কেকটি দেখুন
                      </Link>
                    </p>
                    <p className='whitespace-nowrap'>ফ্লেভারঃ {item.flavour}</p>
                    <p>পরিমানঃ {item.quentity}</p>
                  </div>
                ))}
              </td>
              <td class='px-6 py-4'>{order.totalMoney}</td>
              <td class='px-6 py-4'>{order.paymentStatus}</td>
              <ConfirmButton id={order._id} orderStatus={order.orderStatus} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrdersTableList;
