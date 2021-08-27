import Cell from "./Cell";
const Col = ({ children, head = false }) => {
  const thead = "text-sm font-bold tracking-wide text-gray-500 uppercase";
  const tbody = "text-xs font-medium dark:text-gray-200 capitalize";

  return (
    <>
      <Cell
        className={`px-6 py-3 text-left ${head ? thead : tbody}`}
        children={children}
        head={head}
      />
    </>
  );
};

export default Col;
