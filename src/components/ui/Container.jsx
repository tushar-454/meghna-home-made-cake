const Container = ({ children }) => {
  return (
    <div className='w-full px-4 lg:w-11/12 xl:max-w-screen-xl mx-auto'>
      {children}
    </div>
  );
};

export default Container;
