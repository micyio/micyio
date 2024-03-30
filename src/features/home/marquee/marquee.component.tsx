"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

type TMarqueeData = {
  title: string;
};

const marqueeData: TMarqueeData[] = [
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
  {
    title: "UI/UX Design",
  },
];

export function MarqueeSection() {
  return (
    <div>
      <div className="flex overflow-hidden bg-gradient-to-b from-primary to-deepOrange py-2">
        <Marquee direction="left" speed={150} delay={5}>
          {marqueeData?.map((marquee, index) => (
            <div key={index}>
              <h5 className="flex items-center font-sans text-[28px] font-bold text-black">
                <Image
                  src="/images/marquee/star.svg"
                  height={50}
                  width={50}
                  alt="star"
                  className="inline-block h-[50px] w-[50px] object-contain"
                />
                {marquee.title}
              </h5>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex overflow-hidden bg-gradient-to-b from-primary to-deepOrange py-2">
        <Marquee direction="right" speed={160} delay={5}>
          {marqueeData?.map((marquee, index) => (
            <div key={index}>
              <h5 className="flex items-center font-sans text-[28px] font-bold text-black">
                <Image
                  src="/images/marquee/star.svg"
                  height={50}
                  width={50}
                  alt="star"
                  className="inline-block h-[50px] w-[50px] object-contain"
                />
                {marquee.title}
              </h5>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
