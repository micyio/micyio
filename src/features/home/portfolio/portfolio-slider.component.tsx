"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import "swiper/css";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TSlider } from "./type";

type TProps = {
  sliderImage: TSlider[];
};

export function PortfolioSlider({ sliderImage }: TProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      setActiveIndex((swiperRef.current as any)?.swiper?.activeIndex as number);
    }
  };

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current && (swiperRef.current as any).swiper) {
      (swiperRef.current as any).swiper.slideTo(index);
    }
  };
  return (
    <div className="container">
      <Swiper
        modules={[A11y, Autoplay]}
        loop={true}
        autoplay={true}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
      >
        {sliderImage?.map((sliderImage) => (
          <SwiperSlide key={sliderImage?.id}>
            <div className="relative flex h-[500px] items-center transition duration-700 ease-in-out">
              <div className="group">
                <Image
                  src={sliderImage?.url}
                  alt={sliderImage?.alt}
                  height="306"
                  width="315"
                  className="h-[306px] w-[480px] rounded-xl object-cover transition duration-700 ease-in-out group-hover:h-[390px] sm:w-[315px]"
                />

                <div className="absolute bottom-16 hidden w-full items-center justify-between transition-all group-hover:flex">
                  <div className="mx-4 flex w-full items-center justify-between rounded-lg bg-[#ffffffd3] p-4 pt-6">
                    <div className="text-black">
                      <h4 className="text-lg font-semibold">
                        {sliderImage?.title}
                      </h4>
                      <Link href={sliderImage?.url}>
                        {sliderImage?.btnText ?? "View"}
                      </Link>
                    </div>
                    <div>
                      <div className="flex items-center justify-center text-white">
                        <Link
                          href={sliderImage?.url}
                          className="rounded-full bg-gradient-to-b from-primary to-deepOrange p-[15px]"
                        >
                          <LuArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination absolute bottom-2.5 z-50 flex w-full justify-center gap-2">
          <div className="flex gap-3">
            {sliderImage?.map((_, index) => (
              <div
                key={index}
                className={` h-[10px] w-[10px] cursor-pointer rounded-full border border-primary opacity-100 xl:-mt-4 ${
                  activeIndex === index
                    ? "active bg-primary outline  outline-2 outline-offset-2 outline-primary"
                    : "border border-primary bg-transparent"
                }`}
                onClick={() => handlePaginationClick(index)}
              />
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  );
}
