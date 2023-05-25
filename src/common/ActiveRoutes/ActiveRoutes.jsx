import React from "react";
import { NavLink } from "react-router-dom";

const ActiveRoutes = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-white border-b-2 pb-2" : "text-gray-300"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoutes;
