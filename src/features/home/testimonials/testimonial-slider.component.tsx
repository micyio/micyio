"use client";

import { StarRating } from "@/features/helper/methods";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "./data";

import "swiper/css";
import "swiper/css/navigation";

export function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      slidesPerView={1}
      loop={true}
      autoplay={true}
    >
      {testimonialData?.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-12 sm:gap-10">
            <div className="col-span-12 xl:col-span-2" />
            <div className="col-span-12 sm:col-span-6 xl:col-span-3">
              <Image
                src={testimonial?.thumbnail}
                alt={testimonial?.author}
                height={350}
                width={350}
                className="h-[350px] w-[480px] rounded-lg object-cover sm:w-[350px]"
              />
            </div>
            <div className="col-span-12 flex flex-row gap-4 py-7 sm:col-span-6 xl:col-span-5">
              <div>
                <FaQuoteLeft className="text-4xl text-gray-500" />
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="mb-5 font-lato text-lg sm:line-clamp-6">
                    {testimonial?.comment}
                  </p>
                  <StarRating rating={testimonial?.rating} />
                </div>
                <div>
                  <h4 className="text-[28px] font-bold">
                    {testimonial?.author}
                  </h4>
                  <p>{testimonial?.designation}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
