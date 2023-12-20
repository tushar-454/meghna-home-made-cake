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
        <div className='flex flex-col min-h-screen my-10'>
          <div className='-m-1.5 overflow-x-auto'>
            <div className='p-1.5 min-w-full inline-block align-middle'>
              <div className='overflow-hidden'>
                <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='p-1 text-start font-bold text-xl text-slate-800 uppercase'
                      >
                        নং
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start font-bold text-xl text-slate-800 uppercase'
                      >
                        ছবি
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start font-bold text-xl text-slate-800 uppercase'
                      >
                        নাম
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start font-bold text-xl text-slate-800 uppercase'
                      >
                        ফ্লেভার
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start font-bold text-xl text-slate-800 uppercase'
                      >
                        পরিমান <sup>(পাউন্ড)</sup>
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-start font-bold text-xl text-slate-800 uppercase'
                      >
                        টাকা
                      </th>
                      <th
                        scope='col'
                        className='px-6 py-3 text-end font-bold text-xl text-slate-800 uppercase'
                      >
                        মুছুন
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    {carts.map((cart, index) => (
                      <tr key={index}>
                        <td className='p-1 rounded-lg'>১</td>
                        <td className='px-6 py-4 rounded-lg'>
                          <Image
                            src={'https://cutt.ly/EwDynYJZ'}
                            width={70}
                            height={70}
                            alt='cartCakeImg'
                            className='aspect-square object-cover rounded-lg'
                          />
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-500 dark:text-gray-200'>
                          স্পেনিস চকলেট স্কু কেক
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-500 dark:text-gray-200'>
                          চকলেট
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-500 dark:text-gray-200'>
                          ২
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-500 dark:text-gray-200'>
                          ৬০০
                        </td>
                        <td className='h-24 px-6 py-4 whitespace-nowrap text-end font-medium grid justify-end content-center'>
                          <AiFillDelete className='text-[#B3331c] text-3xl cursor-pointer' />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        colSpan='5'
                        className='px-6 py-4 whitespace-nowrap text-xl font-semibold text-slate-600 dark:text-slate-200'
                      >
                        📍 আপনি সর্বমোট ৬ টি কেক কার্ট এ যোগ করেছেন, যার মোট
                        মূল্য ---------------
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-xl font-semibold text-slate-600 dark:text-slate-200'>
                        ৩২০০
                      </td>
                      <td colSpan='5' className='px-6 py-4 flex justify-end'>
                        <Link href={'/order'}>
                          <button
                            type='button'
                            class='py-3 px-4 whitespace-nowrap inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
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
