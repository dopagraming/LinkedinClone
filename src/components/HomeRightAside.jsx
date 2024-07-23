import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

const HomeRightAside = ({ user, index }) => {
  const [follow, setFollow] = useState(false);
  return (
    <div
      className="flex justify-between items-center space-x-4 mb-3 "
      key={index}
    >
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
      <button
        onClick={() => setFollow(!follow)}
        className="flex-shrink-0 text-blue-600 mt-2 rounded-full border border-blue-600 w-[30px] h-[30px] transition  hover:opacity-50"
      >
        {follow ? <CheckIcon /> : <AddIcon />}
      </button>
    </div>
  );
};

export default HomeRightAside;
