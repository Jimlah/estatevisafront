import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { TiTimes } from "react-icons/ti";
const ValidationError = ({ error }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(false);
  };

  useEffect(() => {
    if (error) {
      setDisplay(true);
    }
  }, [error]);

  return (
    display && (
      <div className="text-xs lowercase text-red-500 font-bold flex justify-between">
        <span>{error}</span>
        <button onClick={handleDisplay}>
          <IconContext.Provider value={{ className: "h-3 w-3" }}>
            <TiTimes />
          </IconContext.Provider>
        </button>
      </div>
    )
  );
};

export default ValidationError;
