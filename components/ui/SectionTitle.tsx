type Props = { children: React.ReactNode; subtitle?: string; id?: string };

export default function SectionTitle({ children, subtitle, id }: Props) {
  return (
    <div className="text-left md:text-center">
      <h2 id={id}>{children}</h2>
      {subtitle && (
        <p className="mt-4 text-base text-ink-muted md:mx-auto md:max-w-2xl md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}