import React from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const BlogInfo = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7 divide-x pt-6 pb-4 gap-5 text-base text-[#c5c5ca]">
      <div className="flex flex-row gap-1">
        <ScheduleIcon />

        <span>15 Min</span>
      </div>
      <div className="flex flex-row justify-center gap-1">
        <VisibilityIcon />

        <span>55</span>
      </div>
      <div className="flex flex-row justify-start gap-1 pl-4">
        <PersonOutlineIcon />

        <span>By Admin</span>
      </div>
    </div>
  );
};

export default BlogInfo;
