import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

const SideNav = () => {
  return (
    <div className="flex flex-col text-[#7a8699] min-h-screen gap-1">
      <NavLink
        to="/home"
        className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3 "
        end
      >
        Feed
      </NavLink>
      <NavLink
        to="community"
        className={"hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3"}
        end
      >
        My Community
      </NavLink>
      <NavLink
        to="messages"
        className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3"
        end
      >
        Messages
      </NavLink>
      <NavLink
        to="notifications"
        className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3"
        end
      >
        Notifications
      </NavLink>
      <NavLink
        to="explore"
        className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3"
        end
      >
        Explore
      </NavLink>
      <NavLink
        to="/"
        className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3"
        end
      >
        Profile
      </NavLink>
      <NavLink
        to="/settings"
        className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3"
        end
      >
        Settings
      </NavLink>
      <NavLink
        to="/auth/login"
        className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3"
        end
      >
        Logout
      </NavLink>
    </div>
  );
};

export default SideNav;
