import { content } from "@/lib/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CheckIcon from "@/components/ui/CheckIcon";

const { solution, anchors } = content;
const { process, banner } = solution;

export default function Solution() {
  return (
    <section className="bg-surface-alt py-16 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2>{solution.title}</h2>
            <ul className="mt-8 space-y-5">
              {solution.checks.map((c) => (
                <li key={c.title} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-base text-ink">{c.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{c.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-line bg-surface p-5 md:p-6">
            <h3 className="text-base text-ink">{process.title}</h3>
            <ol className="mt-4 space-y-3">
              {process.steps.map((s, i) => (
                <li key={s.label} className="rounded-btn bg-brand-50 px-4 py-3 text-sm text-ink-muted">
                  <span className="font-bold text-brand-900">
                    {i + 1}. {s.label}
                  </span>{" "}
                  {s.text}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 rounded-panel bg-brand-900 p-6 md:p-8 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl text-white">{banner.title}</h3>
            <p className="mt-2 text-sm text-on-dark">{banner.text}</p>
          </div>
          <Button href={`#${anchors.contact}`} className="shrink-0">
            {banner.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}