import React from "react";
import Image from "next/image";

const Education = () => {
  // and Piston API
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950">
      <div className="w-full max-w-5xl mx-auto py-12 md:py-10">
        <h2 className="text-2xl font-space mb-3 font-semibold">Education</h2>

        <div className="space-y-6">
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-start gap-3">
              <Image
                src="https://recruitment.tccollege.org/images/TCCLogo.png"
                alt="Tuljaram Chaturchand College Logo"
                width={44}
                height={44}
                className="rounded-md object-cover border border-gray-200 dark:border-gray-700"
              />

              <div>
                <h3 className="text-sm sm:text-base text-neutral-800 dark:text-gray-100 font-medium dark:font-normal">
                  Tuljaram Chaturchand College of Arts, Science and Commerce,
                  Baramati
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 dark:font-light">
                  Master of Computer Science
                </p>
              </div>
            </div>

            <span className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 whitespace-nowrap">
              2026 – 2028
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <div className="flex items-start gap-3">
              <Image
                src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709278369_llqmhZo9oz.jpg"
                alt="College Logo"
                width={44}
                height={44}
                className="rounded-md object-cover border border-gray-200 dark:border-gray-700"
              />

              <div>
                <h3 className="text-sm sm:text-base text-neutral-800 dark:text-gray-100 font-medium dark:font-normal">
                  Vidya Pratishthan's Arts Science & Commerce College Baramati
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 dark:font-light">
                  Bachelor of Computer Science
                </p>
              </div>
            </div>

            <span className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 whitespace-nowrap">
              2023 – 2026
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <div className="flex items-start gap-3">
              <Image
                src="https://media.licdn.com/dms/image/v2/C4D0BAQHn-mst7Jf8Pw/company-logo_200_200/company-logo_200_200/0/1638195127956/functionup_logo?e=2147483647&v=beta&t=0nmjGtV6aj8aI4ltop8_q2aF7-zMaoeb0gU63pDE3as"
                alt="FunctionUp Logo"
                width={44}
                height={44}
                className="rounded-md object-cover border border-gray-200 dark:border-gray-700"
              />

              <div>
                <h3 className="text-sm sm:text-base text-neutral-800 dark:text-gray-100 font-medium dark:font-normal">
                  Trainee Software Developer — FunctionUp, Noida
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 dark:font-light">
                  Backend Development
                </p>
              </div>
            </div>

            <span className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 whitespace-nowrap">
              2022 – 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
