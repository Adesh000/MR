import { montserrat600 } from "@/constants/Constants";
import React from "react";
import play from "../../public/Vector.png";
import arrow from "../../public/solar_arrow-up-broken.png";
import Image from "next/image";

const CustomButton = ({ text, type, width }) => {
  return (
    <div
      style={{ width: width }}
      className={` ${type ? `px-2` : `px-8`} ${
        type === "secondary"
          ? `bg-white`
          : `bg-gradient-to-b from-[#E84A4A] to-[#F7A738]`
      }  py-2 cursor-pointer rounded-full drop-shadow-[0_5px_5px_rgba(245,56,56,0.5)] flexBetween`}
    >
      {type === "secondary" && (
        <Image src={play} width={30} height={30} alt="play" />
      )}
      <p
        className={` ${
          type === "secondary" ? `text-[#EE0003]` : `text-white`
        } ${montserrat600.className} text-sm mx-3`}
      >
        {text}
      </p>
      {type === "primary" && (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <Image src={arrow} width={20} height={20} alt="play" />
        </div>
      )}
    </div>
  );
};

export default CustomButton;
