import ArrowRightIcon from "../ui/ArrowRightIcon";
import { offices, footerLinks } from "../../data/content";

import n7Logo from "../../assets/mockups/n7.svg";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10 sm:pt-24">
      <div className="container-shell">
        {/* Top: logo + 3 office blocks */}
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <BrandLogo />
          <div className="grid gap-10 sm:grid-cols-3">
            {offices.map((o, i) => (
              <div key={i}>
                <p className="text-base font-medium text-white">{o.city}</p>
                <div className="mt-4 space-y-1 text-sm leading-relaxed text-ink-muted">
                  {o.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: empty under logo, 3 link columns under offices */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="hidden lg:block" aria-hidden="true" />
          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <LinkColumn key={title} title={title} links={links} />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/[0.06] pt-6 text-xs leading-relaxed text-ink-subtle sm:text-[13px]">
          <p>
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
            Commercial Brand] — [Registered under the Companies Act 2006 in
            England and Wales | Number of Incorporation 13100992]
          </p>
        </div>
      </div>
    </footer>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <p className="text-base font-medium text-white">{title}</p>
      <ul className="mt-5 space-y-3.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 text-sm text-ink-muted transition-colors hover:text-white"
            >
              <span>{l}</span>
              <ArrowRightIcon className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BrandLogo() {
  if (n7Logo) {
    return (
      <img
        src={n7Logo}
        alt="N7"
        draggable="false"
        className="w-full max-w-[420px] select-none"
      />
    );
  }
  // CSS fallback until the SVG is provided.
  return (
    <div className="select-none">
      <span
        className="font-display font-extrabold leading-none tracking-tight"
        style={{
          fontSize: "clamp(8rem, 18vw, 16rem)",
          background:
            "linear-gradient(90deg, #0FD2F7 0%, #1F8CFF 45%, #2A5BFF 75%, #1640D8 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        N7
      </span>
    </div>
  );
}
