import { NavLink, Outlet } from "react-router-dom";

const SettingsLayout = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-3 w-[20%] border-r pr-7 pt-7">
        <NavLink to="">Edit Profile</NavLink>
        <hr />
        <NavLink to="">Language</NavLink>
        <hr />
        <NavLink to="">Blocking</NavLink>
        <hr />
        <NavLink to="">Notifications</NavLink>
        <hr />
        <NavLink to="">Password</NavLink>
        <hr />
      </div>
      <div className="w-[80%] p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
