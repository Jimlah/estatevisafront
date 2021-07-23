import { useState } from "react";

const MainDropdown = () => {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  };

  return (
    <div className="relative">
      <button onClick={toggle}>hello</button>
      {display && (
        <div className="absolute flex flex-col right-0 border rounded shadow">
          <a
            href=""
            className="px-4 py-2 font-normal text-sm whitespace-no-wrap"
          >
            hey boy
          </a>
          <a
            href=""
            className="px-4 py-2 font-normal text-sm whitespace-no-wrap"
          >
            hey
          </a>
          <a
            href=""
            className="px-4 py-2 font-normal text-sm whitespace-no-wrap"
          >
            hey
          </a>
        </div>
      )}
    </div>
  );
};

export default MainDropdown;
