import React from "react";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const Pagination = () => {
  return (
    <nav
      aria-label="Page navigation"
      className="w-fit mt-10 flex flex-row justify-start px-[5%]"
    >
      <ul className="flex flex-row gap-5 md:gap-10 lg:gap-10 xl:gap-10 text-white">
        <li className="">
          <Link
            className="mt-8 text-[#DF7B00] bg-[#303141] rounded-full w-10 h-10 flex flex-col justify-center items-center hover:bg-[#DF7B00] hover:text-[#161829]"
            href="#"
            aria-label="Previous"
          >
            <WestIcon />
          </Link>
        </li>
        <ul className="flex flex-row gap-2 md:gap-5 lg:gap-5 xl:gap-5">
          <li className="">
            <Link
              className="mt-8 text-[#303141] bg-[#DF7B00] rounded-full w-10 h-10 flex flex-col justify-center items-center hover:bg-[#DF7B00] hover:text-[#161829]"
              href="#"
            >
              01
            </Link>
          </li>
          <li className="">
            <Link
              className="mt-8 text-[#DF7B00] bg-[#303141] rounded-full w-10 h-10 flex flex-col justify-center items-center hover:bg-[#DF7B00] hover:text-[#161829]"
              href="#"
            >
              02
            </Link>
          </li>
          <li className="">
            <Link
              className="mt-8 text-[#DF7B00] bg-[#303141] rounded-full w-10 h-10 flex flex-col justify-center items-center hover:bg-[#DF7B00] hover:text-[#161829]"
              href="#"
            >
              03
            </Link>
          </li>
          <li className="">
            <Link
              className="mt-8 text-[#DF7B00] bg-[#303141] rounded-full w-10 h-10 flex flex-col justify-center items-center hover:bg-[#DF7B00] hover:text-[#161829]"
              href="#"
            >
              04
            </Link>
          </li>
        </ul>
        <li className="">
          <Link
            className="mt-8 text-[#DF7B00] bg-[#303141] rounded-full w-10 h-10 flex flex-col justify-center items-center hover:bg-[#DF7B00] hover:text-[#161829]"
            href="#"
            aria-label="Next"
          >
            <EastIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
