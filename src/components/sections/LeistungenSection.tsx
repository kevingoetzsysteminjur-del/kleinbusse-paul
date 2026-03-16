"use client";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/LanguageContext";

const serviceImages = [
  "https://kleinbusse-paul.de/wp-content/uploads/2017/11/16-sitzer_bus.jpg",
  "https://kleinbusse-paul.de/wp-content/uploads/2017/11/22-Sitzer_mit_Anhaenger.jpg",
  "https://kleinbusse-paul.de/wp-content/uploads/2018/10/rohlstuhlfahrt-bus-img.jpg",
  "https://kleinbusse-paul.de/wp-content/uploads/2017/11/kleinbus_mit_gepaeckraum.jpg",
  "https://kleinbusse-paul.de/wp-content/uploads/2018/10/transport-bus-img.jpg",
];

const serviceIds = ["01", "02", "03", "04", "05"];

function Card({ title, desc, img, id, i }: { title: string; desc: string; img: string; id: string; i: number }) {
  const { ref, visible } = useReveal(i * 100);
  const { t } = useLanguage();
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}
      style={{ background: "white", border: "1px solid var(--border-card)", borderRadius: "20px", overflow: "hidden", cursor: "pointer", transition: "opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease, border-color 0.3s ease", boxShadow: "var(--shadow-card)" }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-8px)"; el.style.borderColor = "rgba(219,15,16,0.3)"; el.style.boxShadow = "var(--shadow-hover)"; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = visible ? "translateY(0)" : "translateY(40px)"; el.style.borderColor = "var(--border-card)"; el.style.boxShadow = "var(--shadow-card)"; }}>
      <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
        <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.6) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "0.5rem", right: "1rem", fontFamily: "var(--font-heading)", fontSize: "5rem", fontWeight: 800, color: "rgba(219,15,16,0.06)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{id}</div>
      </div>
      <div style={{ padding: "1.5rem 1.75rem 1.75rem" }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text-heading)" }}>{title}</h3>
        <p style={{ color: "var(--text-light)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.25rem", fontFamily: "var(--font-body)" }}>{desc}</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--red)", fontSize: "0.875rem", fontWeight: 600, fontFamily: "var(--font-body)" }}>
          {t.services.cardLink} <ArrowRight size={15} />
        </span>
      </div>
    </div>
  );
}

export default function LeistungenSection() {
  const header = useReveal(0);
  const { t } = useLanguage();

  const services = [
    { title: t.services.card1Title, desc: t.services.card1Text },
    { title: t.services.card2Title, desc: t.services.card2Text },
    { title: t.services.card3Title, desc: t.services.card3Text },
    { title: t.services.card4Title, desc: t.services.card4Text },
    { title: t.services.card5Title, desc: t.services.card5Text },
  ];

  return (
    <section id="leistungen" style={{ backgroundColor: "var(--bg-off)", padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>{t.services.label}</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 700, color: "var(--text-heading)" }}>{t.services.title}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {services.map((s, i) => (
            <Card key={serviceIds[i]} title={s.title} desc={s.desc} img={serviceImages[i]} id={serviceIds[i]} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
