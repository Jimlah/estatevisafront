import { MdDashboard } from "react-icons/md";
import NavItem from "./NavItem";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <nav className="h-full bg-white px-5 flex flex-col items-start justify-start space-y-8 py-2">
      <div className="flex items-center justify-center">
        <span class="font-bold italic text-3xl">EV</span>
        <span>EstateVisa</span>
      </div>
      <div className="flex items-start justify-between flex-col h-full">
        <div className="">
          <NavItem to="/dashboard" icon={<MdDashboard />} name="dashboard" />
          <NavItem to="/dashboard" icon={<MdDashboard />} name="dashboard" />
        </div>
        <NavItem to="/dashboard/logout" icon={<BiLogOut />} name="logout" />
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-yellow-500 w-full rounded-md p-2">
        Hey
      </div>
    </nav>
  );
};

export default Sidebar;
