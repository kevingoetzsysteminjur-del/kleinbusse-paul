"use client";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function VideoSection() {
  const header = useReveal(0);
  const video = useReveal(200);
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#1A1A2E", padding: "7rem 2.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(219,15,16,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", color: "#DB0F10", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem", fontFamily: "var(--font-body), sans-serif" }}>
            <span style={{ display: "block", width: "40px", height: "2px", background: "linear-gradient(to right, #DB0F10, transparent)", borderRadius: "1px" }} />
            {t.video.label}
          </div>
          <h2 style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: "1rem" }}>{t.video.title}</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "580px", margin: "0 auto", fontFamily: "var(--font-body), sans-serif" }}>
            {t.video.subtitle}
          </p>
        </div>
        <div ref={video.ref} className={`reveal ${video.visible ? "visible" : ""}`} style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ position: "absolute", inset: "-20px", background: "radial-gradient(ellipse, rgba(219,15,16,0.15) 0%, transparent 70%)", pointerEvents: "none", borderRadius: "24px" }} />
          <div style={{ position: "absolute", top: -10, left: -10, width: 60, height: 60, borderTop: "2px solid rgba(219,15,16,0.6)", borderLeft: "2px solid rgba(219,15,16,0.6)", borderRadius: "12px 0 0 0", zIndex: 2 }} />
          <div style={{ position: "absolute", bottom: -10, right: -10, width: 60, height: 60, borderBottom: "2px solid rgba(219,15,16,0.6)", borderRight: "2px solid rgba(219,15,16,0.6)", borderRadius: "0 0 12px 0", zIndex: 2 }} />
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <iframe src="https://www.youtube.com/embed/hvQ-Qc-frHI" title="H. Paul GmbH – Kleinbusvermietung Mosbach" width="100%" height="100%" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
