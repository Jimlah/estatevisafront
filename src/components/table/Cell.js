const Cell = ({
  className,
  children,
  rowIndex,
  columnIndex,
  style,
  ...props
}) => {
  return (
    <td className={className} style={style} {...props}>
      {children}
    </td>
  );
};

export default Cell;
