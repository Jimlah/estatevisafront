const PageLoader = ({ isLoading }) => {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center w-full h-screen bg-gray-900 ${
        isLoading ? "" : "hidden"
      }`}
    >
      <div className="z-50 flex items-center justify-center p-5 space-x-2 bg-white rounded-full">
        <div className="w-4 h-4 p-2 bg-blue-600 rounded-full animate-bounce blue-circle"></div>
        <div className="w-4 h-4 p-2 bg-green-600 rounded-full animate-bounce green-circle"></div>
        <div className="w-4 h-4 p-2 bg-red-600 rounded-full animate-bounce red-circle"></div>
      </div>
    </div>
  );
};

export default PageLoader;
