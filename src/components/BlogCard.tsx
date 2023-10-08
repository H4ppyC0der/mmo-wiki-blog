import Image from "next/image";
import React from "react";
import Link from "next/link";
import CallMadeIcon from "@mui/icons-material/CallMade";

const BlogCard = () => {
  return (
    <section className="bg-[#161829] w-fit h-fit">
      <div className="relative flex flex-col items-center">
        <div className="">
          <Image
            src={"/images/blog-image.PNG"}
            className="h-fit w-full object-cover object-center"
            width={2000}
            height={2000}
            alt="Image"
          />
        </div>
        <div className="absolute bg-[#161829] -mb-[80%] md:-mb-0 lg:-mb-0 xl:-mb-0 left-0 bottom-0 w-full md:w-3/4 lg:w-3/4 xl:w-3/4 md:h-1/2 lg:h-1/2 xl:h-1/2">
          <div className="p-6 flex flex-col justify-between">
            <div className="flex gap-3">
              <h5 className="font-bold text-xl text-white leading-7">News</h5>
              <span className="leading-6 text-[#C5C5CA] flex flex-row items-center">
                25 January,2023
              </span>
            </div>
            <Link href="/blog">
              <h3 className="w-full text-3xl font-bold mt-[12px] text-white">
                Creating Memorable Characters In Video Games
              </h3>
            </Link>
            <Link
              href="/blog"
              className="mt-8 text-[#DF7B00] bg-[#303141] rounded-full w-10 h-10 flex flex-col justify-center items-center hover:bg-[#DF7B00] hover:text-[#161829]"
            >
              <CallMadeIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
