import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { listItems } from "./data";

export function AboutSection() {
  return (
    <div className="container" id="about">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <Image
            src="/images/about/about.png"
            alt="about"
            height={500}
            width={500}
            layout="responsive"
            className="object-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-1" />
        <div className="col-span-12 md:col-span-6">
          <p className=" font-sans text-[28px] font-bold text-primary">
            About Micyio
          </p>
          <h1 className="heading-two mb-5">
            Micyio`s Dedication to <span className="text-primary">Client</span>{" "}
            Satisfaction
          </h1>
          <p>
            Micyio is a forward-thinking tech agency driven by innovation,
            integrity, and a passion for empowering businesses to thrive in the
            digital age. With a diverse team of skilled professionals, we bring
            a wealth of experience and expertise to every project, ensuring that
            our clients receive best-in-class solutions tailored to their
            specific needs.
          </p>

          <ul className="my-10 columns-2 space-y-4">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 font-lato text-sm font-semibold  leading-8  xl:text-lg"
              >
                <Image
                  src="/images/about/checkmark.svg"
                  alt="Checkmark"
                  width={24}
                  height={25}
                  className="mr-2 mt-1 inline-block h-6 w-6"
                />
                {item}
              </li>
            ))}
          </ul>

          <button className="button-primary flex w-[160px] items-center justify-between gap-2">
            Read More
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <GoArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
