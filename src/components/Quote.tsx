import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Quote = () => {
  return (
    <div className=" my-6 p-10 p-sm-10 text-[#222434] bg-[#DF7B00] rounded-[16px]">
      <div className="text-2xl font-bold">
        <FormatQuoteIcon />
      </div>
      <p className="text-2xl font-bold">
        &quot;Good game design is not about graphics, story or sound; it is
        about how the player interacts with the game.&quot;
      </p>
      <span className="mt-4 flex flex-row items-center gap-2">
        Sid Meier <div className="h-[1.5px] w-20 bg-[#222434]"></div>{" "}
      </span>
    </div>
  );
};

export default Quote;
