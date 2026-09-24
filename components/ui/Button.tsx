import type { ComponentProps } from "react";

type Common = { fullWidth?: boolean; className?: string; children: React.ReactNode };
type AnchorProps = Common & { href: string } & Omit<ComponentProps<"a">, keyof Common | "href">;
type ButtonProps = Common & { href?: undefined } & Omit<ComponentProps<"button">, keyof Common>;

const base =
  "inline-flex items-center justify-center rounded-btn bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover";

export default function Button(props: AnchorProps | ButtonProps) {
  if (props.href !== undefined) {
    const { fullWidth, className = "", children, ...rest } = props;
    return (
      <a className={`${base} ${fullWidth ? "w-full" : ""} ${className}`} {...rest}>
        {children}
      </a>
    );
  }
  const { fullWidth, className = "", children, ...rest } = props;
  return (
    <button className={`${base} ${fullWidth ? "w-full" : ""} ${className}`} {...rest}>
      {children}
    </button>
  );
}