import Image from "next/image";
import React from "react";
import Link from "next/link";
import CallMadeIcon from "@mui/icons-material/CallMade";

export interface Props {
  imgSrc: any;
  blogTitle: string;
}

const BlogCard = (props: Props) => {
  return (
    <section className="bg-[#161829] w-screen h-fit flex flex-row justify-center">
      <div className="w-fit h-fit relative flex flex-col">
        <div className="h-fit w-fit">
          <Image
            src={props.imgSrc}
            className="h-fit w-full md:w-[636px] lg:w-[636px] xl:w-[636px] object-cover object-center bg-white shadow-[0_-15px_35px_15px_rgba(255,255,255,0.1)]"
            width={2000}
            height={2000}
            alt="Blog Featured Image"
          />
        </div>
        <div className="absolute bg-[#161829] -mb-[70%] md:mb-0 lg:mb-0 xl:mb-0 left-0 bottom-0 w-3/4 h-fit">
          <div className="p-6 flex flex-col justify-between">
            <div className="flex gap-3">
              <h5 className="font-bold text-xl text-white leading-7">News</h5>
              <span className="leading-6 text-[#C5C5CA] flex flex-row items-center">
                25 January,2023
              </span>
            </div>
            <Link href="/blog">
              <h3 className="w-full text-3xl font-bold mt-[12px] text-white">
                {props.blogTitle}
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
