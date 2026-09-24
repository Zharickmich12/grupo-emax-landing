import { content } from "@/lib/content";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const { problem } = content;

export default function Problem() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionTitle>{problem.title}</SectionTitle>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6 lg:mt-12">
          {problem.items.map((item, i) => (
            <li key={item.title} className="rounded-card border border-line bg-surface p-6">
              <span className="text-xl font-bold text-brand-900">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}