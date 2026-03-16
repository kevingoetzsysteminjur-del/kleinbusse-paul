"use client";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"enter" | "blink" | "exit" | "done">("enter");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("preloader_done")) {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase("blink"), 600);
    const t2 = setTimeout(() => setPhase("exit"), 1800);
    const t3 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      sessionStorage.setItem("preloader_done", "true");
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 99999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#1A1A2E",
      clipPath: phase === "exit" ? "inset(50% 0)" : "inset(0% 0)",
      transition: phase === "exit" ? "clip-path 0.7s cubic-bezier(0.77, 0, 0.175, 1)" : "none",
    }}>
      {/* Logo */}
      <div style={{
        opacity: phase === "enter" ? 0 : 1,
        transform: phase === "enter" ? "scale(0.8)" : "scale(1)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}>
        <img
          src="https://kleinbusse-paul.de/wp-content/uploads/2017/11/logo.jpg"
          alt="H. Paul GmbH"
          width={140}
          height={75}
          style={{ borderRadius: "12px", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Company name */}
      <div style={{
        marginTop: "1.5rem",
        fontFamily: "var(--font-heading), 'Oswald', sans-serif",
        fontSize: "1.5rem",
        fontWeight: 700,
        color: "#FFFFFF",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        opacity: phase === "enter" ? 0 : 1,
        transition: "opacity 0.4s ease 0.3s",
        animation: phase === "blink" ? "preloaderBlink 0.35s ease-in-out 4" : "none",
      }}>
        H. Paul <span style={{ color: "#DB0F10" }}>GmbH</span>
      </div>

      {/* Sub text */}
      <div style={{
        marginTop: "0.6rem",
        fontSize: "0.75rem",
        color: "rgba(255,255,255,0.45)",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        fontFamily: "sans-serif",
        opacity: phase === "enter" ? 0 : 0.45,
        transition: "opacity 0.5s ease 0.5s",
      }}>
        Kleinbusvermietung · Mosbach
      </div>

      <style>{`
        @keyframes preloaderBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </div>
  );
}
