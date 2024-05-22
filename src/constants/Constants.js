import { Montserrat } from "next/font/google";

export const montserrat400 = Montserrat({ weight: "400", subsets: ["latin"] });
export const montserrat600 = Montserrat({ weight: "600", subsets: ["latin"] });
export const montserrat700 = Montserrat({ weight: "700", subsets: ["latin"] });
export const montserrat500 = Montserrat({ weight: "500", subsets: ["latin"] });

export const TIME_STATS = [
  {
    stat: "04",
    timeForm: "hours",
  },
  {
    stat: "45",
    timeForm: "minutes",
  },
  {
    stat: "32",
    timeForm: "seconds",
  },
];

export const STATS = [
  {
    number: "100k",
    desc: "Coupons Sold",
  },
  {
    number: "100+",
    desc: "Families benefited",
  },
  {
    number: "10k",
    desc: "Join us every week",
  },
];

export const FAQS = [
  "How does it work?",
  "What are the benefits?",
  "How many users can use it?",
  "Can i have custom pricing?",
];
