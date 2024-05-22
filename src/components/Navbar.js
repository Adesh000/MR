import Image from "next/image";
import React from "react";
import Logo from "../../public/Logo.png";
import wallet from "../../public/wallet.png";
import translate from "../../public/Translate.png";
import ticket from "../../public/image 72.png";
import CustomButton from "./CustomButton";
import { montserrat400, montserrat600 } from "@/constants/Constants";

const Navbar = () => {
  return (
    <div className="flexBetween mx-28 my-6">
      <Image src={Logo} width={100} height={100} alt="logo" />
      <div className="flexBetween w-[30%]">
        {/* <div>
          <p className="">Home</p>
          <div className="w-5 h-5 rounded-full bg-[#EE0003]"></div>
        </div> */}
        {["Home", "About", "Results", "Partners", "Contacts"].map(
          (item, index) => (
            <p
              key={index}
              className={`${montserrat400.className} hover:${montserrat600.className} hover:text-[#EE0003] text-[#686868]`}
            >
              {item}
            </p>
          )
        )}
      </div>
      <div className="flexBetween w-[20%]">
        <Image src={translate} width={30} height={30} alt="logo" />
        <Image src={wallet} width={30} height={30} alt="logo" />
        <CustomButton text={"Login"} />
        <Image src={ticket} width={30} height={30} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
