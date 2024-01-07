const ButtonOutline = ({ displayName = 'displayName' }) => {
  return (
    <div className='my-5 inline-block'>
      <button className='rounded border-2 border-froly-900 bg-white px-5 py-3 text-lg font-medium text-froly-500 outline-none transition-all hover:bg-froly-100 active:bg-froly-200'>
        {displayName}
      </button>
    </div>
  );
};

export default ButtonOutline;
