"use client";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const services = [
  { id: "01", title: "Kleinbusvermietung", desc: "Komfortable Kleinbusse mit bis zu 28 Sitzen, mit oder ohne Fahrer. Ideal für Gruppen, Vereine und Firmenevents.", img: "https://kleinbusse-paul.de/wp-content/uploads/2017/11/16-sitzer_bus.jpg" },
  { id: "02", title: "Flughafentransfer", desc: "Zuverlässiger Transfer zum Flughafen und zurück. 9- bis 16-Sitzer, auch für große Gruppen mit viel Gepäck.", img: "https://kleinbusse-paul.de/wp-content/uploads/2017/11/22-Sitzer_mit_Anhaenger.jpg" },
  { id: "03", title: "Rollstuhlfahrten", desc: "Speziell ausgestattete Fahrzeuge mit Platz für bis zu 6 Rollstühle. Rampen, Klimaanlage und erfahrene Fahrer.", img: "https://kleinbusse-paul.de/wp-content/uploads/2018/10/rohlstuhlfahrt-bus-img.jpg" },
  { id: "04", title: "Ausflugs- & Klassenfahrten", desc: "Schulklassen, Vereine oder Betriebsausflüge. Erfahrene Fahrer, sichere Fahrt, Mercedes Benz Teamstar verfügbar.", img: "https://kleinbusse-paul.de/wp-content/uploads/2017/11/kleinbus_mit_gepaeckraum.jpg" },
  { id: "05", title: "Transportervermietung", desc: "Schwere Lasten sicher transportieren. Transporter mit Rampen, auch mit Fahrer buchbar.", img: "https://kleinbusse-paul.de/wp-content/uploads/2018/10/transport-bus-img.jpg" },
];

function Card({ s, i }: { s: typeof services[0]; i: number }) {
  const { ref, visible } = useReveal(i * 100);
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}
      style={{ background: "white", border: "1px solid var(--border-card)", borderRadius: "20px", overflow: "hidden", cursor: "pointer", transition: "opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease, border-color 0.3s ease", boxShadow: "var(--shadow-card)" }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-8px)"; el.style.borderColor = "rgba(219,15,16,0.3)"; el.style.boxShadow = "var(--shadow-hover)"; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = visible ? "translateY(0)" : "translateY(40px)"; el.style.borderColor = "var(--border-card)"; el.style.boxShadow = "var(--shadow-card)"; }}>
      <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
        <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.6) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "0.5rem", right: "1rem", fontFamily: "var(--font-heading)", fontSize: "5rem", fontWeight: 800, color: "rgba(219,15,16,0.06)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{s.id}</div>
      </div>
      <div style={{ padding: "1.5rem 1.75rem 1.75rem" }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text-heading)" }}>{s.title}</h3>
        <p style={{ color: "var(--text-light)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.25rem", fontFamily: "var(--font-body)" }}>{s.desc}</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--red)", fontSize: "0.875rem", fontWeight: 600, fontFamily: "var(--font-body)" }}>
          Jetzt anfragen <ArrowRight size={15} />
        </span>
      </div>
    </div>
  );
}

export default function LeistungenSection() {
  const header = useReveal(0);
  return (
    <section id="leistungen" style={{ backgroundColor: "var(--bg-off)", padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Unsere Leistungen</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 700, color: "var(--text-heading)" }}>Alles aus einer Hand</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {services.map((s, i) => <Card key={s.id} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
