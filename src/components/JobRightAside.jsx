import React from "react";
import AddIcon from "@mui/icons-material/Add";

const HomeRightAside = () => {
  return (
    <aside
      className=" bg-white p-2 rounded-md h-fit max-[991px]:hidden min-[991px]:col-span-4 xl:col-span-3"
      style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px" }}
    >
      <div className="flex items-center space-x-4 mb-3 ">
        <img
          width={50}
          className="object-contain me-2"
          src="./images/MyPhoto.jpg"
          alt=""
        />
        <div>
          <h4 className="text-sm font-medium">Ayman Zourob</h4>
          <p className="text-xs">
            Company • Technology, Information and Internet
          </p>
        </div>
        <button className="flex-shrink-0 text-blue-600 mt-2 rounded-full border border-blue-600 w-[30px] h-[30px] transition  hover:opacity-50">
          <AddIcon />
        </button>
      </div>
      <div className="flex items-center space-x-4 mb-3">
        <img
          width={50}
          className="object-contain me-2"
          src="./images/MyPhoto.jpg"
          alt=""
        />
        <div>
          <h4 className="text-sm font-medium">Ayman Zourob</h4>
          <p className="text-xs">
            Company • Technology, Information and Internet
          </p>
        </div>
        <button className="flex-shrink-0 text-blue-600 mt-2 rounded-full border border-blue-600 w-[30px] h-[30px] transition  hover:opacity-50">
          <AddIcon />
        </button>
      </div>
      <div className="flex items-center space-x-4 mb-3">
        <img
          width={50}
          className="object-contain me-2"
          src="./images/MyPhoto.jpg"
          alt=""
        />
        <div>
          <h4 className="text-sm font-medium">Ayman Zourob</h4>
          <p className="text-xs">
            Company • Technology, Information and Internet
          </p>
        </div>
        <button className="flex-shrink-0 text-blue-600 mt-2 rounded-full border border-blue-600 w-[30px] h-[30px] transition  hover:opacity-50">
          <AddIcon />
        </button>
      </div>
      <div className="flex items-center space-x-4 mb-3">
        <img
          width={50}
          className="object-contain me-2"
          src="./images/MyPhoto.jpg"
          alt=""
        />
        <div>
          <h4 className="text-sm font-medium">Ayman Zourob</h4>
          <p className="text-xs">
            Company • Technology, Information and Internet
          </p>
        </div>
        <button className="flex-shrink-0 text-blue-600 mt-2 rounded-full border border-blue-600 w-[30px] h-[30px] transition  hover:opacity-50">
          <AddIcon />
        </button>
      </div>
    </aside>
  );
};

export default HomeRightAside;
