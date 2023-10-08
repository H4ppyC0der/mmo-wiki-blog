import React from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const BlogInfo = () => {
  return (
    <div className="flex flex-row justify-evenly md:justify-start lg:justify-start xl:justify-start divide-x pt-6 pb-4 gap-5 text-base text-[#c5c5ca]">
      <div className="flex flex-row gap-1 pr-4">
        <ScheduleIcon />

        <span>15 Min</span>
      </div>
      <div className="flex flex-row justify-center gap-1 px-4">
        <VisibilityIcon />

        <span>55</span>
      </div>
      <div className="flex flex-row justify-start gap-1 px-4">
        <PersonOutlineIcon />

        <span>By Admin</span>
      </div>
    </div>
  );
};

export default BlogInfo;
