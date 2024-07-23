import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { users } from "../appInformations";
const MyNetworkMiddelSection = () => {
  return (
    <section className="max-md:col-span-12 md:col-span-9 min-[991px]:col-span-9">
      <div
        className="bg-white p-2 rounded-md"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px" }}
      >
        <p className="mt-1 mb-2">People you may know in Greater Iskenderun</p>
        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-2">
          {users?.map((user, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md"
              style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px" }}
            >
              <div className=" h-[15%] relative bg-slate-900 h-[90px] w-full  mb-[45px]">
                <img
                  src={user.imgSrc}
                  alt="userImg"
                  className="absolute top-[50%] left-[8px] object-cover rounded-full h-[80px] w-[80px] border-2 border-white"
                />
              </div>
              <div className="ps-3 pb-4">
                <h3 className="font-semibold	">{user.userName}</h3>
                <p className="text-sm" style={{ color: "rgb(0 0 0 / 60%)" }}>
                  Front End Developer
                </p>
                <p className="text-xs">{user.userDis}</p>
              </div>
              <div className="w-[90%] flex text-blue-600 items-center justify-center border border-blue-600 rounded-full w-fit mx-auto mb-4 px-3 py-1 cursor-pointer transition hover:text-blue-400 hover:border-blue-400">
                <AddIcon className="me-1" />
                <p>Connect</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyNetworkMiddelSection;
