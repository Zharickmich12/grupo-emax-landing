"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const { brand, header, anchors } = content;

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <Container>
        <div className="relative flex h-16 items-center justify-between lg:h-[4.5rem]">
          <a href="#" className="text-xl font-extrabold text-brand-900">
            {brand.name}
          </a>

          <nav className="hidden items-center gap-8 md:absolute md:left-1/2 md:flex md:-translate-x-1/2 lg:static lg:translate-x-0">
            {header.nav.map((item) => (
              <a key={item.anchor} href={`#${item.anchor}`} className="text-sm font-medium text-ink-muted hover:text-brand-900">
                {item.label}
              </a>
            ))}
          </nav>

          <Button href={`#${anchors.contact}`} className="hidden md:inline-flex">
            {header.cta}
          </Button>

          <button
            type="button"
            aria-label={header.menuLabel}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 rounded-btn p-2 text-brand-900 md:hidden"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="flex flex-col gap-1 border-t border-line py-4 md:hidden">
            {header.nav.map((item) => (
              <a key={item.anchor} href={`#${item.anchor}`} onClick={close} className="rounded-btn px-2 py-3 text-base font-medium text-ink hover:bg-surface-alt">
                {item.label}
              </a>
            ))}
            <Button href={`#${anchors.contact}`} onClick={close} fullWidth className="mt-2">
              {header.cta}
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}