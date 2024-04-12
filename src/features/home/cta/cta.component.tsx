import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export function CTA() {
  return (
    <div
      className="container flex items-center gap-[80px] rounded-3xl border bg-[#F6F6F633] py-[50px] pl-[130px] pr-[150px] dark:border-[#3D3D3D] dark:bg-[#141313]"
      id="contact"
    >
      <Image
        src="/images/cta/one.png"
        alt=""
        height={354}
        width={370}
        className="h-[354px] w-[370px] object-cover"
      />
      <div>
        <h4 className="font-sans text-[28px] font-bold text-primary">
          Got a project mind?
        </h4>
        <h1 className="heading-two">Let’s discuss details</h1>
        <div className=" mt-10 flex w-fit gap-5">
          <button className="button-primary flex items-center justify-between gap-2">
            Schedule a call
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <GoArrowUpRight />
            </span>
          </button>
          <button className="button-outline">Ask question</button>
        </div>
      </div>
    </div>
  );
}
