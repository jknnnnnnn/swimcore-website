import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: "instagram" as const },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: "tiktok" as const },
];

export function SocialFollowSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-10">
          <SectionHeading
            eyebrow="Instagram / TikTok"
            title="Śledź nasz progres"
            description="Na naszych profilach pokazujemy treningi, technikę pływania, błędy najczęściej popełniane przez początkujących oraz postępy naszych zawodników."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} SwimCore`}
                className="group flex items-center justify-between rounded-2xl border border-ink/10 bg-light px-5 py-5 text-ink shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange/50 hover:bg-orange hover:text-white hover:shadow-glow"
              >
                <span className="flex items-center gap-3 text-base font-black">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white transition-colors duration-300 group-hover:bg-white group-hover:text-orange">
                    <Icon name={link.icon} className="h-5 w-5" />
                  </span>
                  {link.label}
                </span>
                <Icon name="arrow" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
