import BookmarkIcon from "@mui/icons-material/Bookmark";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import React from "react";
const HomeLiftAside = () => {
  return (
    <aside className=" max-md:col-span-12 md:col-span-3 min-[991px]:col-span-3 h-fit ">
      <div
        className="px-3 py-7 text-zinc-700 text-sm bg-white rounded-md overflow-hidden"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
        <dir className="mb-5 flex items-center transition hover:text-black">
          <BookmarkIcon className="me-2" />
          <p>My jobs</p>
        </dir>
        <dir className="mb-5 flex items-center transition hover:text-black">
          <FormatListBulletedIcon className="me-2" />
          <p>Preferences</p>
        </dir>
        <dir className="mb-5 flex items-center transition hover:text-black">
          <NewspaperIcon className="me-2" />
          <p>Interview prep</p>
        </dir>
        <dir className="flex items-center transition hover:text-black">
          <SmartDisplayIcon className="me-2" />
          <p>Job seeker guidance</p>
        </dir>
      </div>
      <button className="text-blue-600 border border-blue-600 rounded-full px-2 py-1 mt-3 w-full transition hover:text-blue-400">
        <AppRegistrationIcon className="me-2" />
        Post a free job
      </button>
    </aside>
  );
};

export default HomeLiftAside;
