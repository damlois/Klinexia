export function Footer() {
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#benefits", label: "Why Klinexia" },
    { href: "#product", label: "Benefits" },
    { href: "#contact", label: "Request a Demo" },
  ];

  return (
    <footer className="bg-[#0f172a] py-16">
      <div className="mx-auto max-w-[1280px] px-8">
        {/* Logo, tagline, and navigation */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <img
              src="/footer-logo.svg"
              alt="Klinexia"
              className="h-12 w-auto"
            />
            <p className="max-w-[674px] font-normal leading-[24px] text-[18px] text-white/75 [font-family:var(--font-mallanna),sans-serif]">
              Built to simplify healthcare operations, reduce complexity, and help modern clinics run more efficiently.
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium leading-[24px] text-[16px] text-white/85 transition-colors hover:text-white [font-family:var(--font-manrope),sans-serif]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider and bottom row */}
        <div className="mt-8 flex flex-col gap-8">
          <div className="h-px w-full bg-[#eaecf0]" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-normal leading-[24px] text-[16px] text-[#98a2b3] [font-family:var(--font-manrope),sans-serif]">
              © 2026 Klinexia. All rights reserved.
            </p>
            <div className="flex items-center gap-4 font-normal leading-[24px] text-[16px] text-white [font-family:var(--font-manrope),sans-serif]">
              <a href="#" className="transition-colors hover:text-white/80">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-white/80">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-white/80">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
