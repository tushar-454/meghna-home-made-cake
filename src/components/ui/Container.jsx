const Container = ({ children }) => {
  return (
    <div className='mx-auto w-full px-4 lg:w-11/12 xl:max-w-screen-xl'>
      {children}
    </div>
  );
};

export default Container;
