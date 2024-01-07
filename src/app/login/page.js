import ButtonFill from '@/components/ui/ButtonFill';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

const AdminLogin = () => {
  return (
    <section className='min-h-screen bg-white dark:bg-gray-900'>
      <Container>
        <main className='mx-auto w-full max-w-md p-6 '>
          <div className='relative mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800'>
            <div className='p-4 sm:p-7'>
              <div className='text-center'>
                <Link href={'/'}>
                  <span className='text-sun-900 absolute -right-0 -top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-bl-xl rounded-tr-xl bg-slate-100 text-2xl transition-all hover:bg-slate-200 active:bg-slate-300'>
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
