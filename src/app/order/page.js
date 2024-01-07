import bKash from '@/assets/bkash_payment_logo.webp';
import cod from '@/assets/cash-on-delivery.webp';
import nagad from '@/assets/nagad-payment-banner.webp';
import TextArea from '@/components/shared/TextArea';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import Title from '@/components/ui/Title';
import Image from 'next/image';
const orderList = [{}, {}, {}, {}, {}];
const Order = () => {
  return (
    <section>
      <Container>
        <Title>অর্ডার নিশ্চিত করুন</Title>
        <div className='flex min-h-screen flex-col gap-10 sm:flex-row'>
          <div className='w-full sm:w-2/3'>
            <form className='my-5 sm:my-10'>
              <Input
                displayName={'আপনার নাম'}
                id={'name'}
                type='text'
                placeholder='শেরে বাংলা এ কে ফজলুল হক'
              />
              <Input
                displayName={'আপনার মোবাইল নাম্বার'}
                id={'number'}
                type='tel'
                placeholder='+8801800000000'
              />
              <Input
                displayName={'আপনার ঠিকানা'}
                id={'address'}
                type='text'
                placeholder='উপজেলা-ইউনিয়ন-গ্রাম-বাড়ী'
              />
              <Input
                displayName={'কেক সরবরাহ সময়'}
                id={'deliveryTime'}
                type='datetime-local'
                placeholder='উপজেলা-ইউনিয়ন-গ্রাম-বাড়ী'
              />
              <Input
                displayName={'কেক এর উপর যা লিখতে হবে'}
                id={'toWrite'}
                type='text'
                placeholder='শুভ জন্মদিন তাহসিন'
                isRequired={false}
              />
              <TextArea
                displayName={'আপনার নিজস্ব কোনো নির্দেশনা থাকলে বলুন'}
                id={'direction'}
                rows='5'
                placeholder='প্যাকেটটিকে সুন্দর করে ডেকোরেশন করে দিবেন।'
                isRequired={false}
              />
            </form>
          </div>
          <div className='w-full sm:w-1/3'>
            <div className='mt-5 sm:mt-10'>
              <h1 className='mb-2 block text-lg font-semibold dark:text-white'>
                পেমেন্ট করুন
              </h1>
            </div>
            <div className='divide-y-2'>
              {orderList.map((item, index) => (
                <p
                  key={index}
                  className='flex items-center justify-between py-2'
                >
                  <span>{index + 1}। ভ্যানিলা চকলেট ফ্লেভার</span>
                  <span>600</span>
                </p>
              ))}
              <p className='flex items-center justify-between py-2 font-semibold'>
                <span>ডেলিভারি চার্জ</span>
                <span>30</span>
              </p>
              <p className='flex items-center justify-between py-2 font-semibold'>
                <span>মোট টাকা</span>
                <span>3600</span>
              </p>
              <p className='flex items-center justify-between py-2 font-semibold'>
                <span>ডিস্কাউন্ট</span>
                <span>150</span>
              </p>
              <p className='flex items-center justify-between py-2 font-semibold'>
                <span>সর্বমোট</span>
                <span>3000</span>
              </p>
            </div>
            <div className='mt-5 sm:mt-10'>
              <h1 className='mb-2 block text-lg font-semibold dark:text-white'>
                পেমেন্ট পরিশোধের পদ্ধতি নির্বাচন করুন
              </h1>
            </div>
            <div className='flex gap-5'>
              <Image
                src={bKash}
                width={60}
                height={60}
                alt='bkash payment'
                className='rounded-2xl border-4 border-yellow-500'
              />
              <Image
                src={nagad}
                width={60}
                height={60}
                alt='bkash payment'
                className='rounded-2xl border-4 border-yellow-500'
              />
              <Image
                src={cod}
                width={60}
                height={60}
                alt='bkash payment'
                className='rounded-2xl border-4 border-yellow-500'
              />
            </div>
            <div className='my-10'>
              <button
                type='button'
                className='inline-flex select-none items-center gap-x-2 rounded-lg border border-yellow-500 px-4 py-3 text-sm font-semibold text-yellow-500 hover:border-yellow-400 hover:text-yellow-400 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              >
                নিশ্চিত করতে ট্যাপ করে ধরুন
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Order;
