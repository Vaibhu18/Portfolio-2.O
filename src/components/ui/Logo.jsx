import Image from "next/image";
import { SITE } from "@/lib/site";

// Brand lockup: the </> app-icon mark + "vcode" wordmark with a PRO tag.
export default function Logo({ size = 34, showTag = true, className = "" }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={SITE.logo}
        alt=""
        width={size}
        height={size}
        priority
        className="shrink-0 rounded-[28%] ring-1 ring-black/5 transition-transform duration-300 group-hover:-rotate-6 dark:ring-white/10"
      />
      <span className="flex items-center gap-1.5 text-[1.05rem] font-bold tracking-tight">
        {SITE.handle}
        {showTag && (
          <span className="rounded-md bg-brand-soft px-1.5 py-px text-[10px] font-semibold tracking-wide text-brand-ink">
            PRO
          </span>
        )}
      </span>
    </span>
  );
}
