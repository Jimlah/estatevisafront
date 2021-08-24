import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./../components/Sidebar/Sidebar";
import AdminNavbar from "./../components/Navbars/AdminNavbar";
import CardTable from "../components/Cards/CardTable";

export default function Admin() {
  const [display, setDisplay] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(0);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (screenWidth >= 768) {
        setDisplay(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  return (
    <div className="fixed h-screen w-full bg-gray-200 overflow-hidden flex flex-col">
      <Sidebar changeState={handleDisplay} display={display} />
      <div className="grid grid-cols-6 relative h-full border">
        {display && <AdminNavbar />}
        <div className="h-full w-full col-span-full md:col-span-5 px-6 pt-4 overflow-y-auto pb-20">
          <CardTable />
        </div>
      </div>
    </div>
  );
}
