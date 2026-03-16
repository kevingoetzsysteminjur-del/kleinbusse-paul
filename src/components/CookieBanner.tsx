"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const accept = (type: "all" | "necessary") => {
    localStorage.setItem("cookie_consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-inner" style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9998,
      backgroundColor: "#1A1A2E",
      color: "white",
      padding: "1.25rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1.5rem",
      flexWrap: "wrap",
      boxShadow: "0 -4px 30px rgba(0,0,0,0.25)",
      borderTop: "2px solid rgba(219,15,16,0.4)",
      animation: "slideUp 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
    }}>
      <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, fontFamily: "var(--font-body), sans-serif", margin: 0, maxWidth: "680px" }}>
        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.{" "}
        <Link href="/datenschutz" style={{ color: "#DB0F10", textDecoration: "underline" }}>Datenschutzerklärung</Link>
      </p>
      <div className="cookie-btns" style={{ display: "flex", gap: "0.75rem", flexShrink: 0, flexWrap: "wrap" }}>
        <button
          onClick={() => accept("necessary")}
          style={{ background: "transparent", color: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: "50px", padding: "0.55rem 1.25rem", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-body), sans-serif", transition: "all 0.2s ease", whiteSpace: "nowrap" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.color = "white"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
        >
          Nur notwendige
        </button>
        <button
          onClick={() => accept("all")}
          style={{ background: "#DB0F10", color: "white", border: "none", borderRadius: "50px", padding: "0.55rem 1.5rem", fontSize: "0.85rem", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-body), sans-serif", transition: "all 0.2s ease", whiteSpace: "nowrap" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#AB0C0D"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#DB0F10"; }}
        >
          Alle akzeptieren
        </button>
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 640px) {
          .cookie-inner { flex-direction: column !important; align-items: stretch !important; }
          .cookie-btns { width: 100% !important; }
          .cookie-btns button { flex: 1 !important; }
        }
      `}</style>
    </div>
  );
}
