import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 font-sans text-[0.8125rem] font-semibold uppercase tracking-[0.14em] " +
  "min-h-11 px-6 py-3 rounded-sm transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  /* The one true call to action. Used sparingly so it keeps its weight. */
  primary:
    "bg-vermilion text-ivory shadow-[0_10px_30px_-12px_rgba(165,31,36,.9)] " +
    "hover:bg-[#b82329] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-14px_rgba(165,31,36,.95)] " +
    "active:translate-y-0 active:bg-[#8e1a1f]",

  /* Secondary on dark bands */
  outlineGold:
    "border border-gold/45 text-gold-soft hover:border-gold hover:bg-gold/10 " +
    "hover:-translate-y-0.5 active:translate-y-0",

  /* Secondary on ivory bands */
  outlineDark:
    "border border-charcoal/25 text-charcoal hover:border-crimson hover:text-crimson " +
    "hover:bg-crimson/5 hover:-translate-y-0.5 active:translate-y-0",

  /* Quiet inline action */
  ghost:
    "px-0 min-h-0 py-1 text-crimson border-b border-crimson/30 rounded-none " +
    "hover:border-crimson hover:text-vermilion",

  ghostLight:
    "px-0 min-h-0 py-1 text-gold-soft border-b border-gold/30 rounded-none " +
    "hover:border-gold hover:text-gold",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  external = false,
  ...rest
}) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
