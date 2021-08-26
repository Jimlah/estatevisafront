import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
const ChangMode = () => {
  const [dark, setDark] = useState(false);

  const handleDark = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      setDark(true);
    }
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("dark", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("dark", "false");
    }

    return () => {
      localStorage.removeItem("dark");
    };
  }, [dark]);

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleDark}>{!dark ? <FiSun /> : <BiMoon />}</button>
    </div>
  );
};

export default ChangMode;
