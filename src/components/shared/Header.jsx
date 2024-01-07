import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';
import { TbLocationSearch } from 'react-icons/tb';

import logo from '@/assets/logo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';

const navItems = [
  {
    route: 'হোম',
    path: '/',
    icon: FaHome,
  },
  {
    route: 'কেক সমূহ',
    path: '/cakes',
    icon: GiShop,
  },
  {
    route: 'কার্ট',
    path: '/cart',
    icon: AiOutlineShoppingCart,
  },
  {
    route: 'অর্ডার ট্রেক করুন',
    path: '/track-order',
    icon: TbLocationSearch,
  },
];

const Header = () => {
  return (
    <header className='bg-slate-100 dark:bg-slate-900'>
      <Container>
        <div className='hidden sm:block'>
          <div className='flex items-center justify-between py-3'>
            <div>
              <Link href={'/'}>
                <Image
                  src={logo}
                  width={70}
                  height={70}
                  alt='logo'
                  className='rounded-full'
                />
              </Link>
            </div>
            <div className='flex gap-10 '>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  className='text-lg font-bold 
                text-slate-700 dark:text-slate-200'
                  href={item.path}
                >
                  {item.route}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* mobile device down menu like mobile  */}

        <div
          style={{ zIndex: '9999' }}
          className='fixed bottom-0 left-0 block w-full sm:hidden'
        >
          <div className='grid h-10 w-full items-start bg-slate-200'>
            <div className='relative -top-8 flex items-center justify-between gap-1 px-5 transition-all'>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  className='z-50 flex h-16 w-16 items-center justify-center rounded-full border-8 border-white bg-white shadow-xl'
                  href={item.path}
                >
                  {<item.icon className='text-3xl text-slate-900' />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
