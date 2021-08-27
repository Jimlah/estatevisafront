const Cell = ({
  className,
  children,
  head = false,
  rowIndex,
  columnIndex,
  style,
  ...props
}) => {

  return (
    <>
      {head ? (
        <th className={className} style={style} {...props}>
          {children}
        </th>
      ) : (
        <td className={className} style={style} {...props}>
          {children}
        </td>
      )}
    </>
  );
};

export default Cell;
