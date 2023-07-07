import SideNav from "../components/nav/SideNav";
import TopNav from "../components/nav/TopNav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <div>
        <TopNav />
      </div>
      <div>
        <div>
          <SideNav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
