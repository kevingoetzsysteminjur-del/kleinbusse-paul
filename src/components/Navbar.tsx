"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Locale } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#ueber-uns" },
    { label: t.nav.services, href: "#leistungen" },
    { label: t.nav.fleet, href: "#flotte" },
    { label: t.nav.accessibility, href: "#barrierefreiheit" },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), menuOpen ? 300 : 0);
    }
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: scrolled ? "0.75rem 2.5rem" : "1.1rem 2.5rem",
        backgroundColor: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)",
        transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none" }}>
          <img src="/logo-transparent.png" alt="H. Paul GmbH" height={40} style={{ width: "auto", display: "block", objectFit: "contain" }} />
        </Link>

        <div className="nav-desktop">
          {navLinks.map(l => (
            <button key={l.href} onClick={() => go(l.href)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-body)", fontSize: "0.9rem", fontFamily: "var(--font-body)", fontWeight: 500, padding: "0.5rem 0.9rem", borderRadius: "8px", transition: "all 0.25s ease" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--red)"; e.currentTarget.style.background = "rgba(219,15,16,0.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-body)"; e.currentTarget.style.background = "none"; }}>
              {l.label}
            </button>
          ))}
          {/* Language switcher */}
          <div style={{ display: "flex", gap: "0.25rem", marginLeft: "0.5rem" }}>
            {(["de", "en"] as const).map(l => (
              <button key={l} onClick={() => setLocale(l as Locale)} style={{
                background: locale === l ? "var(--red)" : "transparent",
                color: locale === l ? "white" : "var(--text-light)",
                border: `1px solid ${locale === l ? "var(--red)" : "var(--border-card)"}`,
                borderRadius: "6px", padding: "0.3rem 0.6rem", fontSize: "0.72rem",
                fontWeight: 700, fontFamily: "var(--font-body)", cursor: "pointer",
                textTransform: "uppercase", letterSpacing: "0.05em",
                transition: "all 0.2s ease",
              }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button onClick={() => go("#kontakt")} style={{ marginLeft: "0.75rem", background: "var(--red)", color: "white", border: "none", borderRadius: "50px", padding: "0.65rem 1.5rem", fontSize: "0.875rem", fontWeight: 700, fontFamily: "var(--font-body)", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(219,15,16,0)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--red-dark)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 25px var(--red-glow)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--red)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 15px rgba(219,15,16,0)"; }}>
            {t.nav.cta}
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-hamburger" aria-label="Menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div style={{ position: "fixed", inset: 0, zIndex: 99, backgroundColor: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "all" : "none", transition: "opacity 0.3s ease" }}>
        {navLinks.map(l => (
          <button key={l.href} onClick={() => go(l.href)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-heading)", fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 600, padding: "0.75rem 2rem", transition: "color 0.2s ease", textTransform: "uppercase" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--red)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text-heading)"}>
            {l.label}
          </button>
        ))}
        {/* Mobile language switcher */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
          {(["de", "en"] as const).map(l => (
            <button key={l} onClick={() => setLocale(l as Locale)} style={{
              background: locale === l ? "var(--red)" : "transparent",
              color: locale === l ? "white" : "var(--text-light)",
              border: `1px solid ${locale === l ? "var(--red)" : "var(--border-card)"}`,
              borderRadius: "6px", padding: "0.4rem 0.9rem", fontSize: "0.85rem",
              fontWeight: 700, fontFamily: "var(--font-body)", cursor: "pointer",
              textTransform: "uppercase", letterSpacing: "0.05em",
            }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button onClick={() => go("#kontakt")} style={{ marginTop: "1rem", background: "var(--red)", color: "white", border: "none", borderRadius: "50px", padding: "0.9rem 2.5rem", fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-body)", cursor: "pointer" }}>
          {t.nav.cta}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          nav { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
        }
      `}</style>
    </>
  );
}
