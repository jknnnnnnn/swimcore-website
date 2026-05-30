import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "baby"
  | "badge"
  | "bolt"
  | "check"
  | "clock"
  | "compass"
  | "heart"
  | "medal"
  | "person"
  | "shield"
  | "spark"
  | "target";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  const paths = {
    arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
    baby: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M6.5 20c.7-3.4 2.4-5.2 5.5-5.2s4.8 1.8 5.5 5.2M5 12.5h3m8 0h3" />
      </>
    ),
    badge: (
      <>
        <path d="m12 3 2.2 2.2 3.1-.4.5 3 2.7 1.6-1.4 2.8 1.4 2.8-2.7 1.6-.5 3-3.1-.4L12 21l-2.2-1.8-3.1.4-.5-3L3.5 15l1.4-2.8-1.4-2.8 2.7-1.6.5-3 3.1.4L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    bolt: <path d="m13 2-7 12h6l-1 8 7-12h-6l1-8Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </>
    ),
    heart: <path d="M20 8.5c0 5.8-8 10-8 10s-8-4.2-8-10c0-4.4 5.4-5.7 8-2.2 2.6-3.5 8-2.2 8 2.2Z" />,
    medal: (
      <>
        <circle cx="12" cy="15" r="5" />
        <path d="m9 10-2-7h10l-2 7m-3 2v6m-3-3h6" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="7.5" r="3" />
        <path d="M5.5 20c.6-4.1 2.7-6.2 6.5-6.2s5.9 2.1 6.5 6.2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5.5c0 4.1-2.3 7-7 9.5-4.7-2.5-7-5.4-7-9.5V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7 15 .6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17Z" />,
    target: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}>
      {paths[name]}
    </svg>
  );
}
