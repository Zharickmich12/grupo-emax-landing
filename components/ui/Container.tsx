type Props = { children: React.ReactNode; className?: string };

export default function Container({ children, className = "" }: Props) {
  return (
    <div className="w-full px-gutter lg:px-gutter-lg">
      <div className={`mx-auto max-w-page ${className}`}>{children}</div>
    </div>
  );
}