export default function SectionHeading({
  index,
  label,
  title,
  subtitle,
  align = "left",
  action,
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`reveal mb-10 flex flex-col gap-6 md:mb-14 ${
        isCenter ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={`flex max-w-2xl flex-col gap-4 ${isCenter ? "items-center" : ""}`}>
        {(index || label) && (
          <span className="eyebrow">
            {index && <span className="text-brand-ink">{index}</span>}
            {index && label && <span className="h-px w-6 bg-border" aria-hidden="true" />}
            {label && <span>{label}</span>}
          </span>
        )}
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
