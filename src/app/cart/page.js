import Container from '@/components/ui/Container';
import Title from '@/components/ui/Title';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillDelete } from 'react-icons/ai';
const carts = [{}, {}, {}, {}, {}, {}];
const Cart = () => {
  return (
    <section>
      <Container>
        <Title>আমার কার্ট</Title>
        <div className='my-10 flex min-h-screen flex-col'>
          <div className='-m-1.5 overflow-x-auto'>
            <div className='inline-block min-w-full p-1.5 align-middle'>
              <div className='overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='p-1 text-start text-xl font-bold uppercase text-slate-800'
                      >
                        নং
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start text-xl font-bold uppercase text-slate-800'
                      >
                        ছবি
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start text-xl font-bold uppercase text-slate-800'
                      >
                        নাম
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start text-xl font-bold uppercase text-slate-800'
                      >
                        ফ্লেভার
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start text-xl font-bold uppercase text-slate-800'
                      >
                        পরিমান <sup>(পাউন্ড)</sup>
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start text-xl font-bold uppercase text-slate-800'
                      >
                        টাকা
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-end text-xl font-bold uppercase text-slate-800'
                      >
                        মুছুন
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    {carts.map((cart, index) => (
                      <tr key={index}>
                        <td className='rounded-lg p-1'>১</td>
                        <td className='rounded-lg px-6 py-4'>
                          <Image
                            src={'https://cutt.ly/EwDynYJZ'}
                            width={70}
                            height={70}
                            alt='cartCakeImg'
                            className='aspect-square rounded-lg object-cover'
                          />
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-lg font-semibold text-gray-500 dark:text-gray-200'>
                          স্পেনিস চকলেট স্কু কেক
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-lg font-semibold text-gray-500 dark:text-gray-200'>
                          চকলেট
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-lg font-semibold text-gray-500 dark:text-gray-200'>
                          ২
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-lg font-semibold text-gray-500 dark:text-gray-200'>
                          ৬০০
                        </td>
                        <td className='grid h-24 content-center justify-end whitespace-nowrap px-6 py-4 text-end font-medium'>
                          <AiFillDelete className='cursor-pointer text-3xl text-[#B3331c]' />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        colSpan='5'
                        className='whitespace-nowrap px-6 py-4 text-xl font-semibold text-slate-600 dark:text-slate-200'
                      >
                        📍 আপনি সর্বমোট ৬ টি কেক কার্ট এ যোগ করেছেন, যার মোট
                        মূল্য ---------------
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-xl font-semibold text-slate-600 dark:text-slate-200'>
                        ৩২০০
                      </td>
                      <td colSpan='5' className='flex justify-end px-6 py-4'>
                        <Link href={'/order'}>
                          <button
                            type='button'
                            className='inline-flex items-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-red-500 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                          >
                            পরবর্তী ধাপে যান
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
