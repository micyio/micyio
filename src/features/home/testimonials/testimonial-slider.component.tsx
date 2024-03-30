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
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-2"></div>
            <div className="col-span-3">
              <Image
                src={testimonial?.thumbnail}
                alt={testimonial?.author}
                height={350}
                width={350}
                className="h-[350px] w-[350px] rounded-lg object-cover"
              />
            </div>
            <div className="col-span-5 flex flex-row gap-4 py-7">
              <div>
                <FaQuoteLeft className="text-4xl text-gray-500" />
              </div>
              <div className="flex flex-col justify-between  gap-6">
                <div>
                  <p className="mb-5 line-clamp-6 font-lato text-lg">
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
