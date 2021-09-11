const TableLoader = ({ isLoading, length }) => {
  return (
    <tfoot className={`${isLoading ? "" : "hidden"}`}>
      <tr>
        <td
          colSpan={length}
          className="px-4 py-2 font-bold text-center text-gray-500"
        >
          Data loading...
        </td>
      </tr>
    </tfoot>
  );
};

export default TableLoader;
