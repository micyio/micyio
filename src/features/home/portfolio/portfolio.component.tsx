"use client";

import { Button } from "@/features/ui";
import { useState } from "react";
import { categoryList, sliderImage } from "./data";
import { PortfolioSlider } from "./portfolio-slider.component";

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSliderImages = sliderImage.filter((image) =>
    activeTab === "all" ? true : image?.category.includes(activeTab)
  );

  return (
    <div className="container" id="portfolio">
      <div className="grid grid-cols-12">
        <div className="col-span-12 text-center lg:col-span-8 lg:text-left">
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
        <div className="flex flex-wrap gap-2 lg:gap-4">
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
