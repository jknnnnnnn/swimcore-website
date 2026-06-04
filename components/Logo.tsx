import Image from "next/image";

type LogoProps = {
  footer?: boolean;
};

export function Logo({ footer = false }: LogoProps) {
  if (!footer) {
    return (
      <a
        href="#"
        aria-label="SwimCore - strona główna"
        className="group block max-w-[180px] shrink-0 bg-transparent p-0 transition-transform duration-300 hover:-translate-y-0.5"
      >
        <Image
          src="/images/swimcore-logo-black-orange-wordmark.png"
          alt="SwimCore - Szkoła Pływania"
          width={222}
          height={40}
          priority
          className="logo-img"
        />
      </a>
    );
  }

  return (
    <a
      href="#"
      aria-label="SwimCore - strona główna"
      className="group block w-60 shrink-0 bg-transparent p-0 transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.42)]"
    >
      <Image
        src="/images/swimcore-logo-black-orange-wordmark.png"
        alt="SwimCore - Szkoła Pływania"
        width={333}
        height={60}
        className="h-auto w-full bg-transparent object-contain"
      />
    </a>
  );
}
