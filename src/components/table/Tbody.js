import Col from "./Col";

const Tbody = ({ data, column }) => {
  // map an array of objects to an array of trs

  return (
    <tbody>
      {data ? (
        data?.map((estate, index) => (
          <tr className="border-b border-gray-500" key={index}>
            {column?.map((item, index) => (
              <Col children={item(estate)} key={index} />
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td className="" rowSpan="full text-center font-bold text-sm">
            No data Available yet
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Tbody;
