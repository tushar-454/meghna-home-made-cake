import Image from 'next/image';
import logo from '../../assets/logo.jpg';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer className='my-20 rounded-lg bg-white dark:bg-gray-900 sm:my-10'>
      <Container>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a
            href='https://flowbite.com/'
            className='mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0'
          >
            <Image
              src={logo}
              height={50}
              width={50}
              className='rounded-full'
              alt='Logo'
            />
            <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
              মেঘনা হোম মেড কেক
            </span>
          </a>
          <ul className='mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0'>
            <li>
              <a href='#' className='me-4 hover:underline md:me-6'>
                আমাদের সম্পর্কে
              </a>
            </li>
            <li>
              <a href='#' className='me-4 hover:underline md:me-6'>
                নীতিমালা সমূহ
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                যোগাযোগ করুন
              </a>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          © ২০২৩{' '}
          <a href='https://flowbite.com/' className='hover:underline'>
            মেঘনা হোম মেড কেক
          </a>{' '}
          কর্তৃক সমস্ত অধিকার সংরক্ষিত.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
