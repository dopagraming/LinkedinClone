import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useSelector } from "react-redux";
const HomeLiftAside = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <aside
      className="h-auto bg-white rounded-md overflow-hidden max-md:col-span-12 md:col-span-3 min-[991px]:col-span-2 h-fit"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
    >
      <div className=" h-[15%] relative bg-slate-900 h-[70px] mb-[45px]">
        <img
          src={user && user?.photoURL ? user.photoURL : "./images/MyPhoto.jpg"}
          alt=""
          className="absolute top-[50%] left-[50%] translate-x-[-50%] rounded-full w-[70px] border-2 border-white"
          loading="lazy"
        />
      </div>
      <div className="text-center pb-4">
        <h3 className="font-semibold	">
          {user && user.displayName ? user.displayName : "Uknown"}
        </h3>
        <p className="text-sm" style={{ color: "rgb(0 0 0 / 60%)" }}>
          Front End Developer
        </p>
      </div>
      <div
        style={{ color: "rgb(0 0 0 / 60%)", borderColor: "rgb(0 0 0 / 60%)" }}
        className="px-2 pt-4 flex justify-between border-t text-sm"
      >
        <p>Profile viewers</p>
        <span>3</span>
      </div>
      <div
        style={{ color: "rgb(0 0 0 / 60%)" }}
        className="px-2 pb-4 flex justify-between text-sm"
      >
        <p>Post impressions</p>
        <span>5</span>
      </div>
      <div
        style={{ color: "rgb(0 0 0 / 60%)", borderColor: "rgb(0 0 0 / 60%)" }}
        className="py-3 px-2 border-y text-sm"
      >
        Get 4x more profile views with Premium Try for TL0
      </div>
      <div
        style={{ color: "rgb(0 0 0 / 80%)" }}
        className="flex p-2 items-center text-sm"
      >
        <BookmarkIcon className="me-3" />
        <p>Saved items</p>
      </div>
    </aside>
  );
};

export default HomeLiftAside;
