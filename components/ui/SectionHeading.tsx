interface SectionHeadingProps {
  title: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <div
        className={`mb-5 flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-12 bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-olive" />
      </div>
      <h2 className="heading-lg">{title}</h2>
    </div>
  );
}
