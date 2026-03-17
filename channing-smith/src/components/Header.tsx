"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS: { href: string; label: string; isRoute?: boolean }[] = [
  { href: "/#about", label: "About" },
  { href: "/#professional-work", label: "Projects" },
  { href: "/#published-works", label: "Published Works" },
  { href: "/#contact", label: "Contact" },
];

type HeaderProps = {
  variant?: "sticky" | "absolute";
};

export default function Header({ variant = "sticky" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClass = variant === "sticky" ? "sticky top-0" : "absolute top-0";

  return (
    <>
      <header
        className={`${headerClass} left-0 w-full p-4 flex justify-between items-center bg-black/50 backdrop-blur-sm z-40`}
      >
        <Link href="/" className="flex items-center" aria-label="Home">
          <Image src="/favicon.ico" alt="" width={32} height={32} />
        </Link>
        <nav className="hidden md:flex gap-6 ml-auto" aria-label="Main">
          {NAV_LINKS.map(({ href, label, isRoute }) =>
            isRoute ? (
              <Link
                key={href}
                href={href}
                className="text-white/90 hover:text-white hover:underline transition-colors"
              >
                {label}
              </Link>
            ) : (
              <a
                key={href}
                href={href}
                className="text-white/90 hover:text-white hover:underline transition-colors"
              >
                {label}
              </a>
            )
          )}
        </nav>
        <button
          type="button"
          className="md:hidden text-white text-2xl p-2 -mr-2"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center gap-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-2xl text-white p-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xl text-white hover:underline py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
