const Title = ({ children }) => {
  return (
    <div className='py-5'>
      <h1 className='text-center text-2xl font-black underline underline-offset-[12px] sm:text-4xl'>
        {children}
      </h1>
    </div>
  );
};

export default Title;
