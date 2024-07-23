import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom";
import HeaderMeList from "./HeaderMeList";
const HeaderBar = () => {
  return (
    <ul className="flex items-center ms-auto mt-4 md:mt-0 order-3 w-full md:w-auto justify-center">
      <li className="text-xs px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
        <Link to="/home">
          <HomeIcon className="text-xl" />
          <span className="block max-sm:hidden">Home</span>
        </Link>
      </li>
      <li className="text-xs px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
        <Link to="/myNetwork">
          <PeopleIcon className="text-xl" />
          <span className="block max-sm:hidden">My Network</span>
        </Link>
      </li>
      <li className="text-xs px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
        <Link to="/job">
          <WorkIcon className="text-xl" />
          <span className="block max-sm:hidden">Job</span>
        </Link>
      </li>
      <li className="text-xs px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
        <Link to="/messages">
          <MessageIcon className="text-xl" />
          <span className="block max-sm:hidden">Messages</span>
        </Link>
      </li>
      <li className="text-xs px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
        <Link to="/notifications">
          <NotificationsIcon className="text-xl" />
          <span className="block max-sm:hidden">Notifications</span>
        </Link>
      </li>
      <HeaderMeList />
    </ul>
  );
};

export default HeaderBar;
