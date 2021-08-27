import { createRef, useEffect, useRef, useState } from "react";
import useResize from "./../../hooks/useResize";

const title = ["Name", "email", "phone", "address"];
const TestTable = () => {
  const panelRef = useRef(null);
  const { width: panelWidth } = useResize(panelRef);

  const tableRef = useRef(null);
  const { width: TableWidth } = useResize(tableRef);

  const rowRef = useRef(null);
  const { width: RowWidth } = useResize(rowRef);

  const elementsRef = useRef(title.map(() => createRef()));

  useEffect(() => {
    let res = Math.abs(panelWidth - RowWidth);
    const total = elementsRef.current
      .reverse()
      .map((ref) => {
        const width = ref.current ? ref.current.offsetWidth : 0;
        return width;
      })
      .reduce((a, b) => a + b, 0);

    elementsRef.current.reverse().map((ref) => {
      const width = ref.current ? ref.current.offsetWidth : 0;

      if (total > res) {
        const res = total - width;
        console.log(ref.current.cellIndex);
        // ref.current.style.display = "none";
      }

      return { element: ref.current, width };
    });
  }, [panelWidth, RowWidth, ...elementsRef.current]);

  return (
    <div ref={panelRef} className="bg-white w-full">
      <table className="table-auto w-full" ref={tableRef}>
        <thead>
          <tr ref={rowRef}>
            {Array.from(title).map((item, index) => (
              <th ref={elementsRef.current[index]} key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abdullahi</td>
            <td>Abdullahi@gmail.com</td>
            <td>+254722222222</td>
            <td>
              <p>Lorem ipsum dolor sit, amet .</p>
            </td>
          </tr>
          <tr>
            <td>Abdullahi</td>
            <td>Abdullahi@gmail.com</td>
            <td>+254722222222</td>
            <td>
              <p>Lorem ipsum dolor sit, .</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
