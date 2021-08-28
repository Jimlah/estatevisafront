import { AiOutlineSearch } from "react-icons/ai";
import useSearch from "../../hooks/useSearch";
import { useContext, useEffect } from "react";
import { SearchContext } from "./../../context/SearchContext";

const Search = () => {
  const { searchData: data, setResult } = useContext(SearchContext);
  const { search, searchData, handleSearch } = useSearch(data);

  useEffect(() => {
    setResult(searchData);

    // eslint-disable-next-line
  }, [searchData]);

  return (
    <div className="w-full flex flex-auto items-center justify-start border-b border-indigo-500 text-gray-500 space-x-0.5">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search"
        className="w-full focus:outline-none text-xs sm:text-sm capitalize bg-transparent"
        value={search}
        onChange={handleSearch}
      />
      <label htmlFor="search">
        <AiOutlineSearch />
      </label>
    </div>
  );
};

export default Search;
