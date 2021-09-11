const Input = ({ type, name, label, bind, error }) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      <label
        htmlFor={name}
        className="text-xs font-bold text-gray-500 uppercase"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        {...bind}
        className="px-3 py-2 bg-transparent border border-gray-500 rounded-md focus:outline-none hover:border-blue-500 dark:text-white"
      />
      {error && (
        <div className="text-xs font-light tracking-wider text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
