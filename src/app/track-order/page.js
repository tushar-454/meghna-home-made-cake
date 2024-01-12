import bKash from '@/assets/bkash_payment_logo.webp';
import confirm from '@/assets/confirm.png';
import cooking from '@/assets/cooking.png';
import delivered from '@/assets/delivered.png';
import orderPacked from '@/assets/orderPacked.png';
import outForDeliver from '@/assets/outfordelivery.png';
import pending from '@/assets/pending-order.png';
import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import Image from 'next/image';
import { IoSearchOutline } from 'react-icons/io5';

const TrackOrder = () => {
  const deliveryManImg = 'https://cutt.ly/cwDaR8Pp';
  return (
    <section className='bg-slate-50'>
      <Container>
        <Title>আপনার অর্ডার ট্রেক করুন</Title>
        <div className='my-10 min-h-screen'>
          <form>
            <div className='relative flex space-x-3 rounded-lg border bg-white p-3 shadow-lg shadow-gray-100 dark:border-gray-700 dark:bg-slate-900 dark:shadow-gray-900/[.2]'>
              <div className='flex-[1_0_0%]'>
                <input
                  type='text'
                  name='hs-search-article-1'
                  id='hs-search-article-1'
                  className='block w-full rounded-lg border-transparent px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-transparent dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                  placeholder='অর্ডার করার পর যে আইডি টি পেয়েছিলেন তা এখানে লিখুন'
                />
              </div>
              <div className='flex-[0_0_auto]'>
                <a
                  className='inline-flex h-[46px] w-[46px] items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='#'
                >
                  <IoSearchOutline className='text-xl' />
                </a>
              </div>
            </div>
          </form>
          {/* delivery details  */}
          <div className='my-10 space-y-5'>
            <h1 className='py-4 text-2xl font-semibold text-slate-900 underline underline-offset-4 dark:text-gray-200'>
              অর্ডার এর বর্ণনা
            </h1>
            {/* order card  */}
            <div className='w-full rounded-lg border-l-8 border-green-500 bg-white p-3 shadow'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                অর্ডার আইডি
              </h1>
              <span className='text-xl font-semibold text-slate-700 dark:text-gray-200'>
                we334df789323yf098
              </span>
            </div>
            {/* order card  */}
            <div className='w-full rounded-lg border-l-8 border-green-500 bg-white p-3 shadow'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                অর্ডার ডেলিভারি তথ্য
              </h1>
              <p className='py-2 text-xl font-semibold text-slate-700 dark:text-gray-200'>
                +8801863573951
              </p>
              <p className='text-md font-semibold text-slate-600 dark:text-gray-200'>
                তুষার ইমরান
              </p>
              <p className='text-md pb-4 font-semibold text-slate-500 dark:text-gray-200'>
                মেঘনা থানা, রাধানগর ইউনিয়ন, মুগারচর গ্রাম, সরা বাড়ী
              </p>
            </div>
            {/* order card  */}
            <div className='w-full rounded-lg border-l-8 border-green-500 bg-white p-3 shadow'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                ডেলিভারি ম্যান
              </h1>
              <div className='flex items-center gap-5 py-2'>
                <div className='h-16 w-16 rounded-full object-cover'>
                  <Image
                    src={deliveryManImg}
                    width={60}
                    height={60}
                    alt='delivery man'
                    className='h-full w-full rounded-full object-cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='text-md font-semibold text-slate-700 dark:text-gray-200'>
                    সাইদুল ইসলাম
                  </span>
                  <span className='text-md font-semibold text-slate-700 dark:text-gray-200'>
                    +8801863573951
                  </span>
                </div>
              </div>
            </div>
            {/* order card  */}
            <div className='w-full overflow-auto'>
              <div className='w-[768px] rounded-lg border-l-8 border-green-500 bg-white p-3 shadow md:w-full'>
                <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                  টাইমলাইন
                </h1>
                <div className='flex flex-col items-center gap-5 py-2'>
                  <div className='flex w-full justify-between'>
                    <Image src={pending} width={50} height={50} alt='pending' />
                    <Image src={confirm} width={50} height={50} alt='pending' />
                    <Image src={cooking} width={50} height={50} alt='pending' />
                    <Image
                      src={orderPacked}
                      width={50}
                      height={50}
                      alt='pending'
                    />
                    <Image
                      src={outForDeliver}
                      width={50}
                      height={50}
                      alt='pending'
                    />
                    <Image
                      src={delivered}
                      width={50}
                      height={50}
                      alt='pending'
                    />
                  </div>
                  <div className='w-full border-2 border-dashed'></div>
                  <div className='timeLineCheckRoot flex w-full justify-between'>
                    <p className='text- w-[120px] text-base font-semibold text-slate-700 dark:text-gray-200'>
                      পেন্ডিং
                    </p>
                    <p className='text- w-[120px] text-base font-semibold text-slate-700 dark:text-gray-200'>
                      নিশ্চিত হলো
                    </p>
                    <p className='w-[120px] text-center text-base font-semibold text-slate-700 dark:text-gray-200'>
                      তৈরি হচ্ছে
                    </p>
                    <p className='w-[120px] text-center text-base font-semibold text-slate-700 dark:text-gray-200'>
                      প্যাকেজ
                    </p>
                    <p className='w-[120px] text-center text-base font-semibold text-slate-700 dark:text-gray-200'>
                      ট্রানজিট
                    </p>
                    <p className='w-[120px] text-end text-base font-semibold text-slate-700 dark:text-gray-200'>
                      ডেলিভার সম্পন্ন
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* order card  */}
            <div className='w-full rounded-lg border-l-8 border-green-500 bg-white p-3 shadow'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                পেমেন্ট পরিশোধের পদ্ধতি
              </h1>
              <Image
                src={bKash}
                width={60}
                height={60}
                alt='bkash payment'
                className='my-2 rounded-2xl border-4 border-yellow-500'
              />
              <h1 className='text-lg font-semibold text-slate-700 dark:text-gray-200'>
                ৩০০০ টাকা পে করা হয়েছে।
              </h1>
            </div>
            {/* order card  */}
            <div className='w-full rounded-lg border-l-8 border-green-500 bg-white p-3 shadow'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                কেক হাতে পাবার পর পিন কোডটি দিয়ে নিশ্চিত করুন
              </h1>
              <form className='mt-5'>
                <div className='relative flex space-x-3 rounded-lg border bg-white p-3 shadow-lg shadow-gray-100 dark:border-gray-700 dark:bg-slate-900 dark:shadow-gray-900/[.2]'>
                  <div className='flex-[1_0_0%]'>
                    <input
                      type='number'
                      name='hs-search-article-1'
                      id='hs-search-article-1'
                      className='block w-full rounded-lg border-transparent px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-transparent dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
                      placeholder='এখানে কোডটি লিখুন'
                    />
                  </div>
                  <div className='flex-[0_0_auto]'>
                    <a
                      className='inline-flex h-[46px] w-fit items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                      href='#'
                    >
                      নিশ্চিত করুন
                    </a>
                  </div>
                </div>
              </form>
            </div>
            {/* order card  */}
            <div className='w-full rounded-lg border-l-8 border-green-500 bg-white p-3 shadow'>
              <button
                type='button'
                className='inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-yellow-500 px-4 py-3 text-sm font-semibold text-white hover:bg-yellow-600 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              >
                রিভিও দিতে এখানে ট্যাপ করুন
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrackOrder;
