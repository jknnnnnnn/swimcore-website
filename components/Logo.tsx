import Image from "next/image";

type LogoProps = {
  footer?: boolean;
};

export function Logo({ footer = false }: LogoProps) {
  return (
    <a
      href="#"
      aria-label="SwimCore - strona główna"
      className={`group relative block shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.35)] ${
        footer ? "h-32 w-40" : "h-[86px] w-28 sm:h-28 sm:w-36"
      }`}
    >
      <Image
        src="/images/swimcore-logo-transparent-v2.png"
        alt="SwimCore - Szkoła Pływania"
        fill
        sizes={footer ? "160px" : "(min-width: 640px) 144px, 112px"}
        className="object-contain"
      />
    </a>
  );
}
