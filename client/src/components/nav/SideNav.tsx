import { NavLink, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import {
  FaNewspaper,
  FaUsers,
  FaFacebookMessenger,
  FaBell,
  FaGlobe,
  FaUserAlt,
  FaRegSun,
  FaSignOutAlt,
} from "react-icons/fa";

const SideNav = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/auth.login");
  };
  return (
    <div className="fixed w-[18%] flex flex-col text-[#4e5d78] min-h-screen gap-1 bg-white rounded-[10px] p-3">
      <div className="mb-4 select-none">
        <img className="h-[3rem]" src="/logo1.png" alt="" />
      </div>
      <NavLink
        to="/home"
        className="flex items-center gap-2 hover:text-blue-500 hover:font-bold rounded-[10px] p-3 "
        end
      >
        <FaNewspaper /> Feed
      </NavLink>
      <NavLink
        to="community"
        className={
          "flex items-center gap-2 hover:text-blue-500 rounded-[10px] hover:font-bold  p-3"
        }
        end
      >
        <FaUsers />
        My Community
      </NavLink>
      <NavLink
        to="messages"
        className="flex items-center gap-2 hover:text-blue-500 hover:font-bold rounded-[10px]  p-3"
        end
      >
        <FaFacebookMessenger />
        Messages
      </NavLink>
      <NavLink
        to="notifications"
        className="flex items-center gap-2 hover:text-blue-500 hover:font-bold rounded-[10px] p-3"
        end
      >
        <FaBell />
        Notifications
      </NavLink>
      <NavLink
        to="explore"
        className="flex items-center gap-2 hover:text-blue-500 hover:font-bold rounded-[10px] p-3"
        end
      >
        <FaGlobe />
        Explore
      </NavLink>
      <NavLink
        to="/"
        className="flex items-center gap-2 hover:text-blue-500 hover:font-bold rounded-[10px] p-3"
        end
      >
        <FaUserAlt />
        Profile
      </NavLink>
      <NavLink
        to="/settings"
        className="flex items-center gap-2 hover:text-blue-500 hover:font-bold rounded-[10px] p-3"
      >
        <FaRegSun />
        Settings
      </NavLink>
      <button onClick = {logout} className="flex items-center gap-2 hover:text-blue-500 hover:font-bold rounded-[10px] p-3">
        
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
};

export default SideNav;
