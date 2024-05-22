import { FAQS, montserrat600, montserrat700 } from "@/constants/Constants";
import Image from "next/image";
import React from "react";
import chevDown from "../../public/Vector 5.png";
const Faqs = () => {
  return (
    <section className="bg-white px-28 py-20">
      <div className="rounded-xl bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] p-10 px-20">
        <p
          className={`${montserrat700.className} text-[#EE0003] text-4xl text-center`}
        >
          FAQs
        </p>
        {FAQS.map((item, index) => (
          <div key={index}>
            <div className="flexBetween my-5">
              <p
                className={`${montserrat600.className} text-2xl text-[#3B3B3D]`}
              >
                {item}
              </p>
              <Image src={chevDown} width={30} height={30} alt="down" />
            </div>
            <div
              className={`${
                index !== FAQS?.length - 1 && "h-[1px] bg-[#2c8ab1]"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
