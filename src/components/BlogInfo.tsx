import React from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const BlogInfo = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 divide-x pt-6 pb-4 gap-5 text-base text-[#c5c5ca]">
      <div className="flex flex-row gap-1">
        <ScheduleIcon />

        <span>15 Min</span>
      </div>
      <div className="flex flex-row justify-center gap-1">
        <VisibilityIcon />

        <span>55</span>
      </div>
      <div className="flex flex-row justify-start col-span-2 gap-1 pl-4">
        <PersonOutlineIcon />

        <span>By Admin</span>
      </div>
    </div>
  );
};

export default BlogInfo;