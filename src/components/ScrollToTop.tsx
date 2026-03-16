"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Nach oben scrollen"
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "2rem",
        zIndex: 999,
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: hovered ? "#DB0F10" : "#1A1A2E",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "all" : "none",
        transition: "all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
    >
      <ArrowUp size={20} color="white" />
    </button>
  );
}
