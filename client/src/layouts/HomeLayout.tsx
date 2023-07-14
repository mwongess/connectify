import SideNav from "../components/nav/SideNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="bg-[#e5e7eb]">
      <div className="flex border">
        <div className="w-[20%] p-3 ">
          <SideNav />
        </div>
        <div className="w-[80%] p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
