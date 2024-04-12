import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export function CTA() {
  return (
    <div className="container" id="contact">
      <div className="grid grid-cols-12 items-center gap-6 rounded-3xl border bg-[#F6F6F633] pb-12 text-center dark:border-[#3D3D3D] dark:bg-[#141313] sm:pb-0 sm:text-left">
        <div className="col-span-12 sm:col-span-1"></div>
        <div className="col-span-12 mx-auto  sm:col-span-4">
          <Image
            src="/images/cta/one.png"
            alt=""
            height={354}
            width={370}
            className="h-[354px] w-[370px] object-cover"
          />
        </div>
        <div className="col-span-12 p-4 sm:col-span-7">
          <h4 className="font-sans text-[28px] font-bold text-primary">
            Got a project mind?
          </h4>
          <h1 className="heading-three">Let’s discuss details</h1>
          <div className=" mx-auto mt-10 flex w-fit gap-5 sm:mx-0">
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
    </div>
  );
}
