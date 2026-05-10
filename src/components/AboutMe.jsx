import React from "react";

const AboutMe = () => {
  return (
    <section className="w-full flex items-center px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950">
      <div className="w-full max-w-5xl mx-auto gap-12 md:gap-16 py-10 md:pt-20 md:pb-10">
        <h1 className="text-2xl font-space mb-2 font-semibold">About Me</h1>
        <p className="text-[15px] sm:text-base leading-relaxed text-neutral-600 dark:text-gray-300 dark:font-light">
          Full-Stack Developer with a strong foundation in Computer Science,
          programming, and problem-solving. Skilled in designing and developing
          scalable applications, integrating databases, and building APIs.
          Passionate about applying technical expertise to real-world challenges
          while continuously learning and adapting to emerging technologies.
          Committed to contributing to innovative projects and delivering
          impactful solutions across both frontend and backend development.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
