import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export function Hero() {
  return (
    <div className="container">
      <h1 className="heading-one mx-auto mt-40 max-w-[871px]  text-center">
        We are a creative <span className="text-primary">agency</span> innovate
        with Micyio.
      </h1>
      <p className="mx-auto mt-5 max-w-[635px] text-center">
        Embark on a digital journey with Micyio Solutions. Where innovation
        meets simplicity, discover transformative tech experiences for a
        future-driven world
      </p>
      <div className="mx-auto mt-10 flex w-fit gap-5">
        <button className="button-primary flex items-center justify-between gap-2">
          Schedule a call
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            <GoArrowUpRight />
          </span>
        </button>
        <button className="button-outline">See portfolio</button>
      </div>
      <Image
        src="/images/video-thumbnail.png"
        alt="video thumbnail"
        width="1220"
        height="560"
        className=" mt-[100px] h-[560px] w-[1220px] object-cover"
      />
    </div>
  );
}
