import Col from "./Col";

const Row = ({ children, head = false }) => {
  return (
    <tr>
      {Array.apply(null, Array(children.length)).map((x, i) => {
        return <Col key={i}>{children[i]}</Col>;
      })}
    </tr>
  );
};

export default Row;
