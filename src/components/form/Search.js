import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="w-full flex flex-auto items-center justify-start border-b border-indigo-500 text-gray-500 space-x-0.5">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search"
        className="w-full focus:outline-none text-xs sm:text-sm capitalize bg-transparent"
      />
      <label htmlFor="search">
        <AiOutlineSearch />
      </label>
    </div>
  );
};

export default Search;
