"use client";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/LanguageContext";

const vehicleSrcs = [
  "https://kleinbusse-paul.de/wp-content/uploads/2017/11/16-sitzer_bus.jpg",
  "https://kleinbusse-paul.de/wp-content/uploads/2017/11/9-sitzer_rollstuhlbus.jpg",
  "https://kleinbusse-paul.de/wp-content/uploads/2017/11/19-Sitzer_innen.jpg",
  "https://kleinbusse-paul.de/wp-content/uploads/2017/11/22-Sitzer_mit_Anhaenger.jpg",
  "https://kleinbusse-paul.de/wp-content/uploads/2017/11/kleinbus_mit_gepaeckraum.jpg",
  "https://kleinbusse-paul.de/wp-content/uploads/2017/11/9-sitzer_rollstuhlbus_mit_rampe.jpg",
];

export default function FlotteSection() {
  const header = useReveal(0);
  const { t } = useLanguage();

  const vehicleLabels = [
    t.fleet.vehicle1,
    t.fleet.vehicle2,
    t.fleet.vehicle3,
    t.fleet.vehicle4,
    t.fleet.vehicle5,
    t.fleet.vehicle6,
  ];

  const vehicles = vehicleSrcs.map((src, i) => ({ src, label: vehicleLabels[i] }));
  const all = [...vehicles, ...vehicles];

  return (
    <section id="flotte" style={{ backgroundColor: "var(--bg-white)", padding: "7rem 0", overflow: "hidden" }}>
      <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""}`} style={{ maxWidth: "1280px", margin: "0 auto 3.5rem", padding: "0 2.5rem", textAlign: "center" }}>
        <div className="section-label" style={{ justifyContent: "center" }}>{t.fleet.label}</div>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 700, color: "var(--text-heading)" }}>{t.fleet.title}</h2>
      </div>
      <div className="marquee-wrapper" style={{ overflow: "hidden", width: "100%" }}>
        <div className="marquee-track">
          {all.map((v, i) => (
            <div key={i} style={{ position: "relative", width: "350px", height: "240px", flexShrink: 0, borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-card)", transition: "box-shadow 0.3s ease, border-color 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--shadow-hover)"; e.currentTarget.style.borderColor = "rgba(219,15,16,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.borderColor = "var(--border-card)"; }}>
              <img src={v.src} alt={v.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.7) 0%, transparent 55%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "0.875rem", left: "0.875rem", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderLeft: "3px solid var(--red)", borderRadius: "4px", padding: "0.3rem 0.75rem" }}>
                <span style={{ color: "var(--text-heading)", fontSize: "0.8rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>{v.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){ .marquee-track > div { width: 250px !important; height: 170px !important; } }`}</style>
    </section>
  );
}
