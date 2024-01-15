import getApiData from '@/lib/getApiData';
import Image from 'next/image';

const AdminCakesTable = async () => {
  const { data: allcakes } = await getApiData('admin/getallcakes');
  return (
    <div class='mr-5 relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' class='px-6 py-3'>
              কেকের ছবি
            </th>
            <th scope='col' class='px-6 py-3'>
              কেকের নাম
            </th>
            <th scope='col' class='px-6 py-3'>
              ফ্লেভার
            </th>
            <th scope='col' class='px-6 py-3'>
              দাম
            </th>
            <th scope='col' class='px-6 py-3'>
              অ্যাকশন
            </th>
          </tr>
        </thead>
        <tbody>
          {allcakes.map((cake, index) => (
            <tr
              key={index}
              class='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'
            >
              <th
                scope='row'
                class='w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                <Image
                  src={cake.image}
                  width={80}
                  height={80}
                  alt='cake image'
                />
              </th>
              <td class='px-6 py-4'>{cake.name}</td>
              <td class='px-6 py-4'>{cake.flavour}</td>
              <td class='px-6 py-4'>{cake.salePrice}</td>
              <td class='px-6 py-4'>
                <p class='cursor-pointer font-medium text-supernova-600 dark:text-supernova-500 hover:underline'>
                  আপডেট করুন
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCakesTable;
