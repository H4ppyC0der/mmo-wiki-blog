import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import React from "react";

const BlogsPage = () => {
  return (
    <section className="bg-[#161829] w-screen h-fit py-[120px] flex flex-col justify-center items-center gap-80 md:gap-10  lg:gap-10 xl:gap-10pl-[5%] px-[10%]">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <div className="w-fit flex flex-row content-start">
        <Pagination />
      </div>
    </section>
  );
};

export default BlogsPage;
