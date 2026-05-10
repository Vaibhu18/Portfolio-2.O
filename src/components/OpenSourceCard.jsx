"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OpenSourceCard = ({ data, index, total, onPrev, onNext }) => {
  const Line = ({ number, children }) => (
    <div className="flex gap-4">
      <span className="w-6 text-right text-neutral-500 select-none font-medium">
        {String(number).padStart(2, "0")}
      </span>
      <div className="flex-1">{children}</div>
    </div>
  );

  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div className="relative group">
      <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-green-500/20 via-transparent to-green-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

      <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-xl transition duration-300 group-hover:shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-200 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            {data.Org}-cloud — bash
          </span>
        </div>

        <div
          key={index}
          className="bg-neutral-50 dark:bg-neutral-950 font-mono text-sm px-4 py-5 space-y-4"
        >
          <Line number={1}>
            <span className="text-pink-500 font-medium">Commit: </span>
            <span className="text-green-600 dark:text-green-400">
              {data.Commit.slice(0, 20)}
            </span>
          </Line>

          <Line number={2}>
            <span className="text-neutral-700 dark:text-neutral-400 font-medium">
              Org:
            </span>{" "}
            <span className="text-red-500 dark:text-red-400 font-medium">
              {data.Org}
            </span>{" "}
            <span className="ml-4 text-neutral-700 dark:text-neutral-400 font-medium">
              Date:
            </span>{" "}
            <span className="text-[#ff8000] font-medium">{data.Date}</span>
          </Line>

          <Line number={3}>
            <div className="border-l-4 border-green-500 bg-neutral-200/50 dark:bg-neutral-900 p-4 rounded-md w-full transition hover:scale-[1.01]">
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {data.Issue}
              </p>

              <div className="flex items-center gap-3 mt-2">
                <span className="px-3 py-1 text-[11px] rounded bg-green-100 text-green-500 dark:bg-green-900/50 dark:text-green-400 uppercase tracking-wider flex items-center gap-1 font-medium">
                  <div className="bg-green-500 size-1.5 rounded-full animate-pulse"></div>
                  {data.Status}
                </span>
                <span className="text-xs text-neutral-500 italic font-medium">
                  // verified by github-actions
                </span>
              </div>
            </div>
          </Line>

          <Line number={4}>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {data.Desc}
            </p>
          </Line>

          <Line number={5}>
            <div className="flex">
              <Link
                href={data.Link}
                target="_blank"
                className="flex items-center gap-2 text-green-500 "
              >
                ${" "}
                <span className="border px-5 py-2 text-xs border-green-500 font-medium transition-all duration-200 hover:bg-green-500 hover:text-white group-hover/link:shadow-lg">
                  View Merged →
                </span>
              </Link>
            </div>
          </Line>

          <Line number={6}>
            <div className="flex items-center gap-2">
              <span className="text-neutral-500">(END)</span>
              <span className="inline-block w-2 h-4 bg-green-500 animate-pulse"></span>
            </div>
          </Line>
        </div>

        <div className="py-3 flex justify-center items-center gap-6 border-t border-neutral-200 dark:border-neutral-800">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={`p-2 rounded-md transition ${
              isFirst
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-110"
            }`}
          >
            <ChevronLeft />
          </button>

          <span className="text-sm font-medium tracking-wide">
            {index + 1} / {total}
          </span>

          <button
            onClick={onNext}
            disabled={isLast}
            className={`p-2 rounded-md transition ${
              isLast
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-110"
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceCard;
