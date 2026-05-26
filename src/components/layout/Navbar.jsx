import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const links = [
  { label: "SOLUTIONS", href: "#solutions", hasMenu: true },
  { label: "RESOURCES", href: "#insights", hasMenu: true },
  { label: "ABOUT US", href: "#about", hasMenu: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-5 sm:pt-6">
        <nav
          className={`pointer-events-auto mx-auto flex h-11 w-full max-w-[840px] items-center justify-between gap-4 rounded-xl border border-white/[0.08] px-4 transition-all duration-300 sm:h-12 sm:px-5 ${
            scrolled
              ? "bg-bg/85 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              : "bg-white/[0.03] backdrop-blur-md"
          }`}
        >
          <Logo size="sm" />

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="inline-flex items-center gap-1 text-[12px] font-medium tracking-[0.18em] text-ink transition-colors hover:text-white"
                >
                  {l.label}
                  {l.hasMenu && (
                    <ChevronDown
                      className="h-3.5 w-3.5 text-ink-muted"
                      strokeWidth={2}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button
              variant="secondary"
              size="sm"
              className="tracking-cta px-5"
            >
              REQUEST DEMO
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-ink md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {open && (
          <div className="pointer-events-auto mx-auto mt-2 w-full max-w-[840px] rounded-2xl border border-white/[0.08] bg-bg/95 px-3 py-3 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[12px] font-medium tracking-[0.18em] text-ink hover:bg-white/[0.04] hover:text-white"
                  >
                    {l.label}
                    {l.hasMenu && <ChevronDown className="h-3.5 w-3.5" />}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 px-1">
              <Button
                variant="secondary"
                size="md"
                className="w-full tracking-cta"
              >
                REQUEST DEMO
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
