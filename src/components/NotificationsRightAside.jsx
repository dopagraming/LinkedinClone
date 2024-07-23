import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { users } from "../appInformations";
const HomeRightAside = () => {
  return (
    <aside
      className=" bg-white p-2 rounded-md h-fit max-[991px]:hidden min-[991px]:col-span-4 xl:col-span-3 overflow-y-auto"
      style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px" }}
    >
      {users?.map((user, index) => (
        <div className="flex justify-between items-center space-x-4 mb-3 ">
          <div className="flex items-center cursor-pointer">
            <img
              width={50}
              className="object-cover me-2 rounded-full h-[40px] w-[40px]"
              src={user.imgSrc}
              alt=""
            />
            <div>
              <h4 className="text-sm font-medium">{user.userName}</h4>
              <p className="text-xs">{user.userDis}</p>
            </div>
          </div>
          <button className="flex-shrink-0 text-blue-600 mt-2 rounded-full border border-blue-600 w-[30px] h-[30px] transition  hover:opacity-50">
            <AddIcon />
          </button>
        </div>
      ))}
    </aside>
  );
};

export default HomeRightAside;
