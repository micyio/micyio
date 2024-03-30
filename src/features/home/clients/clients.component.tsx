"use client";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

type TSlider = {
  id: number;
  url: string;
  alt: string;
};

const sliderImage: TSlider[] = [
  {
    id: 1,
    url: "/images/client-slider/one.png",
    alt: "one",
  },
  {
    id: 2,
    url: "/images/client-slider/two.png",
    alt: "two",
  },
  {
    id: 3,
    url: "/images/client-slider/three.png",
    alt: "three",
  },
  {
    id: 4,
    url: "/images/client-slider/four.png",
    alt: "four",
  },
  {
    id: 5,
    url: "/images/client-slider/five.png",
    alt: "five",
  },
  {
    id: 6,
    url: "/images/client-slider/six.png",
    alt: "six",
  },
];

export function Clients() {
  return (
    <div className="bg-gradient-to-b from-primary to-deepOrange py-12">
      <div className="container">
        <Swiper spaceBetween={50} slidesPerView={5} loop={true} autoplay={true}>
          {sliderImage?.map((sliderImage) => (
            <SwiperSlide key={sliderImage?.id}>
              <Image
                src={sliderImage?.url}
                alt={sliderImage?.alt}
                height="39"
                width="150"
                className="h-[39px] w-[150px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
