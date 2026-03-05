"use client";

import { useState } from "react";

const navLinks = [
  { href: "#benefits", label: "Why Klinexia" },
  { href: "#product", label: "Benefits" },
  { href: "#contact", label: "Request a Demo" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-[11] border-b border-[#f5f5f5] border-solid bg-white">
      <div className="mx-auto flex h-20 max-w-full items-center justify-between px-6 lg:px-20">
        <img src="/logo.png" alt="Klinexia logo" className="h-10 w-auto" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold leading-6 text-[16px] text-[#535862] transition-colors duration-300 hover:text-[#06397d]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#benefits"
            className="hidden rounded-lg border border-[#06397d] bg-[#06397d] px-[18px] py-[10px] font-semibold leading-6 text-[16px] text-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-all duration-300 hover:bg-[#052d63] hover:shadow-lg md:inline-block"
          >
            Learn More
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-[#535862] transition-colors hover:bg-[#f5f5f5] hover:text-[#06397d] md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-[280px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-[#f5f5f5] bg-white px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-[#f5f5f5] py-4 font-semibold leading-6 text-[16px] text-[#535862] transition-colors last:border-0 hover:text-[#06397d]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#benefits"
            onClick={closeMobileMenu}
            className="mt-2 rounded-lg border border-[#06397d] bg-[#06397d] px-[18px] py-[10px] text-center font-semibold leading-6 text-[16px] text-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-all duration-300 hover:bg-[#052d63] hover:shadow-lg"
          >
            Learn More
          </a>
        </nav>
      </div>
    </header>
  );
}
