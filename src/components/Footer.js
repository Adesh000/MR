import Image from "next/image";
import React from "react";
import Logo from "../../public/Logo.png";
import {
  montserrat400,
  montserrat500,
  montserrat700,
} from "@/constants/Constants";
import Ios from "../../public/IOS.png";
import PlayStore from "../../public/Play store.png";
import visa from "../../public/visa.png";
import master from "../../public/pngwing 1.png";
import paypal from "../../public/hiclipart 2.png";
import youtube from "../../public/Youtube.png";
import insta from "../../public/Instagram.png";
import tiktok from "../../public/tiktok.png";
import facebook from "../../public/Facebook.png";

const Footer = () => {
  return (
    <footer className="bg-[#7C7C7B] px-28 py-10">
      <div className=" bg-white rounded-lg p-5">
        <div className="flex items-start justify-between">
          <div className="w-[30%]">
            <Image src={Logo} width={100} height={100} alt="logo" />
            <p
              className={`${montserrat400.className} text-base text-[#686868] my-5`}
            >
              Join Mr. Corporation on this exciting journey, where innovation
              and community converge for a shopping experience like no other.
            </p>
          </div>
          <div className="w-[20%]">
            <p
              className={`${montserrat700.className} text-xl text-[#262626] mb-10`}
            >
              Sales
            </p>
            <p className={`${montserrat500.className} text-[#262626]`}>
              sales@mrcorporation@mail.com
            </p>
            <p className={`${montserrat400.className} text-[#262626]`}>
              MON–FRI 9AM–6PM
            </p>
            <div className="flex items-center justify-start">
              <Image
                src={youtube}
                width={20}
                height={20}
                alt="youtube"
                style={{ marginRight: 5 }}
              />
              <Image
                src={insta}
                width={20}
                height={20}
                alt="insta"
                style={{ marginRight: 5 }}
              />
              <Image
                src={facebook}
                width={20}
                height={20}
                alt="facebook"
                style={{ marginRight: 5 }}
              />
              <Image
                src={tiktok}
                width={20}
                height={20}
                alt="tiktok"
                style={{ marginRight: 5 }}
              />
            </div>
          </div>
          <div className="w-[20%]">
            <p
              className={`${montserrat700.className} text-xl text-[#262626] mb-10`}
            >
              Call
            </p>
            <p className={`${montserrat500.className} text-[#262626]`}>
              +91 8209770873
            </p>
            <p className={`${montserrat400.className} text-[#262626]`}>
              MON–FRI 9AM–6PM
            </p>
          </div>
          <div className="w-[20%]">
            <p
              className={`${montserrat700.className} text-xl text-[#262626] mb-10`}
            >
              MR Apps
            </p>
            <Image src={Ios} width={100} height={50} alt="ios" />
            <Image src={PlayStore} width={100} height={50} alt="play store" />
          </div>
        </div>
        <div className="h-[1px] bg-[#686868] my-10" />
        <p className={`${montserrat400.className} text-base text-center`}>
          Copyright © MR Corporation, 2023. All Rights Reserved.
        </p>
        <div className="flex items-center justify-center mt-2">
          <Image src={master} width={20} height={20} alt="master" />
          <Image
            src={visa}
            width={20}
            height={20}
            alt="visa"
            style={{ marginLeft: 5, marginRight: 5 }}
          />
          <Image src={paypal} width={20} height={20} alt="paypal" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
