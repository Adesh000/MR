import React from "react";
import Vision from "../../public/image 160.png";
import Mission from "../../public/image 156.png";
import Image from "next/image";
import check from "../../public/check-circle.png";
import {
  montserrat400,
  montserrat500,
  montserrat600,
  montserrat700,
} from "@/constants/Constants";
import CustomButton from "./CustomButton";

const CustomSection = ({
  type,
  image,
  heading,
  text,
  buttonText,
  options,
  stats,
  customHeading,
}) => {
  console.log("sdcnj", customHeading);
  return (
    <section className={`flexBetween mx-28 my-20 `}>
      {type === "primary" ? (
        <>
          <Image src={image} width={400} height={500} alt="vision" />
          <div className="w-[50%]">
            {customHeading ? (
              customHeading()
            ) : (
              <p
                className={`${montserrat700.className} text-[#3B3B3B] text-4xl`}
              >
                {heading}
              </p>
            )}
            <p
              className={`${montserrat500.className} text-[#686868] text-xl my-10`}
            >
              {text}
            </p>

            {options?.length !== 0 &&
              options?.map((item, index) => (
                <div key={index} className="flexStart mb-5">
                  <Image src={check} width={20} height={20} alt="tick" />
                  <p className={`${montserrat700.className} ml-3 text-lg`}>
                    {item}
                  </p>
                </div>
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="w-[50%]">
            <p className={`${montserrat700.className} text-[#3B3B3B] text-4xl`}>
              {heading}
            </p>
            <p
              className={`${montserrat500.className} text-[#686868] text-xl my-10`}
            >
              {text}
            </p>
            {stats?.length !== 0 ? (
              <div className="flexBetween">
                {stats?.map((item, index) => (
                  <div key={index} className="flexBetween mb-10">
                    <div>
                      <p
                        className={`${montserrat600.className} text-[#3B3B3B] ml-3 text-3xl`}
                      >
                        {item?.number}
                      </p>
                      <p
                        className={`${montserrat400.className} text-[#686868] ml-3 text-xl`}
                      >
                        {item?.desc}
                      </p>
                    </div>
                    <div
                      className={`${
                        index !== stats?.length - 1 &&
                        "w-0.5 h-10 bg-[#686868] ml-5"
                      }`}
                    />
                  </div>
                ))}
              </div>
            ) : null}
            {buttonText && <CustomButton text={buttonText} width={170} />}
          </div>
          <Image src={image} width={400} height={500} alt="vision" />
        </>
      )}
    </section>
  );
};

export default CustomSection;
