const Input = ({ type, name, label, bind, error }) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label
        htmlFor={name}
        className="font-bold text-gray-500 uppercase text-xs"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        {...bind}
        className="focus:outline-none border border-gray-500 hover:border-blue-500 bg-transparent px-3 py-2 rounded-md"
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
