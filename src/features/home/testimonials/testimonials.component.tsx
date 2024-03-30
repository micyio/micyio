import { TestimonialSlider } from "./testimonial-slider.component";

export function TestimonialsSection() {
  return (
    <div className="container">
      <div className="mx-auto mb-14 max-w-[715px] text-center">
        <h1 className="heading-two mb-5">
          Our Clients <span className="text-primary">Feedback</span>
        </h1>
        <p>
          Discover the diverse solutions offered by Micyio Solutions, designed
          to fuel your business growth in the digital realm. From web
          development and mobile apps to digital marketing and IT consulting, we
          provide comprehensive services tailored to your needs. Experience
          innovation, quality, and unmatched customer satisfaction with Micyio
          Solutions.
        </p>
      </div>
      <TestimonialSlider />
    </div>
  );
}
