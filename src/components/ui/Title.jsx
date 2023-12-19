const Title = ({ children }) => {
  return (
    <div>
      <h1 className='text-4xl font-black text-center underline underline-offset-[12px]'>
        {children}
      </h1>
    </div>
  );
};

export default Title;
