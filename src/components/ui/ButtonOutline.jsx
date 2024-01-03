const ButtonOutline = ({ displayName = 'displayName' }) => {
  return (
    <div className='my-5 inline-block'>
      <button className='text-lg font-medium px-5 py-3 rounded bg-white outline-none text-froly-500 border-2 border-froly-900 transition-all hover:bg-froly-100 active:bg-froly-200'>
        {displayName}
      </button>
    </div>
  );
};

export default ButtonOutline;
