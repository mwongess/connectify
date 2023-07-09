import SideNav from "../components/nav/SideNav";
import TopNav from "../components/nav/TopNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <div className="p-3">
        <TopNav />
      </div>
      <div className="flex border">
        <div className="w-[20%] p-3 ">
          <SideNav />
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;