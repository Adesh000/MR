import Image from "next/image";
import Grocery from "../../public/groceries.png";
import Ios from "../../public/IOS.png";
import PlayStore from "../../public/Play store.png";
import Star from "../../public/Star 3.png";
import Ellipse42 from "../../public/Ellipse 42.png";
import Ellipse43 from "../../public/Ellipse 43.png";
import Ellipse44 from "../../public/Ellipse 44.png";
import vision from "../../public/image 160.png";
import mission from "../../public/image 156.png";
import CustomButton from "@/components/CustomButton";
import basket from "../../public/Group 1000002612.png";
import blockchain from "../../public/blockchain.png";
import referFriend from "../../public/Refer a friend-pana 1.png";
import Group from "../../public/Group.png";
import {
  STATS,
  TIME_STATS,
  montserrat400,
  montserrat500,
  montserrat600,
  montserrat700,
} from "@/constants/Constants";
import TimeCircle from "@/components/TimeCircle";
import CustomSection from "@/components/CustomSection";
import Faqs from "@/components/Faqs";
export default function Home() {
  const headComp = () => <p>Unlock Rewards for You and Your Loved Ones!</p>;
  return (
    <main className="">
      <section className="flexBetween mx-28 my-28">
        <div className="w-[50%]">
          <p className={`${montserrat600.className} text-[#686868] text-xl `}>
            From Our Hearts to Your Home
          </p>
          <p
            className={`${montserrat400.className} text-[#3B3B3B] text-3xl my-5`}
          >
            Learn More{" "}
            <span
              className={`${montserrat700.className} text-[#686868] text-3xl`}
            >
              About Us
            </span>
          </p>
          <p className={`${montserrat400.className} text-[#686868] text-xl`}>
            {" "}
            <span className="text-[#EE0003]">MR Corporation</span> is a premier
            grocery delivery website operating in Canada. We provide a
            convenient platform for users to buy coupons and stand a chance to
            win a year of free grocery delivery. Additionally, users receive a
            gift coupon every 24 hours{" "}
          </p>
          <div className="flexStart my-5">
            <div className="mr-5">
              <CustomButton text={"Get Coupon"} type="primary" />
            </div>
            <CustomButton text={"Watch Video"} type="secondary" />
          </div>
          <div className="flexStart my-5">
            <div className="flex">
              <Image src={Ellipse42} width={40} height={40} alt="ell" />
              <Image
                src={Ellipse43}
                width={40}
                height={40}
                alt="ell"
                style={{ position: "relative", right: 15 }}
              />
              <Image
                src={Ellipse44}
                width={40}
                height={40}
                alt="ell"
                style={{ position: "relative", right: 30 }}
              />
            </div>
            <div className="relative right-5">
              <p
                className={`${montserrat600.className} text-[#686868] text-base`}
              >
                Our Happy Customers{" "}
              </p>
              <div className="flexStart">
                <Image src={Star} width={15} height={15} alt="star" />
                <p
                  className={`${montserrat600.className} text-[#686868] text-sm ml-2`}
                >
                  4.5 <span className="text-[#EE0003]">(6.7 Reviews)</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flexStart">
            <Image src={Ios} width={150} height={80} alt="ios" />
            <Image src={PlayStore} width={150} height={80} alt="play store" />
            {TIME_STATS.map((item, index) => (
              <TimeCircle
                key={index}
                stat={item?.stat}
                timeForm={item?.timeForm}
              />
            ))}
          </div>
        </div>
        <Image src={Grocery} width={400} height={400} alt={"photo"} />
      </section>
      <div className="bg-[#F6F6F6] flex items-center justify-evenly py-3">
        <p className={`${montserrat400.className} text-[#45A843] text-xl`}>
          Jack smith just bought 2 coupons(AB)
        </p>
        <Image src={Star} width={30} height={30} alt="star" />
        <p className={`${montserrat400.className} text-[#45A843] text-xl`}>
          Jack smith just bought 2 coupons(AB)
        </p>
      </div>

      <CustomSection
        type="primary"
        image={vision}
        heading={"Vision"}
        text="To revolutionize the grocery delivery experience in Canada by
              offering easy access to coupons and the opportunity to win
              exciting prizes, while ensuring customer satisfaction and
              convenience"
      />
      <CustomSection
        type="secondary"
        image={mission}
        heading={"Mission"}
        text="We envision becoming the go-to destination for grocery delivery services in Canada, setting the standard for convenience, affordability, and customer rewards in the industry
        "
      />

      <div
        className="
        bg-gradient-to-b from-[#e84a4a1e] to-[#f1833f18] py-1"
      >
        <CustomSection
          image={basket}
          type="secondary"
          // heading={"Unlock Rewards for You and Your Loved Ones!"}
          customHeading={headComp}
          text={`At MR, we believe that sharing joy should be rewarding. That's why we've introduced our "Earn and Refer" program—an exciting opportunity for you to not only enhance the lives of your friends and family but also earn fantastic rewards for yourself!`}
          buttonText="Share Now"
        />
      </div>

      <CustomSection
        image={blockchain}
        type="primary"
        heading={"How It Works: Simple, Seamless, and Rewarding"}
        text={`At M R Corporation, we're a community-driven organization focused on making a meaningful impact in Canadian families' lives. We offer free grocery delivery and digital coupons to ensure accessibility and affordability for all.`}
        options={["Share the Love", "Earn 10% of the Joy"]}
      />

      <div
        className="
        bg-gradient-to-b from-[#e84a4a1e] to-[#f1833f18] py-1"
      >
        <CustomSection
          image={referFriend}
          type="secondary"
          heading={"Why Share the Joy with MR?"}
          text={`Spread joy with MR! Get instant rewards when your loved ones join, refer others for more benefits, and share the joy with a 10% share when they receive a gift.`}
          buttonText="Share Now"
        />
      </div>

      <CustomSection
        image={Group}
        type="secondary"
        heading={"Our Presence across Canada"}
        stats={STATS}
        buttonText="Join Now"
      />

      <Faqs />
    </main>
  );
}
