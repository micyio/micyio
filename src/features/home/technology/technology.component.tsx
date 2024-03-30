import { TechList } from "./tech-list.component";

export function TechnologySection() {
  return (
    <div className="rounded-t-[100px] bg-[#F6F6F680] py-[100px] dark:bg-[#141313]">
      <div className="container">
        <div className="grid grid-cols-12 ">
          <div className="col-span-8">
            <h1 className="heading-two mb-5">
              Tools & <span className="text-primary">Technologies</span>
            </h1>
            <p>
              Explore the tools and technologies utilized by Micyio Solutions to
              deliver cutting-edge solutions tailored to your needs. Our
              expertise extends across a wide range of platforms, frameworks,
              and programming languages, ensuring that we leverage the best
              tools available to achieve your project goals.
            </p>
          </div>
        </div>
        <div className="h-[50px]" />
        <TechList />
      </div>
    </div>
  );
}
