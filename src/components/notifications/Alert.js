import { TiTimes } from "react-icons/ti";
import { CgDanger } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useEffect } from "react";

const Error = () => {
  return (
    <span>
      <IconContext.Provider value={{ className: "h-6 w-6 text-red-500 " }}>
        <CgDanger />
      </IconContext.Provider>
    </span>
  );
};

const Success = () => {
  return (
    <span>
      <IconContext.Provider value={{ className: "h-6 w-6 text-green-500 " }}>
        <CgDanger />
      </IconContext.Provider>
    </span>
  );
};

const Warning = () => {
  return (
    <span>
      <IconContext.Provider value={{ className: "h-6 w-6 text-yellow-500 " }}>
        <CgDanger />
      </IconContext.Provider>
    </span>
  );
};

const Info = () => {
  return (
    <span>
      <IconContext.Provider value={{ className: "h-6 w-6 text-blue-500 " }}>
        <CgDanger />
      </IconContext.Provider>
    </span>
  );
};

const Alert = ({ message, handleClick, status }) => {
  var type;
  var style;
  if (status === "success") {
    type = Success();
    style = "green";
  } else if (status === "warning") {
    type = Warning();
    style = "yellow";
  } else if (status === "info") {
    type = Info();
    style = "blue";
  } else {
    type = Error();
    style = "red";
  }

  useEffect(() => {
    setTimeout(() => {
      handleClick();
    }, 5000);

    return () => {};
  }, [handleClick]);

  return (
    <div
      className={`absolute top-0 right-0 mr-5 mt-5 bg-${style}-200 border border-${style}-500  text-gray-800 rounded px-2 py-1 shadow-md font-medium tracking-wider text-xs`}
    >
      <div className="flex items-center space-x-2">
        {type}
        <span>{message}</span>
        <button
          onClick={handleClick}
          className="focus:outline-none hover:text-gray-500"
        >
          <TiTimes />
        </button>
      </div>
    </div>
  );
};

export default Alert;
