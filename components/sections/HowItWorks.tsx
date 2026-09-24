import { content } from "@/lib/content";
import Container from "@/components/ui/Container";

const { howItWorks, anchors } = content;

export default function HowItWorks() {
  return (
    <section id={anchors.howItWorks} className="scroll-mt-16 bg-brand-50 py-16 lg:py-24">
      <Container>
        <h2 className="text-center">{howItWorks.title}</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.steps.map((s, i) => (
            <li key={s.title} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg text-ink">{s.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">{s.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}