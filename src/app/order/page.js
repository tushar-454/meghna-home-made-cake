import Input from '@/components/shared/Input';
import TextArea from '@/components/shared/TextArea';
import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';

const Order = () => {
  return (
    <section>
      <Container>
        <Title>অর্ডার নিশ্চিত করুন</Title>
        <div className='min-h-screen flex flex-col sm:flex-row gap-10'>
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
            <div className='my-5 sm:my-10'>
              <h1 className='block text-lg font-semibold mb-2 dark:text-white'>
                পেমেন্ট করুন
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Order;
