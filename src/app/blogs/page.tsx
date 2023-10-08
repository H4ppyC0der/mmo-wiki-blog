import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import React from "react";

const BlogsPage = () => {
  return (
    <section className="bg-[#161829] w-screen h-fit py-[120px] flex flex-col gap-80 md:gap-20  lg:gap-20 xl:gap-20">
      <BlogCard
        imgSrc="https://steamuserimages-a.akamaihd.net/ugc/2109429266524096918/02032A5360DA8D57374F407922254E1932B4D01A/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        blogTitle="The Role Of Music And Sound Effects In Game Design"
      />
      <BlogCard
        imgSrc="https://steamuserimages-a.akamaihd.net/ugc/2122941552022954657/F0C2C749BBD2C5A9D270BB1BA8FF0983EB7765C2/?imw=1920&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        blogTitle="The Importance Of User Testing In Game Development"
      />
      <BlogCard
        imgSrc="https://steamuserimages-a.akamaihd.net/ugc/2068898300047349186/3732B1308C9DF46D7270AA938ADC34D8E724A537/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        blogTitle="Creating Memorable Characters In Video Games"
      />
      <BlogCard
        imgSrc="https://steamuserimages-a.akamaihd.net/ugc/2094792567187206166/6A15DE0D9D7E3EE50E4A93EBF17F0C269C46E4C6/?imw=1920&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        blogTitle="Exploring Different Genres In Game Design And Development"
      />
      <BlogCard
        imgSrc="https://steamuserimages-a.akamaihd.net/ugc/2109429266524096918/02032A5360DA8D57374F407922254E1932B4D01A/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        blogTitle="The Role Of Music And Sound Effects In Game Design"
      />
      <BlogCard
        imgSrc="https://steamuserimages-a.akamaihd.net/ugc/2122941552022954657/F0C2C749BBD2C5A9D270BB1BA8FF0983EB7765C2/?imw=1920&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        blogTitle="The Importance Of User Testing In Game Development"
      />
      <BlogCard
        imgSrc="https://steamuserimages-a.akamaihd.net/ugc/2068898300047349186/3732B1308C9DF46D7270AA938ADC34D8E724A537/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        blogTitle="Creating Memorable Characters In Video Games"
      />
      <BlogCard
        imgSrc="https://steamuserimages-a.akamaihd.net/ugc/2094792567187206166/6A15DE0D9D7E3EE50E4A93EBF17F0C269C46E4C6/?imw=1920&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        blogTitle="Exploring Different Genres In Game Design And Development"
      />

      <Pagination />
    </section>
  );
};

export default BlogsPage;
