import { Link, Outlet } from "react-router-dom";

const SettingsLayout = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-3 w-[20%] border-r pr-7 pt-7">
        <Link to="">Edit Profile</Link>
        <hr />
        <Link to="">Language</Link>
        <hr />
        <Link to="">Blocking</Link>
        <hr />
        <Link to="">Notifications</Link>
        <hr />
        <Link to="">Password</Link>
        <hr />
      </div>
      <div className="w-[80%] p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
