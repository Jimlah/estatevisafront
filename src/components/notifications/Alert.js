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
  var bgStyle, borderStyle;
  if (status === "success") {
    type = Success();
    bgStyle = "bg-green-200";
    borderStyle = "border-green-500";
  } else if (status === "warning") {
    type = Warning();
    bgStyle = "bg-yellow-200";
    borderStyle = "border-yellow-500";
  } else if (status === "info") {
    type = Info();
    bgStyle = "bg-blue-200";
    borderStyle = "border-blue-500";
  } else {
    type = Error();
    bgStyle = "bg-red-200";
    borderStyle = "border-red-500";
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClick();
    }, 5000);

    return () => {
      clearTimeout(timeout);
      return;
    };
  }, [handleClick]);

  return (
    <div
      className={`absolute top-0 right-0 mr-5 mt-5 ${bgStyle} border ${borderStyle}  text-gray-900 rounded px-2 py-1 shadow-md font-medium tracking-wider text-xs`}
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
