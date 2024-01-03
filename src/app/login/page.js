import ButtonFill from '@/components/ui/ButtonFill';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

const AdminLogin = () => {
  return (
    <section className='min-h-screen bg-white dark:bg-gray-900'>
      <Container>
        <main className='w-full max-w-md mx-auto p-6 '>
          <div className='mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 relative'>
            <div className='p-4 sm:p-7'>
              <div className='text-center'>
                <Link href={'/'}>
                  <span className='absolute -right-0 -top-0 w-10 h-10 bg-slate-100 text-sun-900 rounded-tr-xl rounded-bl-xl flex justify-center items-center text-2xl cursor-pointer transition-all hover:bg-slate-200 active:bg-slate-300'>
                    <RxCross2 />
                  </span>
                </Link>

                <h1 className='block text-2xl font-bold text-gray-800 dark:text-white'>
                  লগইন
                </h1>
              </div>

              <div className='mt-5'>
                {/* <!-- Form --> */}
                <form>
                  <div className='grid gap-y-4'>
                    <Input
                      displayName='ইমেইল'
                      type='email'
                      id={'email'}
                      name='email'
                      placeholder={'example@gmail.com'}
                    />
                    <Input
                      displayName='পাসওয়ার্ড'
                      type='password'
                      id={'password'}
                      name='password'
                      placeholder={'s909j*(^&'}
                    />
                    <ButtonFill displayName={'লগইন করুন'} />
                  </div>
                </form>
                {/* <!-- End Form --> */}
              </div>
            </div>
          </div>
        </main>
      </Container>
    </section>
  );
};

export default AdminLogin;
