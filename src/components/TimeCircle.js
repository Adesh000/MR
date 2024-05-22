import {
  montserrat400,
  montserrat600,
  montserrat700,
} from "@/constants/Constants";
import React from "react";

const TimeCircle = ({ stat, timeForm }) => {
  return (
    <div className="w-14 h-14 mx-2 rounded-full border-[#686868] border-2 flex flex-col items-center justify-center p-5">
      <p className={`${montserrat700.className} text-[#686868] text-xl`}>
        {stat}
      </p>
      <p
        className={`${montserrat400.className} text-[#686868] text-[10px] capitalize relative bottom-1`}
      >
        {timeForm}
      </p>
    </div>
  );
};

export default TimeCircle;
