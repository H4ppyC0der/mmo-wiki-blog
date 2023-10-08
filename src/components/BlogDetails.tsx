import Image from "next/image";
import React from "react";
import BlogInfo from "./BlogInfo";
import Tags from "./Tags";
import Quote from "./Quote";
import CheckIcon from "@mui/icons-material/Check";

export interface Props {
  featuredImg: string;
}

const BlogDetails = (props: Props) => {
  return (
    <section className="w-screen h-fit flex flex-col items-center px-[5%]">
      <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 h-fit flex flex-col">
        <div className="w-full h-fit">
          <Image
            src={props.featuredImg}
            width={2000}
            height={2000}
            className="w-full h-fit"
            alt="Blog featured image"
          />
        </div>
        <BlogInfo />
        <p className="text-[#c5c5ca]">
          When you think about your favourite video games, what stands out? Is
          it the gameplay, the graphics, or maybe the story? Chances are, the
          music and sound effects played a big role in creating the overall
          experience. In fact, music and sound effects are an essential
          component of game design, helping to set the tone, build immersion,
          and create memorable moments.Here are just a few ways music and sound
          effects impact game design:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 my-6">
          <div className="col-lg-6">
            <h4 className="mb-6 text-white font-bold text-2xl">
              Music and sound effects:
            </h4>
            <ul className=" flex flex-col mb-8  gap-3 text-[#c5c5ca]">
              <li className="flex flex-row items-center gap-3">
                <span className="w-10 h-10 flex flex-col justify-center items-center bg-[#222434] rounded-full text-[#DF7B00]">
                  <CheckIcon />
                </span>
                Setting the Tone
              </li>
              <li className="flex flex-row items-center gap-3">
                <span className="w-10 h-10 flex flex-col justify-center items-center bg-[#222434] rounded-full text-[#DF7B00]">
                  <CheckIcon />
                </span>
                Building Immersion
              </li>
              <li className="flex flex-row items-center gap-3">
                <span className="w-10 h-10 flex flex-col justify-center items-center bg-[#222434] rounded-full text-[#DF7B00]">
                  <CheckIcon />
                </span>
                Creating Memorable Moments
              </li>
              <li className="flex flex-row items-center gap-3">
                <span className="w-10 h-10 flex flex-col justify-center items-center bg-[#222434] rounded-full text-[#DF7B00]">
                  <CheckIcon />
                </span>
                Enhancing Gameplay
              </li>
              <li className="flex flex-row items-center gap-3">
                <span className="w-10 h-10 flex flex-col justify-center items-center bg-[#222434] rounded-full text-[#DF7B00]">
                  <CheckIcon />
                </span>
                Creating Memorable Moments
              </li>
              <li className="flex flex-row items-center gap-3">
                <span className="w-10 h-10 flex flex-col justify-center items-center bg-[#222434] rounded-full text-[#DF7B00]">
                  <CheckIcon />
                </span>
                Building Immersion
              </li>
            </ul>
          </div>
          <div className="w-full h-fit">
            <div className="flex flex-row justify-center items-center">
              <Image
                src="https://steamuserimages-a.akamaihd.net/ugc/2122941552017551385/AAD6B477EBC32E24C37E299D58EBA58A0E1206FE/?imw=2048&imh=1152&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                width={2000}
                height={2000}
                alt="Blog Image"
              />
            </div>
          </div>
        </div>

        <p className="text-[#c5c5ca]">
          In order to create effective music and sound effects for a game,
          designers need to consider a few key factors. For example, the tone of
          the game, the intended emotions or reactions of players, and the
          overall gameplay mechanics will all influence the choices made for
          music and sound effects. Additionally, designers need to consider
          technical factors like file size and compatibility with different
          devices.
        </p>

        <Quote />
        <p className="text-[#c5c5ca]">
          Ultimately, music and sound effects are a crucial aspect of game
          design that can make or break the player experience. By carefully
          selecting and creating the right sounds, designers can create
          immersive, engaging games that players will remember long after
          they've put down the controller.
        </p>

        <Tags />
      </div>
    </section>
  );
};

export default BlogDetails;
