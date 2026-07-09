"use client";

import { CERTIFICATES } from "@/lib/Certificates";
import { ArrowUpRight, EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Certificates = () => {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 bg-white dark:bg-neutral-950">
      <div className="w-full max-w-5xl mx-auto py-16 md:py-10">
        <h2 className="text-2xl font-space mb-3 font-semibold">
          Certificates &amp; Achievements
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-4">
          {CERTIFICATES.slice(0, 5).map((certificate, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(certificate.image)}
              className=" break-inside-avoid w-full text-left rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-out"
            >
              <div className="relative w-full h-45 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="px-4 py-4 flex flex-col gap-1">
                <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                  {certificate.issuer}
                </p>

                <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-white">
                  {certificate.title}
                </h3>

                {certificate.description && (
                  <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed mt-0.5">
                    {certificate.description}
                  </p>
                )}

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 tabular-nums font-medium">
                    {certificate.date}
                  </span>

                  <span className="text-[12px] font-medium text-neutral-600 dark:text-neutral-400 flex items-center gap-1 border px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/50 cursor-pointer">
                    View
                    <EyeIcon size={15} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="w-full flex justify-center mt-5">
          <Link
            href="/certificates"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 ease-out"
          >
            <span>View all certificates</span>

            <ArrowUpRight
              size={16}
              className=" transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 "
            />
          </Link>
        </div>

        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className=" absolute -top-4 -right-4 z-10 w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-xs hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-150 "
                aria-label="Close"
              >
                ✕
              </button>

              <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src={activeImage}
                  alt="Certificate preview"
                  className="w-full max-h-[78vh] object-contain block bg-white dark:bg-black"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
