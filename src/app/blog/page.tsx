"use client";
import React from "react";
import Banner from "@/components/Banner";
import BlogDetails from "@/components/BlogDetails";

const BlogPage = ({ searchParams }) => {
  return (
    <main className=" w-screen h-fit bg-[#161829] flex flex-col gap-20 overflow-x-hidden pb-[120px]">
      <Banner blogTitle={searchParams.blogTitle} />
      <BlogDetails featuredImg={searchParams.featuredImg} />
    </main>
  );
};

export default BlogPage;
