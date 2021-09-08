import Col from "./Col";
import DeleteButton from "../ActionButtons/DeleteButton";
import EditButton from "./../ActionButtons/EditButton";
import ViewButton from "../ActionButtons/ViewButton";

const Tbody = ({ data, column, setDeleteId, view = true, edit = true }) => {
  // map an array of objects to an array of trs

  const action = (id) => {
    return (
      <div className="flex space-x-1.5 justify-start items-center">
        {view && <ViewButton id={id} />}
        {edit && <EditButton id={id} />}
        {setDeleteId && (
          <DeleteButton
            handleDelete={() => {
              setDeleteId(id);
            }}
          />
        )}
      </div>
    );
  };

  return (
    <tbody>
      {data ? (
        data?.map((estate, index) => (
          <tr className="border-b border-gray-500" key={index}>
            {column?.map((item, index) => (
              <Col children={item(estate)} key={index} />
            ))}
            <Col children={action(estate.id)} />
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
