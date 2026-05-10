"use client";
import React, { useState } from "react";
import OpenSourceCard from "./OpenSourceCard";
import { PULLREQUESTS } from "@/lib/OpenSource";

const OpenSource = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (activeIndex < PULLREQUESTS.length - 1)
      setActiveIndex((prev) => prev + 1);
  };

  return (
    <section className="w-full flex items-center px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950">
      <div className="w-full max-w-5xl mx-auto gap-12 md:gap-16 py-10 md:py-10">
        <h1 className="text-2xl font-space mb-3 font-semibold text-neutral-900 dark:text-neutral-100">
          Open Source Contributions
        </h1>

        <OpenSourceCard
          data={PULLREQUESTS[activeIndex]}
          index={activeIndex}
          total={PULLREQUESTS.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
};

export default OpenSource;
