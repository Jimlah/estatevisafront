const SubmitButton = ({ isLoading }) => {
  return (
    <div className="w-full">
      <button
        type="submit"
        className="text-center w-full border py-2 rounded-md font-bold bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white flex items-center justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="h-6 w-6 rounded-full border-2 border-b-0 border-blue-500 block animate-spin"></span>
        ) : (
          <span>Submit</span>
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
