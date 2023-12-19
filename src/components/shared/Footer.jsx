import logo from '../../assets/logo.jpg';
import Container from '../ui/Container';

const Footer = () => {
  return (
    <footer class='bg-white rounded-lg dark:bg-gray-900 my-10'>
      <Container>
        <div class='sm:flex sm:items-center sm:justify-between'>
          <a
            href='https://flowbite.com/'
            class='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
          >
            <img src={logo} class='h-8' alt='Logo' />
            <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              মেঘনা হোম মেড কেক
            </span>
          </a>
          <ul class='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='#' class='hover:underline me-4 md:me-6'>
                আমাদের সম্পর্কে
              </a>
            </li>
            <li>
              <a href='#' class='hover:underline me-4 md:me-6'>
                নীতিমালা সমূহ
              </a>
            </li>
            <li>
              <a href='#' class='hover:underline'>
                যোগাযোগ করুন
              </a>
            </li>
          </ul>
        </div>
        <hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © ২০২৩{' '}
          <a href='https://flowbite.com/' class='hover:underline'>
            মেঘনা হোম মেড কেক
          </a>{' '}
          কর্তৃক সমস্ত অধিকার সংরক্ষিত.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
