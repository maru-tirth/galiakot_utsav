import { cn } from "@/lib/cn";

/**
 * The honest empty state.
 *
 * Used wherever the mandal has not yet supplied verified information.
 * It is deliberately designed — not a broken-looking gap — but it never
 * pretends that content exists.
 */
export function AwaitingNote({ children, tone = "dark", className }) {
  const onDark = tone === "dark";

  return (
    <p
      className={cn(
        "flex items-start gap-3 rounded-sm border px-4 py-3 text-sm leading-relaxed",
        onDark
          ? "border-gold/25 bg-gold/[0.06] text-ivory/70"
          : "border-crimson/20 bg-crimson/[0.04] text-charcoal-soft",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "mt-[0.45em] h-1.5 w-1.5 shrink-0 rotate-45",
          onDark ? "bg-gold" : "bg-crimson",
        )}
      />
      <span>{children}</span>
    </p>
  );
}

export default AwaitingNote;
