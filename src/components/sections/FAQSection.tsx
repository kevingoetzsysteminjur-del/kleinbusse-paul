"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  {
    q: "Was kostet es, einen Kleinbus zu mieten?",
    a: "Die Kosten hängen von verschiedenen Faktoren ab: Fahrzeuggröße, Mietdauer, Strecke und ob Sie einen Fahrer benötigen. Kontaktieren Sie uns für ein unverbindliches Angebot – wir finden garantiert die passende Lösung für Ihr Budget.",
  },
  {
    q: "Kann ich einen Kleinbus auch ohne Fahrer mieten?",
    a: "Ja, Sie können unsere Kleinbusse sowohl mit als auch ohne Fahrer mieten. Für Fahrzeuge bis 9 Sitze genügt ein normaler PKW-Führerschein (Klasse B). Für größere Busse benötigen Sie den Führerschein Klasse D1 oder D.",
  },
  {
    q: "Wie viele Rollstühle passen in Ihre Fahrzeuge?",
    a: "Unsere speziell ausgestatteten Rollstuhlbusse bieten Platz für bis zu 6 Rollstühle. Alle Fahrzeuge verfügen über elektrische Rampen für einen bequemen und sicheren Einstieg.",
  },
  {
    q: "Bieten Sie auch Flughafentransfers an?",
    a: "Ja, wir bieten zuverlässige Flughafentransfers zu allen großen Flughäfen in der Region an – darunter Frankfurt, Stuttgart und Mannheim. Wir holen Sie ab und bringen Sie pünktlich zum Terminal.",
  },
  {
    q: "Wie weit im Voraus sollte ich buchen?",
    a: "Wir empfehlen, mindestens 1-2 Wochen im Voraus zu buchen, besonders in der Hauptsaison und an Wochenenden. Für kurzfristige Anfragen rufen Sie uns einfach an – wir tun unser Bestes, Ihnen zu helfen.",
  },
  {
    q: "Sind Ihre Fahrzeuge klimatisiert?",
    a: "Ja, alle unsere Kleinbusse und Transporter sind mit modernen Klimaanlagen ausgestattet. Auch unsere Rollstuhlfahrzeuge verfügen über Klimatisierung für maximalen Komfort.",
  },
  {
    q: "Kann ich den Bus für eine Klassenfahrt buchen?",
    a: "Selbstverständlich! Wir sind auf Klassenfahrten und Gruppenausflüge spezialisiert. Unsere erfahrenen Fahrer bringen Schulklassen sicher ans Ziel. Wir bieten Busse bis zu 28 Sitzplätze an.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--border-card)", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
          padding: "1.25rem 0", textAlign: "left",
          color: "var(--text-heading)", fontFamily: "var(--font-body), sans-serif",
          fontSize: "1rem", fontWeight: 600,
          transition: "color 0.2s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "#DB0F10")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-heading)")}
      >
        <span>{item.q}</span>
        <span style={{
          flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
          background: open ? "#DB0F10" : "var(--bg-warm)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.3s ease, transform 0.3s ease",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          color: open ? "white" : "var(--text-body)",
        }}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div style={{
        maxHeight: open ? "300px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}>
        <p style={{ padding: "0 0 1.25rem 0", color: "var(--text-body)", fontSize: "0.95rem", lineHeight: 1.8, fontFamily: "var(--font-body), sans-serif" }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const header = useReveal(0);
  const list = useReveal(150);
  return (
    <section style={{ backgroundColor: "var(--bg-white)", padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Häufige Fragen</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 700, color: "var(--text-heading)" }}>Alles was Sie wissen müssen</h2>
        </div>
        <div ref={list.ref} className={`reveal ${list.visible ? "visible" : ""}`}>
          {faqs.map((item, i) => <FAQItem key={i} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
