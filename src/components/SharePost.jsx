import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MakePost from "./MakePost";

const SharePost = () => {
  const user = useSelector((state) => state.userState.user);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div
      className="bg-white p-2 rounded-md"
      style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px" }}
    >
      <div className="flex mb-5">
        <img
          src={user && user?.photoURL ? user.photoURL : "./images/MyPhoto.jpg"}
          alt=""
          className="rounded-full w-[40px] me-1"
        />
        <input
          type="search"
          placeholder="Start a post"
          className="border rounded-full ps-3 w-full focus:outline-none transition hover:bg-zinc-100 cursor-pointer"
          value=""
          disabled={true && open}
          onClick={() => {
            handleOpen();
          }}
        />
      </div>
      <div className="flex justify-around text-stone-700">
        <div
          className="flex items-center cursor-pointer transition hover:opacity-50"
          onClick={handleOpen}
        >
          <CropOriginalIcon className="me-2 text-blue-500" />
          <p>Media</p>
        </div>
        <div
          className="flex items-center cursor-pointer transition hover:opacity-50"
          onClick={handleOpen}
        >
          <CalendarMonthIcon className="me-2 text-orange-500 " />
          <p>Event</p>
        </div>
        <div
          className="flex items-center cursor-pointer transition hover:opacity-50"
          onClick={handleOpen}
        >
          <VerticalSplitIcon className="me-2 text-yellow-500" />
          <p>Write article</p>
        </div>
      </div>
      <MakePost handleOpen={handleOpen} open={open} />
    </div>
  );
};

export default SharePost;
