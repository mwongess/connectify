import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="flex flex-col text-[#7a8699] min-h-screen ">
      <NavLink to="" className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3">Feed</NavLink>
      <NavLink to="" className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3">My Community</NavLink>
      <NavLink to="" className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3">Messages</NavLink>
      <NavLink to="" className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3">Notifications</NavLink>
      <NavLink to="" className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3">Explore</NavLink>
      <NavLink to="profile" className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3">Profile</NavLink>
      <NavLink to="settings" className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3">Settings</NavLink>
      <NavLink to="" className="hover:bg-[#4e5d78] rounded-[10px] hover:text-white p-3">Logout</NavLink>
    </div>
  );
};

export default SideNav;
