import { content } from "@/lib/content";
import Container from "@/components/ui/Container";

const { brand, footer } = content;

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-on-dark">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xl font-extrabold text-white">{brand.name}</p>
          <ul className="flex flex-col gap-3 text-sm md:flex-row md:gap-6">
            {footer.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-white hover:text-on-dark">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-line-dark pt-8 text-sm md:flex-row md:justify-between">
          <p>{footer.copyright}</p>
          <p className="text-on-dark/60">{footer.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}