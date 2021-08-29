import Col from "./Col";

const Thead = ({ headings }) => {
  return (
    <thead>
      <tr className="border-b font-bold border-gray-500 bg-gray-200 dark:bg-gray-800 sticky top-0 text-gray-900 dark:text-gray-100">
        {headings.map((heading, index) => (
          <Col key={index} children={heading} head="true" />
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
