const ButtonFill = ({ displayName, ...rest }) => {
  return (
    <div className='my-5'>
      <button
        {...rest}
        className='inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-froly-500 px-4 py-3 text-sm font-semibold text-white hover:bg-froly-600 active:bg-froly-700 disabled:pointer-events-none disabled:bg-froly-200 disabled:text-froly-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      >
        {displayName}
      </button>
    </div>
  );
};

export default ButtonFill;
