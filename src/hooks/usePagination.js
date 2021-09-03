import { useEffect, useState } from "react";

const usePagination = (data) => {
  const [pageData, setPageData] = useState([]);
  const [chunkedData, setChunkedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 8;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < chunkedData?.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setPageData([]);
    var ceil = Math.ceil;

    /*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
    Object.defineProperty(Array.prototype, "chunk", {
      value: function (n) {
        if (this.length <= n) {
          return [this];
        }
        return Array(ceil(this.length / n))
          .fill()
          .map((_, i) => this.slice(i * n, i * n + n));
      },
      configurable: true,
    });

    setChunkedData(data?.chunk(itemPerPage));
  }, [data, itemPerPage, currentPage]);

  useEffect(() => {
    if (chunkedData?.length > 0) {
      setPageData(chunkedData[currentPage - 1]);
    }
  }, [chunkedData, currentPage]);

  return {
    pageData,
    currentPage,
    handleNext,
    handlePrev,
    setCurrentPage,
    setPageData,
  };
};

export default usePagination;
