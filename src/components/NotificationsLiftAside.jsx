import React from "react";
import { useSelector } from "react-redux";
const HomeLiftAside = () => {
  return (
    <aside
      className="p-3 bg-white rounded-md overflow-hidden max-md:col-span-12 md:col-span-3 min-[991px]:col-span-2 h-fit"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
    >
      <p className="font-medium text-gray-700">Manage your Notifications</p>
      <button className="mt-2 cursor-pointer text-blue-700">
        View Setting
      </button>
    </aside>
  );
};

export default HomeLiftAside;
