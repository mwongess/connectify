import { FaBan, FaGreaterThan, FaLanguage, FaRegBell, FaUserAlt, FaUserShield } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const SettingsLayout = () => {
  return (
    <div className="flex bg-white rounded-[5px] px-3">
      <div className="flex flex-col gap-3 w-[20%] border-r pr-7 pt-7 min-h-[100vh]">
        <Link  className="flex items-center gap-2" to=""><FaUserAlt/> Edit Profile <FaGreaterThan/></Link>
        <hr />
        <Link  className="flex items-center gap-2" to="language"><FaLanguage/> Language</Link>
        <hr />
        <Link  className="flex items-center gap-2" to="blocking"><FaBan/> Blocking</Link>
        <hr />
        <Link  className="flex items-center gap-2" to="notifications"><FaRegBell/> Notifications</Link>
        <hr />
        <Link className="flex items-center gap-2" to="password"><FaUserShield/> Password</Link>
        <hr />
      </div>
      <div className="w-[80%] p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
