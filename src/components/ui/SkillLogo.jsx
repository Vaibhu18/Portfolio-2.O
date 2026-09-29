import Image from "next/image";

export default function SkillLogo({ skill, size = 28, className = "" }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-xl border border-border bg-surface-2 p-2 ${
        skill.plate ? "dark:bg-zinc-100" : ""
      } ${className}`}
    >
      <Image
        src={skill.image}
        width={size}
        height={size}
        alt=""
        className={`object-contain ${skill.invertDark ? "dark:invert" : ""}`}
        style={{ width: size, height: size }}
      />
    </span>
  );
}
