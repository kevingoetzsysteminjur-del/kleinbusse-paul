"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/LanguageContext";

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
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
  const { t } = useLanguage();

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
    { q: t.faq.q7, a: t.faq.a7 },
  ];

  return (
    <section style={{ backgroundColor: "var(--bg-white)", padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>{t.faq.label}</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 700, color: "var(--text-heading)" }}>{t.faq.title}</h2>
        </div>
        <div ref={list.ref} className={`reveal ${list.visible ? "visible" : ""}`}>
          {faqs.map((item, i) => <FAQItem key={i} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
