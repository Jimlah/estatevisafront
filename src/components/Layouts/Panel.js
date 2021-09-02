const Panel = (props) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center px-5 sm:px-10">
      <div className="bg-gray-100 dark:bg-gray-900 px-5 inline-block rounded-lg py-10">
        {props.children}
      </div>
    </div>
  );
};

export default Panel;
