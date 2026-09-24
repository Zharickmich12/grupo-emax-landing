import { content } from "@/lib/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const { hero, anchors } = content;
const SCALE = 160;

export default function Hero() {
  const { before, after } = hero.chart;

  return (
    <section className="bg-brand-50 py-12 md:py-16 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-900">
            {hero.badge}
          </span>
          <h1 className="mt-5">{hero.title}</h1>
          <p className="mt-5 max-w-xl text-base text-ink-muted lg:text-lg">{hero.subtitle}</p>
          <Button href={`#${anchors.contact}`} className="mt-8 w-full md:w-auto">
            {hero.cta}
          </Button>
        </div>

        <div className="rounded-card border border-line bg-surface p-5 shadow-sm md:p-6">
          <h3 className="text-base text-ink">{hero.chart.title}</h3>

          <div className="mt-5 flex items-baseline justify-between text-sm">
            <span className="font-medium text-ink-muted">{before.label}</span>
            <span className="font-bold text-ink">{before.display}</span>
          </div>
          <div className="mt-2 h-4 overflow-hidden rounded-sm bg-surface-alt">
            <div className="h-full bg-ink-muted" style={{ width: `${(before.amount / SCALE) * 100}%` }} />
          </div>

          <div className="mt-5 flex items-baseline justify-between text-sm font-bold text-accent">
            <span>{after.label}</span>
            <span>
              {after.display} {after.note}
            </span>
          </div>
          <div className="mt-2 h-4 overflow-hidden rounded-sm bg-surface-alt">
            <div className="h-full bg-accent" style={{ width: `${(after.amount / SCALE) * 100}%` }} />
          </div>
        </div>
      </Container>
    </section>
  );
}