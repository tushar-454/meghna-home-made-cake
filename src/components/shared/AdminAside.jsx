import Link from 'next/link';

const AdminAside = () => {
  return (
    <aside className='border-r bg-white'>
      <ul className='flex flex-col gap-4 font-semibold'>
        <Link href={'/admin/manage-cakes'} className='bg-gray-100 p-3'>
          <li>কেক সমূহ</li>
        </Link>
        <Link href={'/admin/add-cake'} className='bg-gray-100 p-3'>
          <li>কেক যোগ করুন</li>
        </Link>
        <Link href={'/admin/orders'} className='bg-gray-100 p-3'>
          <li>অর্ডার সমূহ</li>
        </Link>
        <Link href={'/admin/manage-orders'} className='bg-gray-100 p-3'>
          <li>অর্ডার ম্যানেজ</li>
        </Link>
        <Link href={'/admin/update-cake'} className='bg-gray-100 p-3'>
          <li>কেকের তথ্য আপডেট</li>
        </Link>
      </ul>
    </aside>
  );
};

export default AdminAside;
