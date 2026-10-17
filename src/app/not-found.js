import { Button } from "@/components/ui/Button";
import { LotusDivider } from "@/components/ui/Ornament";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="on-dark surface-dark flex min-h-[60vh] items-center py-24">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-8">
        <p className="eyebrow text-gold">404</p>
        <h1 className="display-2 mt-4 text-ivory">This page has moved on</h1>
        <LotusDivider className="mx-auto mt-6 text-gold" />
        <p className="lede mt-6 text-ivory/70">
          The page you were looking for isn&rsquo;t here. Return home for
          darshan, our history and the festival gallery.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Return home</Button>
          <Button href="/gallery" variant="outlineGold">
            View the gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
