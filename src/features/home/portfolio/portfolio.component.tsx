"use client";
import { Button } from "@/features/ui";
import { useState } from "react";
import { PortfolioSlider } from "./portfolio-slider.component";
import { TSlider } from "./type";

const sliderImage: TSlider[] = [
  {
    id: 1,
    url: "/images/portfolio/one.png",
    alt: "one",
    category: ["ui/ux", "web"],
    link: "#",
    btnText: "View Case Study",
    title: "Project One",
  },
  {
    id: 2,
    url: "/images/portfolio/two.png",
    alt: "two",
    category: ["ui/ux", "web"],
    link: "#",
    btnText: "View Case Study",
    title: "Project Two",
  },
  {
    id: 3,
    url: "/images/portfolio/three.png",
    alt: "three",
    category: ["ui/ux", "web"],
    link: "#",
    btnText: "View",
    title: "Project Three",
  },
  {
    id: 4,
    url: "/images/portfolio/two.png",
    alt: "four",
    category: ["app"],
    link: "#",
    btnText: "View",
    title: "Project Four",
  },
  {
    id: 5,
    url: "/images/portfolio/one.png",
    alt: "five",
    category: ["app"],
    link: "#",
    btnText: "View",
    title: "Project Five",
  },
  {
    id: 6,
    url: "/images/portfolio/three.png",
    alt: "six",
    category: ["ui/ux", "app"],
    link: "#",
    btnText: "View",
    title: "Project Six",
  },
];

const categoryList = ["all", "app", "ui/ux", "web"];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSliderImages = sliderImage.filter((image) =>
    activeTab === "all" ? true : image.category.includes(activeTab)
  );

  return (
    <div className="container">
      <div className="grid grid-cols-12 ">
        <div className="col-span-8">
          <h1 className="heading-two mb-5">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p>
            Explore our curated portfolio showcasing Micyio Solutions diverse
            range of projects. From custom software development to responsive
            website redesigns, each project reflects our commitment to
            delivering tailored solutions that drive results. Discover how we
            can elevate your business with our innovative and client-focused
            approach.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex gap-4">
          {categoryList?.map((category, index) => (
            <Button
              key={index}
              variant="dynamic"
              isActive={activeTab === category}
              className=" uppercase"
              onClick={() => {
                setActiveTab(category);
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        <PortfolioSlider sliderImage={filteredSliderImages} />
      </div>
    </div>
  );
}
