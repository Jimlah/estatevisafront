import { useState, useEffect } from "react";

const useSearch = (data) => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(data);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const results = data?.filter((item) => {
      const result = Object.values(item).some((value) => {
        value = String(value);
        return value.toLowerCase().includes(search?.toLowerCase());
      });
      return result;
    });
    setSearchData(results);
  }, [search, data]);

  return { search, searchData, handleSearch };
};

export default useSearch;
