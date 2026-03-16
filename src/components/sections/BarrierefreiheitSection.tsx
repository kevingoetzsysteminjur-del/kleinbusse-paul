"use client";
import { Check, Accessibility } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function BarrierefreiheitSection() {
  const left = useReveal(0);
  const right = useReveal(150);
  const { t } = useLanguage();

  const items = [t.wheelchair.check1, t.wheelchair.check2, t.wheelchair.check3, t.wheelchair.check4, t.wheelchair.check5];

  return (
    <section id="barrierefreiheit" style={{ backgroundColor: "var(--bg-off)", padding: "7rem 2.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-30%", right: "-15%", width: "500px", height: "500px", pointerEvents: "none", background: "radial-gradient(circle, rgba(219,15,16,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", position: "relative" }} className="barrier-grid">
        <div ref={left.ref} className={`reveal-left ${left.visible ? "visible" : ""}`} style={{ position: "relative", borderRadius: "16px", overflow: "hidden", paddingBottom: "75%", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
          <img src="https://kleinbusse-paul.de/wp-content/uploads/2017/11/rollstuhlabteil.jpg" alt="Rollstuhlabteil" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div ref={right.ref} className={`reveal-right ${right.visible ? "visible" : ""}`}>
          <div className="section-label" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Accessibility size={16} color="#DB0F10" /> {t.wheelchair.label}
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", lineHeight: 1.15, marginBottom: "1.25rem", fontWeight: 700, color: "var(--text-heading)" }}>{t.wheelchair.title}</h2>
          <p style={{ color: "var(--text-body)", lineHeight: 1.85, fontSize: "1rem", marginBottom: "2rem", fontFamily: "var(--font-body)" }}>{t.wheelchair.text}</p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.25rem" }}>
            {items.map((item, i) => (
              <li key={item} className={`reveal ${right.visible ? "visible" : ""}`} style={{ transitionDelay: `${i * 80}ms`, display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", flexShrink: 0, background: "rgba(219,15,16,0.1)", border: "1px solid rgba(219,15,16,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check size={13} style={{ color: "var(--red)" }} strokeWidth={2.5} />
                </div>
                <span style={{ color: "var(--text-body)", fontSize: "0.95rem", fontFamily: "var(--font-body)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <button onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "var(--red)", color: "white", border: "none", borderRadius: "60px", padding: "0.9rem 2.25rem", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-body)", cursor: "pointer", transition: "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--red-dark)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 35px var(--red-glow)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--red)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            {t.wheelchair.cta}
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .barrier-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
