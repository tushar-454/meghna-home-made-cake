const Title = ({ children }) => {
  return (
    <div className='py-5'>
      <h1 className='text-2xl sm:text-4xl font-black text-center underline underline-offset-[12px]'>
        {children}
      </h1>
    </div>
  );
};

export default Title;
