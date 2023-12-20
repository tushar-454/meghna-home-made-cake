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
          <div className='flex justify-between items-center py-3'>
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
                  className='font-bold text-lg 
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
        <div className='block sm:hidden w-full fixed left-0 bottom-0'>
          <div className='w-full grid items-start h-10 bg-slate-200'>
            <div className='flex gap-1 justify-between items-center px-5 relative -top-8 transition-all'>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  className='w-16 h-16 border-8 bg-white border-white flex justify-center items-center rounded-full shadow-xl'
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
