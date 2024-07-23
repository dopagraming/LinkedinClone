import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HeaderMeList = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const signOut = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <li
      onClick={() => {
        document.querySelector(".header-list").classList.toggle("hidden");
      }}
      className="text-xs relative cursor-pointer flex flex-col items-center text-sm border-x-2 px-3 text-center dark:text-slate-50 text-gray-600 transition ease-in-out hover:text-gray-900 dark:hover:text-slate-300"
    >
      <img width={35} src={user?.photoURL} alt="" className="rounded-full" />
      <div className="">
        Me <KeyboardArrowDownIcon />
      </div>
      <div
        className="header-list hidden absolute bg-white right-0 p-2 z-50 bg-zinc-100 w-[300px]"
        style={{
          top: "calc(100% + 10px)",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
        }}
      >
        <div className="border-b-[1px] border-slate-500">
          <div className="flex items-center">
            <img
              width={60}
              src="./images/myPhoto.jpg"
              alt=""
              className="rounded-full object-contain"
            />
            <div className="">
              <h3 className="text-start font-bold">ABDELRAHMAN ZOUROB</h3>
              <p className="text-start">Front End Developer</p>
            </div>
          </div>
          <button
            type="button"
            className="my-2 w-full inline-block rounded-full border-2 border-blue-700 text-blue-700 px-1 pb-[6px] pt-1 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-blue-900 hover:bg-primary hover:text-blue-800	 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 motion-reduce:transition-none dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
            data-twe-ripple-init
          >
            View Profile
          </button>
        </div>

        <ul className="text-start mt-2">
          <li className="text-[15px] font-bold text-slate-900">Account</li>
          <li className="ps-2 mb-[3px] text-slate-500">Setting & Privacy</li>
          <li className="ps-2 mb-[3px] text-slate-500">Help</li>
          <li className="ps-2 mb-[3px] text-slate-500 pb-2 border-b-[1px] border-slate-500">
            Language
          </li>
          <li className="mb-[3px] text-[15px] font-bold text-slate-800">
            Mange
          </li>
          <li className="ps-2 mb-[3px] text-slate-500">Post & Activity</li>
          <li className="ps-2 mb-[3px] text-slate-500">Job Posting Account</li>
          <li
            className="text-black text-[15px] font-bold pt-2 pb-2 border-t-[1px] border-slate-500"
            onClick={() => signOut()}
          >
            Sign out
          </li>
        </ul>
      </div>
    </li>
  );
};

export default HeaderMeList;
