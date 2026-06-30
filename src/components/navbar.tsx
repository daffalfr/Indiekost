"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { id: "fasilitas", label: "Fasilitas" },
  { id: "kamar", label: "Kamar" },
  { id: "lokasi", label: "Lokasi" },
  { id: "kontak", label: "Kontak" },
];

const NAVBAR_OFFSET = 80; // tinggi navbar sticky, biar section gak ketutupan saat scroll

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const scrollPos = window.scrollY + NAVBAR_OFFSET + 40;
      let current = "";
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });

    // Update URL hash tanpa memicu jump scroll bawaan browser
    history.pushState(null, "", `#${id}`);
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex h-16 items-center justify-between px-5 backdrop-blur-xl transition-all duration-300 sm:px-8 lg:px-14 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#0E0B07]/95 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "border-b border-white/[0.06] bg-[#0E0B07]/80"
      }`}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
          history.pushState(null, "", window.location.pathname);
        }}
        className="font-display text-[18px] font-black tracking-tight text-[#FDFBF7] sm:text-[20px]"
      >
        Indie<span className="text-[#C96A00]">Kost</span>
      </a>

      {/* ── Desktop nav ── */}
      <div className="hidden items-center gap-9 lg:flex">
        {NAV_LINKS.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="group relative py-2 text-[13px] font-medium transition-colors"
            >
              <span
                className={`transition-colors ${
                  isActive
                    ? "text-[#FDFBF7]"
                    : "text-[#FDFBF7]/50 group-hover:text-[#FDFBF7]/80"
                }`}
              >
                {label}
              </span>
              {/* Underline indikator — aktif penuh, hover muncul pelan */}
              <span
                className={`pointer-events-none absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-[#C96A00] transition-all duration-300 ${
                  isActive
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60"
                }`}
              />
            </a>
          );
        })}

        <a
          href="#kamar"
          onClick={(e) => handleNavClick(e, "kamar")}
          className="flex items-center gap-2 rounded-full bg-[#C96A00] px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          <i className="fa-solid fa-bed" />
          Cek Ketersediaan
        </a>
      </div>

      {/* ── Mobile hamburger ── */}
      <button
        type="button"
        aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/[0.03] lg:hidden"
      >
        <span
          className={`h-[1.5px] w-4 rounded-full bg-[#FDFBF7] transition-all duration-300 ${
            menuOpen ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[1.5px] w-4 rounded-full bg-[#FDFBF7] transition-all duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-[1.5px] w-4 rounded-full bg-[#FDFBF7] transition-all duration-300 ${
            menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* ── Mobile menu panel ── */}
      <div
        className={`fixed inset-x-0 top-16 z-40 origin-top border-b border-white/[0.06] bg-[#0E0B07]/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-6 sm:px-8">
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                  isActive
                    ? "bg-[#C96A00]/12 text-[#C96A00]"
                    : "text-[#FDFBF7]/60 hover:bg-white/[0.04] hover:text-[#FDFBF7]"
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="#kamar"
            onClick={(e) => handleNavClick(e, "kamar")}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#C96A00] px-5 py-3.5 text-[14px] font-semibold text-white"
          >
            <i className="fa-solid fa-bed" />
            Cek Ketersediaan
          </a>
        </div>
      </div>
    </nav>
  );
}
