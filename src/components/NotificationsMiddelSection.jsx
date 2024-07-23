import React from "react";
import { useSelector } from "react-redux";
import { notifications } from "../appInformations";
const HomeMiddelSection = () => {
  const loading = useSelector((state) => state.articleState.loading);
  return (
    <div className="max-md:col-span-12 md:col-span-9 min-[991px]:col-span-6 xl:col-span-7 relative">
      <div
        className="bg-white mt-2 rounded-md"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px" }}
      >
        {notifications?.map((not, index) => (
          <div className="flex items-center p-3 border-b border-b-text-gray-500">
            <img
              src={not.userImg}
              alt="userImg"
              className="me-3 w-[70px] h-[70px] object-contain rounded-full"
            />
            <p className="text-sm">
              {not.userName} posted : {not.dis}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMiddelSection;
