"use client";

import Image from "next/image";
import "swiper/css";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderImage } from "./data";

export function Clients() {
  return (
    <div className="bg-gradient-to-b from-primary to-deepOrange py-8 lg:py-12">
      <div className="container">
        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={50}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {sliderImage?.map((sliderImage) => (
            <SwiperSlide key={sliderImage?.id}>
              <Image
                src={sliderImage?.url}
                alt={sliderImage?.alt}
                height="39"
                width="150"
                layout="responsive"
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
