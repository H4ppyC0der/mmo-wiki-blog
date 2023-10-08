"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import ShareIcon from "@mui/icons-material/Share";

const Tags = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row py-5 gap-3 justify-between mt-5 text-[#c5c5ca] border-y-[1px] border-[#4c4d5a] ">
      <p>
        Tag: <span>Game Art, Game Sound, 3D Characters,</span>
      </p>
      <div className="flex flex-row gap-4">
        <div className="icon-box d-flex">
          <ShareIcon />
        </div>
        <ul className="flex flex-row gap-4">
          <li className="flex flex-row justify-center items-center text-[#DF7B00] border-[1px] border-[#4c4d5a] rounded-full w-[30px] h-[30px] hover:text-white hover:bg-[#DF7B00]">
            <Link href="https://www.facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </Link>
          </li>
          <li className="flex flex-row justify-center items-center text-[#DF7B00] border-[1px] border-[#4c4d5a] rounded-full w-[30px] h-[30px] hover:text-white hover:bg-[#DF7B00]">
            <Link href="https://www.instagram.com" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </li>
          <li className="flex flex-row justify-center items-center text-[#DF7B00] border-[1px] border-[#4c4d5a] rounded-full w-[30px] h-[30px] hover:text-white hover:bg-[#DF7B00]">
            <Link
              href="https://www.linkedin.com"
              aria-label="Linkedin"
              className="d-center"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li className="flex flex-row justify-center items-center text-[#DF7B00] border-[1px] border-[#4c4d5a] rounded-full w-[30px] h-[30px] hover:text-white hover:bg-[#DF7B00]">
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="d-center"
            >
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tags;
