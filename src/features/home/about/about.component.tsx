import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export function AboutSection() {
  return (
    <div className="container">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <Image
            src="/images/about/about.png"
            alt="about"
            height={500}
            width={500}
            className="h-[500px] w-[500px] object-cover"
          />
        </div>
        <div className="col-span-6">
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
          <ul className="my-10  columns-2 font-lato text-lg font-semibold leading-[50px]">
            <li className="d-flex items-center">
              <Image
                src="/images/about/checkmark.svg"
                alt="Checkmark"
                width={24}
                height={25}
                className="mr-2 inline-block h-6 w-6"
              />
              User-Centric Design
            </li>
            <li className="d-flex items-center">
              <Image
                src="/images/about/checkmark.svg"
                alt="Checkmark"
                width={24}
                height={25}
                className="mr-2 inline-block h-6 w-6"
              />
              Collaborative Partnership
            </li>
            <li className="d-flex items-center">
              <Image
                src="/images/about/checkmark.svg"
                alt="Checkmark"
                width={24}
                height={25}
                className="mr-2 inline-block h-6 w-6"
              />
              Digital Transformation
            </li>
            <li className="d-flex items-center">
              <Image
                src="/images/about/checkmark.svg"
                alt="Checkmark"
                width={24}
                height={25}
                className="mr-2 inline-block h-6 w-6"
              />
              Innovative Solutions
            </li>
            <li className="d-flex items-center">
              <Image
                src="/images/about/checkmark.svg"
                alt="Checkmark"
                width={24}
                height={25}
                className="mr-2 inline-block h-6 w-6"
              />
              Custom Software Development
            </li>
            <li className="d-flex items-center">
              <Image
                src="/images/about/checkmark.svg"
                alt="Checkmark"
                width={24}
                height={25}
                className="mr-2 inline-block h-6 w-6"
              />
              Ongoing Support and Maintenance
            </li>
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
