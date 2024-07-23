import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WebIcon from "@mui/icons-material/Web";
import TagIcon from "@mui/icons-material/Tag";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import React from "react";
const MyNetworkLiftAside = () => {
  return (
    <aside
      className="bg-white rounded-md overflow-hidden max-md:col-span-12 md:col-span-3 min-[991px]:col-span-3 h-fit"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
    >
      <div
        className="p-3 flex justify-between items-center cursor-pointer"
        onClick={() => {
          document.querySelector(".my-network-list").classList.toggle("hidden");
        }}
      >
        <h2>Mange my network</h2>
        <KeyboardArrowDownIcon />
      </div>
      <hr />
      <div className="my-network-list text-zinc-700 hidden">
        <div className="p-3 flex justify-between items-center cursor-pointer transition hover:text-black">
          <BookIcon />
          <p className="me-auto ms-3">Contacts</p>
          <span>200</span>
        </div>
        <div className="p-3 flex justify-between items-center cursor-pointer transition hover:text-black">
          <PersonIcon />
          <p className="me-auto ms-3">Following & followers</p>
          <span>12k</span>
        </div>
        <div className="p-3 flex justify-between items-center cursor-pointer transition hover:text-black">
          <GroupsIcon />
          <p className="me-auto ms-3">Groups</p>
          <span>6</span>
        </div>
        <div className="p-3 flex justify-between items-center cursor-pointer transition hover:text-black">
          <CalendarMonthIcon />
          <p className="me-auto ms-3">Events</p>
          <span>2</span>
        </div>
        <div className="p-3 flex justify-between items-center cursor-pointer transition hover:text-black">
          <WebIcon />
          <p className="me-auto ms-3">Pages</p>
          <span>77</span>
        </div>
        <div className="p-3 flex justify-between items-center cursor-pointer transition hover:text-black">
          <NewspaperIcon />
          <p className="me-auto ms-3">Newsletter</p>
          <span>34</span>
        </div>
        <div className="p-3 flex justify-between items-center cursor-pointer transition hover:text-black">
          <TagIcon />
          <p className="me-auto ms-3">Hashtags</p>
          <span>32</span>
        </div>
      </div>
    </aside>
  );
};

export default MyNetworkLiftAside;
