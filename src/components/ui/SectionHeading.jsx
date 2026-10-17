import { cn } from "@/lib/cn";
import { LotusDivider } from "./Ornament";
import Reveal from "./Reveal";

/**
 * One focal heading per section: eyebrow → title → optional lede.
 * `tone` keeps colour decisions in one place rather than at each call site.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "dark", // "dark" = on maroon, "light" = on ivory
  align = "left",
  divider = false,
  as: Heading = "h2",
  className,
}) {
  const onDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal
          as="p"
          className={cn(
            "eyebrow mb-4",
            onDark ? "text-gold" : "text-crimson",
          )}
        >
          {eyebrow}
        </Reveal>
      ) : null}

      <Reveal delay={60}>
        <Heading
          className={cn(
            "display-2 text-balance",
            onDark ? "text-ivory" : "text-charcoal",
          )}
        >
          {title}
        </Heading>
      </Reveal>

      {divider ? (
        <Reveal delay={110}>
          <LotusDivider
            className={cn(
              "mt-6",
              align === "center" && "mx-auto",
              onDark ? "text-gold" : "text-crimson",
            )}
          />
        </Reveal>
      ) : null}

      {lede ? (
        <Reveal
          as="p"
          delay={140}
          className={cn(
            "lede mt-6",
            align === "center" && "mx-auto",
            onDark ? "text-ivory/75" : "text-charcoal-soft",
          )}
        >
          {lede}
        </Reveal>
      ) : null}
    </div>
  );
}

export default SectionHeading;
