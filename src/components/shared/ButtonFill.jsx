const ButtonFill = ({ children }) => {
  return (
    <div className='text-center my-10'>
      <button
        type='button'
        className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonFill;
