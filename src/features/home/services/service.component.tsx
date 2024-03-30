"use client";

import { ReactNode, useEffect, useState } from "react";
import { GoChecklist } from "react-icons/go";

type TServiceData = {
  id: number;
  title: string;
  icon: ReactNode;
  description: string;
};

const serviceData: TServiceData[] = [
  {
    id: 1,
    title: "Custom Development",
    icon: <GoChecklist size={32} />,
    description: `Tailored software solutions designed to address unique business
    requirements, enhancing efficiency, productivity, and scalability
    while aligning with your long-term objectives.`,
  },
  {
    id: 2,
    title: "Design & Development",
    icon: <GoChecklist size={32} />,
    description: `Expertly crafted websites that combine captivating design with seamless functionality, ensuring an exceptional user experience across all devices and platforms.
    `,
  },
  {
    id: 3,
    title: "App Development",
    icon: <GoChecklist size={32} />,
    description: `Expertly crafted websites that combine captivating design with seamless functionality, ensuring an exceptional user experience across all devices and platforms.
    `,
  },
  {
    id: 4,
    title: "Digital Marketing",
    icon: <GoChecklist size={32} />,
    description: `Comprehensive digital marketing strategies encompassing SEO, SEM, social media, and content marketing to elevate your online presence, attract targeted traffic, and achieve measurable results.
    `,
  },
  {
    id: 5,
    title: "IT Consulting & Solutions",
    icon: <GoChecklist size={32} />,
    description: `Strategic IT consulting services to align technology initiatives with business objectives, optimize infrastructure, enhance bersecurity, and leverage emerging technologies for sustainable growth.
    `,
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: <GoChecklist size={32} />,
    description: `Intuitive and visually appealing user interfaces designed to optimize user interaction and satisfaction, with a focus on usability, accessibility, and brand identity.
    `,
  },
  {
    id: 7,
    title: "E-commerce",
    icon: <GoChecklist size={32} />,
    description: ` End-to-end Shopify development solutions tailored to your e-commerce needs, including custom theme development, app integration, payment gateway setup, and ongoing support and maintenance.`,
  },
  {
    id: 8,
    title: "Cloud Computing",
    icon: <GoChecklist size={32} />,
    description: `Scalable cloud-based solutions designed to streamline operations, improve accessibility, and enhance collaboration, leveraging the power of cloud technology to drive innovation and agility within your organization.`,
  },
  {
    id: 9,
    title: "WordPress CMS",
    icon: <GoChecklist size={32} />,
    description: `Tailored software solutions designed to address unique business
    requirements, enhancing efficiency, productivity, and scalability
    while aligning with your long-term objectives.`,
  },
];

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
    <div className="rounded-t-[100px] bg-[#F6F6F680] py-[100px] dark:bg-[#141313]">
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
              className={`${active === index ? "bg-gradient-to-b text-white" : ""} group col-span-4 rounded-l-lg rounded-t-lg from-primary to-deepOrange p-5  transition-all hover:bg-gradient-to-b hover:text-white`}
            >
              <div>
                <p className=" border-b border-gray-100 pb-3 font-sans text-[26px] font-bold">
                  <div
                    className={`${active === index ? " text-white" : ""} mr-7 inline-block text-primary group-hover:text-white`}
                  >
                    {service.icon}
                  </div>
                  {service.title}
                </p>
              </div>
              <p className="ml-14 mt-3 text-justify">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
