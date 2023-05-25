import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/favicon.png";
import ActiveRoutes from "../ActiveRoutes/ActiveRoutes";
import { AuthProviderInfo } from "../../Provider/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthProviderInfo);

  return (
    <div className="w-full bg-gray-800 flex items-center text-slate-100 shadow-sm z-10 px-4 h-20 sticky top-0 left-0 right-0">
      {/*===============================
               header body
            ====================================*/}
      <div className="navbar gap-10  container mx-auto ">
        {/*===============================
               header logo
            ====================================*/}
        <div className=" navbar-start flex-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu bg-gray-800 text-slate-100 menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className=" normal-case text-2xl font-bold flex items-center"
          >
            <img src={logo} className="h-10 w-auto mr-3" alt={logo} />
            Food<span className="text-warning">Mania</span>
          </Link>
        </div>
        {/*===============================
              nav item
            ====================================*/}
        <div className="navbar-end hidden lg:flex ">
          <ul className=" flex items-center gap-6 px-1">
            <li>
              <ActiveRoutes to="/">Home</ActiveRoutes>
            </li>

            <li>
              <ActiveRoutes to="/blog">Blog</ActiveRoutes>
            </li>
          </ul>
        </div>
        {/*===============================
              Login button Or User Profile
            ====================================*/}
        <div className="flex-none">
          {user ? (
            <div>
              <label
                className="btn btn-ghost btn-circle relative
               "
              >
                <div
                  tabIndex={0}
                  className="relative inline-block group  btn-circle avatar"
                >
                  <img
                    className="w-10 rounded-full"
                    src={
                      user && user?.photoURL
                        ? user.photoURL
                        : "https://i.postimg.cc/xCCQ55pb/pngegg.png"
                    }
                  />
                  <ul
                    className="absolute right-0 px-4  z-10 w-48 py-4 text-start bg-gray-800 text-white
                   rounded-lg shadow-lg hidden group-hover:block"
                  >
                    <li className="py-2">
                      <a className="justify-between">{user.displayName}</a>
                    </li>
                    <li className="py-2">
                      <a onClick={logOutUser}>Logout</a>
                    </li>
                  </ul>
                </div>
              </label>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-gradient-to-r from-indigo-700 to-purple-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
