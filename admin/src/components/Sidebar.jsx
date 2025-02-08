import { NavLink } from "react-router";
import { LayoutDashboard, ListIcon, MessageCircleCode, MessageCircleIcon, SquarePenIcon } from "lucide-react";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `w-max py-1 px-3 rounded-md flex items-center gap-2 ${
      isActive ? "bg-black text-white" : "hover:bg-gray-200"
    }`;

  return (
    <div className="flex flex-col gap-2 font-semibold">
      <NavLink to="/dashboard" className={linkClasses}>
        <LayoutDashboard width={20} height={20} /> Dashboard
      </NavLink>
      <NavLink to="/blogs" className={linkClasses} end>
        <ListIcon width={20} height={20} /> Blogs
      </NavLink>
      <NavLink to="/blogs/create" className={linkClasses} end>
        <SquarePenIcon width={20} height={20} /> Create
      </NavLink>
      <NavLink to="/blogs/comments" className={linkClasses}>
        <MessageCircleCode width={20} height={20} /> Comments
      </NavLink>
    </div>
  );
};

export default Sidebar;
