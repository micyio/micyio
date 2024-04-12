import { PricingCard } from "./pricing-card.component";

export function Pricing() {
  return (
    <div className="rounded-t-[50px] bg-[#F6F6F680] py-[100px] dark:bg-[#141313] lg:rounded-t-[100px]">
      <div className="container">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 text-center lg:col-span-8 lg:text-left">
            <h1 className="heading-two mb-5">
              Pick the perfect <span className="text-primary">plan</span>
            </h1>
            <p>
              Discover the ideal plan to suit your needs with our
              straightforward selection. Whether you`re a small startup or a
              large enterprise, we have tailored options to match your goals and
              requirements. Explore our plans below and embark on your journey
              to digital success with confidence.
            </p>
          </div>
        </div>
        <div className="h-[50px]" />
        <PricingCard />
      </div>
    </div>
  );
}
