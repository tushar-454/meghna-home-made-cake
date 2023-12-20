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
  return (
    <section className='bg-slate-50'>
      <Container>
        <Title>আপনার অর্ডার ট্রেক করুন</Title>
        <div className='my-10 min-h-screen'>
          <form>
            <div className='relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]'>
              <div className='flex-[1_0_0%]'>
                <input
                  type='text'
                  name='hs-search-article-1'
                  id='hs-search-article-1'
                  className='py-2.5 px-4 block w-full border-transparent rounded-lg outline-none focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600'
                  placeholder='অর্ডার করার পর যে আইডি টি পেয়েছিলেন তা এখানে লিখুন'
                />
              </div>
              <div className='flex-[0_0_auto]'>
                <a
                  className='w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  href='#'
                >
                  <IoSearchOutline className='text-xl' />
                </a>
              </div>
            </div>
          </form>
          {/* delivery details  */}
          <div className='my-10 space-y-5'>
            <h1 className='py-4 text-2xl font-semibold underline underline-offset-4 text-slate-900 dark:text-gray-200'>
              অর্ডার এর বর্ণনা
            </h1>
            {/* order card  */}
            <div className='w-full bg-white shadow p-3 border-l-8 border-green-500 rounded-lg'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                অর্ডার আইডি
              </h1>
              <span className='text-xl font-semibold text-slate-700 dark:text-gray-200'>
                we334df789323yf098
              </span>
            </div>
            {/* order card  */}
            <div className='w-full bg-white shadow p-3 border-l-8 border-green-500 rounded-lg'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                অর্ডার ডেলিভারি তথ্য
              </h1>
              <p className='py-2 text-xl font-semibold text-slate-700 dark:text-gray-200'>
                +8801863573951
              </p>
              <p className='text-md font-semibold text-slate-600 dark:text-gray-200'>
                তুষার ইমরান
              </p>
              <p className='pb-4 text-md font-semibold text-slate-500 dark:text-gray-200'>
                মেঘনা থানা, রাধানগর ইউনিয়ন, মুগারচর গ্রাম, সরা বাড়ী
              </p>
            </div>
            {/* order card  */}
            <div className='w-full bg-white shadow p-3 border-l-8 border-green-500 rounded-lg'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                ডেলিভারি ম্যান
              </h1>
              <div className='flex items-center gap-5 py-2'>
                <div className='w-16 h-16 object-cover rounded-full'>
                  <Image
                    src={'https://cutt.ly/cwDaR8Pp'}
                    width={60}
                    height={60}
                    alt='delivery man'
                    className='w-full h-full object-cover rounded-full'
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
              <div className='w-[768px] md:w-full bg-white shadow p-3 border-l-8 border-green-500 rounded-lg'>
                <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                  টাইমলাইন
                </h1>
                <div className='flex flex-col gap-5 items-center py-2'>
                  <div className='w-full flex justify-between'>
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
                  <div className='timeLineCheckRoot w-full flex justify-between'>
                    <p className='w-[120px] text- text-base font-semibold text-slate-700 dark:text-gray-200'>
                      পেন্ডিং
                    </p>
                    <p className='w-[120px] text- text-base font-semibold text-slate-700 dark:text-gray-200'>
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
            <div className='w-full bg-white shadow p-3 border-l-8 border-green-500 rounded-lg'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                পেমেন্ট পরিশোধের পদ্ধতি
              </h1>
              <Image
                src={bKash}
                width={60}
                height={60}
                alt='bkash payment'
                className='my-2 border-4 rounded-2xl border-yellow-500'
              />
              <h1 className='text-lg font-semibold text-slate-700 dark:text-gray-200'>
                ৩০০০ টাকা পে করা হয়েছে।
              </h1>
            </div>
            {/* order card  */}
            <div className='w-full bg-white shadow p-3 border-l-8 border-green-500 rounded-lg'>
              <h1 className='text-lg font-semibold text-slate-500 dark:text-gray-200'>
                কেক হাতে পাবার পর পিন কোডটি দিয়ে নিশ্চিত করুন
              </h1>
              <form className='mt-5'>
                <div className='relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]'>
                  <div className='flex-[1_0_0%]'>
                    <input
                      type='number'
                      name='hs-search-article-1'
                      id='hs-search-article-1'
                      className='py-2.5 px-4 block w-full border-transparent rounded-lg outline-none focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600'
                      placeholder='এখানে কোডটি লিখুন'
                    />
                  </div>
                  <div className='flex-[0_0_auto]'>
                    <a
                      className='w-fit h-[46px] px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                      href='#'
                    >
                      নিশ্চিত করুন
                    </a>
                  </div>
                </div>
              </form>
            </div>
            {/* order card  */}
            <div className='w-full bg-white shadow p-3 border-l-8 border-green-500 rounded-lg'>
              <button
                type='button'
                className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
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
