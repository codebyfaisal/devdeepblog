import React from "react";
import { NavLink } from "react-router"; // Corrected import
import { CardStackPlusIcon, DashboardIcon, ListBulletIcon, UpdateIcon } from "@radix-ui/react-icons";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `w-max py-1 px-3 rounded-md flex items-center gap-2 ${
      isActive ? "bg-black text-white" : "hover:bg-gray-200"
    }`;

  return (
    <div className="flex flex-col gap-2">
      <NavLink to="/dashboard" className={linkClasses}>
        <DashboardIcon /> Dashboard
      </NavLink>
      <NavLink to="/blogs" className={linkClasses}>
        <ListBulletIcon /> Blogs
      </NavLink>
      <NavLink to="/create" className={linkClasses}>
        <CardStackPlusIcon /> Create
      </NavLink>
      <NavLink to="/update" className={linkClasses}>
        <UpdateIcon /> Update
      </NavLink>
    </div>
  );
};

export default Sidebar;
