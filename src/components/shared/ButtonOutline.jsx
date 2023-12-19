const ButtonOutline = ({ children }) => {
  return (
    <div className='text-center my-10'>
      <button
        type='button'
        className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-yellow-500 text-yellow-500 hover:border-yellow-400 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonOutline;
