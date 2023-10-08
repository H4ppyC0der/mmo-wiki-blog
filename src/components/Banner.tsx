import React from "react";

export interface Props {
  blogTitle: string;
}

const Banner = (props: Props) => {
  return (
    <section className="bg-[url('/images/banner-image.PNG')] bg-center bg-cover w-screen h-fit flex flex-row justify-start items-center overflow-x-hidden">
      <div className="h-fit w-screen flex flex-row items-center bg-gradient-to-r from-[#000000] to-[#0000001A]">
        <h2 className="text-4xl font-bold leading-relaxed w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mx-[10%] text-[#DF7B00] pt-[210px] pb-[130px]">
          {props.blogTitle}
        </h2>
      </div>
    </section>
  );
};

export default Banner;
