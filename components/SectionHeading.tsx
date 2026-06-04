type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-orange">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-4xl font-black leading-[1.02] tracking-[-0.07em] text-white sm:text-5xl lg:text-[3.35rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
