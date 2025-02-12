import { NavLink } from "react-router";
import {
  LayoutDashboard,
  ListIcon,
  MessageCircleCode,
  SquarePenIcon,
  Users2Icon,
} from "lucide-react";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `w-max py-1 px-3 rounded-md flex items-center gap-2 ${
      isActive ? "bg-black text-white" : "hover:bg-gray-200"
    }`;

  return (
    <div className="flex md:flex-col gap-2 font-semibold">
      <NavLink to="/dashboard" className={linkClasses}>
        <LayoutDashboard width={20} height={20} />
        <span className="hidden md:inline">Dashboard</span>
      </NavLink>
      <NavLink to="/blogs" className={linkClasses} end>
        <ListIcon width={20} height={20} />
        <span className="hidden md:inline">Blogs</span>
      </NavLink>
      <NavLink to="/blogs/create" className={linkClasses} end>
        <SquarePenIcon width={20} height={20} />
        <span className="hidden md:inline">Create</span>
      </NavLink>
      <NavLink to="/blogs/comments" className={linkClasses}>
        <MessageCircleCode width={20} height={20} />
        <span className="hidden md:inline">Comments</span>
      </NavLink>
      <NavLink to="/subscribers" className={linkClasses}>
        <Users2Icon width={20} height={20} />
        <span className="hidden md:inline">Subscribers</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
