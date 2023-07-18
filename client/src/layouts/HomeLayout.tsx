import SideNav from "../components/nav/SideNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="bg-[#e5e7eb] min-h-screen">
      <div className="flex border">
        <div className="hidden sm:block w-[20%] p-3 ">
          <SideNav />
        </div>
        <div className="w-full sm:w-[80%] sm:pr-3 sm:pt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
