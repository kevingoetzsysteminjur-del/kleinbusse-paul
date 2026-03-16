"use client";
import { useReveal } from "@/hooks/useReveal";

const badges = [
  { icon: "🛡️", text: "Seit über 20 Jahren" },
  { icon: "✅", text: "TÜV-geprüfte Fahrzeuge" },
  { icon: "♿", text: "100% Barrierefrei" },
  { icon: "⭐", text: "Höchste Kundenzufriedenheit" },
  { icon: "🔒", text: "DSGVO-konform" },
];

export default function TrustBadges() {
  const { ref, visible } = useReveal(0);
  return (
    <section style={{ backgroundColor: "var(--bg-off)", padding: "1.75rem 2.5rem", borderBottom: "1px solid var(--border-card)" }}>
      <div
        ref={ref}
        className={`reveal ${visible ? "visible" : ""}`}
        style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}
      >
        {badges.map((b, i) => (
          <div key={b.text} className={`reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: `${i * 60}ms`, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.1rem" }}>{b.icon}</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-light)", fontFamily: "var(--font-body), sans-serif", whiteSpace: "nowrap" }}>{b.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
