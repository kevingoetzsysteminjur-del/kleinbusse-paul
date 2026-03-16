"use client";
import { useReveal } from "@/hooks/useReveal";

export default function CtaBanner() {
  const { ref, visible } = useReveal(0);
  return (
    <section style={{ background: "linear-gradient(135deg, #DB0F10 0%, #FF2D2E 100%)", padding: "6rem 2.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div ref={ref} className={`reveal ${visible ? "visible" : ""}`} style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.2, marginBottom: "1rem", fontWeight: 700 }}>Bereit für Ihre nächste Fahrt?</h2>
        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.25rem", fontFamily: "var(--font-body)" }}>Ob Gruppenausflug, Flughafentransfer oder Behindertentransport – wir sind für Sie da.</p>
        <button onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "white", color: "var(--red)", border: "none", borderRadius: "60px", padding: "1rem 2.5rem", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-body)", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.25)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"; }}>
          Jetzt unverbindlich anfragen
        </button>
      </div>
    </section>
  );
}
