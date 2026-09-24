import { content } from "@/lib/content";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CheckIcon from "@/components/ui/CheckIcon";

const { benefits, anchors } = content;

export default function Benefits() {
  return (
    <section id={anchors.benefits} className="scroll-mt-16 py-16 lg:py-24">
      <Container>
        <SectionTitle>{benefits.title}</SectionTitle>
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:mt-12">
          {benefits.items.map((b) => (
            <li key={b.title} className="rounded-card border border-line bg-surface p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <h3 className="text-base text-ink">{b.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{b.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}