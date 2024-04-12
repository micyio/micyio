"use client";

import { useEffect, useState } from "react";
import { serviceData } from "./data";

export function ServiceSection() {
  const [active, setActive] = useState<number>(4);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="rounded-t-[100px] bg-[#F6F6F680] py-[100px] dark:bg-[#141313]"
      id="service"
    >
      <div className="container">
        <div className="mx-auto mb-14 max-w-[715px] text-center">
          <h1 className="heading-two mb-5">
            Our <span className="text-primary">Service</span>
          </h1>
          <p>
            Discover the diverse solutions offered by Micyio Solutions, designed
            to fuel your business growth in the digital realm. From web
            development and mobile apps to digital marketing and IT consulting,
            we provide comprehensive services tailored to your needs. Experience
            innovation, quality, and unmatched customer satisfaction with Micyio
            Solutions.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {serviceData?.map((service, index) => (
            <div
              onMouseOver={() => setActive(index)}
              key={service.id}
              className={`${active === index ? "bg-gradient-to-b text-white" : ""} group col-span-12 rounded-l-lg rounded-t-lg from-primary to-deepOrange p-5 transition-all  hover:bg-gradient-to-b hover:text-white sm:col-span-6  lg:col-span-4`}
            >
              <div>
                <p className="flex border-b border-gray-100 pb-3 font-sans font-bold lg:text-base xl:text-[26px]">
                  <div
                    className={`${active === index ? " text-white" : ""} mr-3 inline-block text-primary group-hover:text-white xl:mr-7`}
                  >
                    {service.icon}
                  </div>
                  {service.title}
                </p>
              </div>
              <p className="mt-3 xl:ml-14 ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
