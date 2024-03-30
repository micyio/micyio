"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { faqData } from "./data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="container">
      <div className="mx-auto mb-14 max-w-[925px] text-center">
        <h1 className="heading-two mb-5">
          Frequently Asked <span className="text-primary">Question</span>
        </h1>
        <p>
          Welcome to our FAQ section, where we address common questions to
          provide clarity and guidance. Browse through these frequently asked
          questions to find quick answers and valuable insights about our
          services, pricing, and processes. If you don`t find the answer you`re
          looking for, feel free to reach out to our dedicated support team for
          personalized assistance. We`re here to ensure your experience with us
          is smooth and seamless from start to finish.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-3xl bg-[#FFFDEA] p-10 dark:bg-[#141313]"
          >
            <h3
              className="flex cursor-pointer justify-between font-sans text-[28px] font-bold "
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </h3>
            {openIndex === index && <p className="mt-5  ">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
