import Link from 'next/link';

const AdminAside = () => {
  return (
    <aside className='bg-white border-r'>
      <ul className='font-semibold flex flex-col gap-4'>
        <Link href={'/admin/manage-cakes'} className='p-3 bg-gray-100'>
          <li>কেক সমূহ</li>
        </Link>
        <Link href={'/admin/add-cake'} className='p-3 bg-gray-100'>
          <li>কেক যোগ করুন</li>
        </Link>
        <Link href={'/admin/orders'} className='p-3 bg-gray-100'>
          <li>অর্ডার সমূহ</li>
        </Link>
        <Link href={'/admin/manage-orders'} className='p-3 bg-gray-100'>
          <li>অর্ডার ম্যানেজ</li>
        </Link>
        <Link href={'/admin/update-cake'} className='p-3 bg-gray-100'>
          <li>কেকের তথ্য আপডেট</li>
        </Link>
      </ul>
    </aside>
  );
};

export default AdminAside;
