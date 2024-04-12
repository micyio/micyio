import { Button } from "@/features/ui";
import { GoArrowUpRight } from "react-icons/go";
import { pricingData } from "./data";

export function PricingCard() {
  return (
    <div className="grid min-h-[930px] gap-3 md:grid-cols-2 lg:grid-cols-3 ">
      {pricingData?.map((price) => (
        <div
          key={price?.id}
          className="relative flex flex-col justify-between gap-4 overflow-hidden rounded-3xl border  bg-white p-10 shadow-md hover:border-primary dark:border-[#141313]  dark:bg-[#030303] dark:hover:border-primary"
        >
          <div className="dark:bg flex flex-col gap-5">
            {price?.isPopular ? (
              <span className="absolute -right-[30px] top-[18px] flex h-10 w-[180px] rotate-[37deg] items-center justify-center bg-primary  text-lg font-semibold uppercase text-black">
                {price?.popularText}
              </span>
            ) : null}
            <div className="flex h-12 w-[120px] items-center justify-center rounded-3xl border border-[#B0B0B0] bg-[#F6F6F6]  dark:bg-[#141313]">
              {price?.name}
            </div>

            <p>
              {price?.pricePrefix}
              <span className="font-lato text-[56px] font-bold text-primary">
                {price?.priceSymbol}
                {price?.price}
              </span>
              {price?.pricePostfix}
            </p>
            <p>{price?.priceDescription}</p>
            <hr />
            <h3 className="text-lg font-semibold">{price?.featureTitle}</h3>
            <ul className="space-y-5">
              {price?.features?.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
          </div>
          <div>
            <Button variant="dynamic" className="group flex items-center pr-2">
              {price?.buttonTitle}{" "}
              <span className=" ml-5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-black group-hover:bg-white">
                <GoArrowUpRight />
              </span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
