"use client";
import { Bus, Plane, Accessibility, UserCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function UeberUnsSection() {
  const left = useReveal(0);
  const right = useReveal(150);
  const { t } = useLanguage();

  const features = [
    { icon: <Bus size={20} color="#DB0F10" />, label: t.about.feature1 },
    { icon: <Plane size={20} color="#DB0F10" />, label: t.about.feature2 },
    { icon: <Accessibility size={20} color="#DB0F10" />, label: t.about.feature3 },
    { icon: <UserCheck size={20} color="#DB0F10" />, label: t.about.feature4 },
  ];

  return (
    <section id="ueber-uns" style={{ backgroundColor: "var(--bg-white)", padding: "7rem 2.5rem", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="ueber-grid">
        {/* Image */}
        <div ref={left.ref} className={`reveal-left ${left.visible ? "visible" : ""}`} style={{ position: "relative" }}>
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", paddingBottom: "75%", boxShadow: "0 30px 80px rgba(0,0,0,0.12)" }}>
            <img src="https://kleinbusse-paul.de/wp-content/uploads/2017/11/kleinbus_offen.jpg" alt="Kleinbus offen – H. Paul GmbH" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ position: "absolute", top: -12, left: -12, width: 80, height: 80, borderTop: "3px solid var(--red)", borderLeft: "3px solid var(--red)", borderRadius: "12px 0 0 0", opacity: 0.8 }} />
          <div style={{ position: "absolute", bottom: -12, right: -12, width: 80, height: 80, borderBottom: "3px solid var(--red)", borderRight: "3px solid var(--red)", borderRadius: "0 0 12px 0", opacity: 0.8 }} />
        </div>

        {/* Text */}
        <div ref={right.ref} className={`reveal-right ${right.visible ? "visible" : ""}`}>
          <div className="section-label">{t.about.label}</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", lineHeight: 1.15, marginBottom: "1.5rem", fontWeight: 700, color: "var(--text-heading)" }}>
            {t.about.title} <span style={{ color: "var(--red)" }}>{t.about.titleHighlight}</span>
          </h2>
          <p style={{ color: "var(--text-body)", lineHeight: 1.85, fontSize: "1rem", marginBottom: "2.5rem", fontFamily: "var(--font-body)" }}>
            {t.about.text}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {features.map((f, i) => (
              <div key={f.label} className={`reveal ${right.visible ? "visible" : ""}`} style={{ transitionDelay: `${i * 80}ms`, background: "var(--bg-off)", border: "1px solid var(--border-card)", borderRadius: "12px", padding: "1rem 1.1rem", display: "flex", alignItems: "center", gap: "0.875rem", boxShadow: "var(--shadow-card)", transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(219,15,16,0.3)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-hover)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-card)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)"; }}>
                <div style={{ width: 40, height: 40, borderRadius: "10px", background: "rgba(219,15,16,0.08)", border: "1px solid rgba(219,15,16,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.icon}</div>
                <span style={{ color: "var(--text-heading)", fontSize: "0.9rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.ueber-grid{grid-template-columns:1fr!important;gap:3.5rem!important}}`}</style>
    </section>
  );
}
