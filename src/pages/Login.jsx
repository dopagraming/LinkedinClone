import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MonitorIcon from "@mui/icons-material/Monitor";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ExtensionIcon from "@mui/icons-material/Extension";
import GridViewIcon from "@mui/icons-material/GridView";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signAPI } from "../redux/actions/index";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  return (
    <div style={{ height: "calc(100vh - 80px)" }}>
      <header>
        <nav className="flex justify-between flex-wrap md:flex-nowrap">
          <Link to="/" className="order-1">
            <img
              className="hidden sm:hidden md:block"
              width={120}
              src="./images/login-logo.svg"
              alt=""
            />
            <img
              className="block sm:block md:hidden"
              src="./images/linkedin-logo.png"
              alt=""
            />
          </Link>
          <ul className="flex items-center ms-auto mt-4 md:mt-0 order-3 w-full md:w-auto justify-center overflow-x-auto">
            <li className="text-sm px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
              <Link>
                <NewspaperIcon />
                <span className="block">Articles</span>
              </Link>
            </li>
            <li className="text-sm px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
              <Link>
                <PeopleOutlineIcon />
                <span className="block">People</span>
              </Link>
            </li>
            <li className="text-sm px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
              <Link>
                <GridViewIcon />
                <span className="block">Learning</span>
              </Link>
            </li>
            <li className="text-sm px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
              <Link>
                <WorkOutlineIcon />
                <span className="block">Jobs</span>
              </Link>
            </li>
            <li className="text-sm px-3 text-center text-gray-600 dark:text-slate-50 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
              <Link>
                <ExtensionIcon />
                <span className="block">Games</span>
              </Link>
            </li>
            <li className="text-sm border-x-2 px-3 text-center dark:text-slate-50 text-gray-600 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300">
              <Link>
                <MonitorIcon />
                <span className="block">Get the app</span>
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-end order-2 md:order-3">
            <button
              type="button"
              className="inline-block mx-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 transition hover:border-neutral-800  hover:text-gray-800	 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-white dark:hover:text-slate-300 "
              data-twe-ripple-init
            >
              Join now
            </button>
            <button
              type="button"
              className="inline-block rounded-full border-2 border-blue-700 text-blue-700	px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-blue-900 hover:bg-primary hover:text-blue-800	 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 motion-reduce:transition-none dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
              data-twe-ripple-init
            >
              Sign in
            </button>
          </div>
        </nav>
      </header>
      <main className="flex justify-around items-center mt-7">
        <div className="flex flex-col items-center lg:items-start">
          {user && navigate("/home")}
          <h1 className="font-light text-5xl mb-6 text-center lg:text-start">
            Welcome to your professional community
          </h1>

          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(signAPI());
            }}
            type="submit"
            className="flex text-gra7-800 border border-gray-700 rounded-full transition hover:bg-blue-600 hover:border-blue-600 hover:text-white font-medium  px-5 py-2.5 "
          >
            <img src="../images/google.svg" className="me-2" alt="" />
            Sign in with Google
          </button>
        </div>
        <img
          className="hidden lg:block"
          width={500}
          src="./images/login-hero.svg"
          alt=""
        />
      </main>
    </div>
  );
};

export default Login;
