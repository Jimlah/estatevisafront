import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { TiTimes } from "react-icons/ti";

const alertTypes = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
};

const Alert = ({ error, type }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(false);
  };

  useEffect(() => {
    if (error) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [error]);

  return (
    display && (
      <div
        className={`w-full ${alertTypes[type]} text-xs lowercase text-white px-3 py-2  font-bold flex justify-between rounded-lg shadow-md`}
      >
        <span className="uppercase">{error}</span>
        <button onClick={handleDisplay}>
          <IconContext.Provider value={{ className: "h-3 w-3" }}>
            <TiTimes />
          </IconContext.Provider>
        </button>
      </div>
    )
  );
};

export default Alert;
