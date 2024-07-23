import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import { jobs } from "../appInformations";
const HomeMiddelSection = () => {
  return (
    <section className="max-md:col-span-12 md:col-span-9 min-[991px]:col-span-9 ">
      <div
        className="bg-white mt-2 rounded-md"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px" }}
      >
        <div className="p-2 pt-6">
          <p>Discover top jobs for you</p>
          <p className="text-sm text-gray-600">
            Based on your profile and search history
          </p>
        </div>
        {jobs?.map((job, index) => (
          <div className="flex items-center px-2 py-4 border-b border-gray-200 relative cursor-pointer transition hover:bg-zinc-100">
            <img className="me-2" width={90} src={job.companyImg} alt="" />
            <div>
              <p className="text-blue-500 font-medium">{job.companyDis}</p>
              <span className="font-light text-sm">{job.companyName}</span>
              <p className="text-sm">
                {job.companySite} ({job.workStatus})
              </p>
            </div>
            <CloseIcon className="absolute right-[18px] top-[8px] cursor-pointer" />
          </div>
        ))}
        <div className="text-center p-4 flex items-center justify-center cursor-pointer transition hover:bg-blue-100">
          Show all <KeyboardArrowRightIcon className="ms-2" />
        </div>
      </div>
    </section>
  );
};

export default HomeMiddelSection;
