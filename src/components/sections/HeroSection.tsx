"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, ChevronDown, ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

function QuickRequestForm() {
  const { t } = useLanguage();
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [persons, setPersons] = useState("");

  const handleSubmit = () => {
    if (service) {
      sessionStorage.setItem("hero_service", service);
    }
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "10px",
    padding: "0.7rem 1rem",
    color: "white",
    fontSize: "0.9rem",
    fontFamily: "var(--font-body)",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <div style={{
      marginTop: "2.5rem",
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "16px",
      padding: "1.25rem 1.5rem",
      maxWidth: "680px",
    }}>
      <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.9rem", fontWeight: 600 }}>
        {t.hero.quickLabel}
      </p>
      <div className="quick-form-grid">
        <select
          value={service}
          onChange={e => setService(e.target.value)}
          style={{ ...inputStyle, appearance: "none" }}
        >
          <option value="" disabled style={{ color: "#333" }}>{t.hero.quickService}</option>
          {t.serviceOptions.map(s => (
            <option key={s} value={s} style={{ color: "#333" }}>{s}</option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          style={{ ...inputStyle, colorScheme: "dark" }}
        />
        <input
          type="number"
          value={persons}
          onChange={e => setPersons(e.target.value)}
          placeholder={t.hero.quickPersons}
          min={1}
          max={28}
          style={inputStyle}
        />
        <button
          onClick={handleSubmit}
          style={{
            background: "var(--red)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "0.7rem 1.25rem",
            fontSize: "0.9rem",
            fontWeight: 700,
            fontFamily: "var(--font-body)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
            whiteSpace: "nowrap",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--red-dark)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--red)")}
        >
          {t.hero.quickSubmit} <ArrowRight size={15} />
        </button>
      </div>
      <style>{`
        .quick-form-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 0.8fr auto;
          gap: 0.75rem;
          align-items: center;
        }
        .quick-form-grid select option { background: #1A1A2E; color: white; }
        @media (max-width: 700px) {
          .quick-form-grid { grid-template-columns: 1fr 1fr; }
          .quick-form-grid > button { grid-column: 1 / -1; }
        }
        @media (max-width: 400px) {
          .quick-form-grid { grid-template-columns: 1fr; }
        }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.6; cursor: pointer; }
        .quick-form-grid input::placeholder, .quick-form-grid select { color: rgba(255,255,255,0.6); }
        .quick-form-grid input:focus, .quick-form-grid select:focus { border-color: rgba(219,15,16,0.7) !important; box-shadow: 0 0 0 3px rgba(219,15,16,0.2); }
      `}</style>
    </div>
  );
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true });
  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 2000;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step); else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] } }),
};

export default function HeroSection() {
  const { t } = useLanguage();
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { target: 28, suffix: "", label: t.hero.stat1 },
    { target: 20, suffix: "+", label: t.hero.stat2 },
    { target: 6, suffix: "", label: t.hero.stat3 },
  ];

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://kleinbusse-paul.de/wp-content/uploads/2017/11/16-sitzer_bus.jpg')", backgroundSize: "cover", backgroundPosition: "center 40%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(26,26,46,0.75) 55%, rgba(26,26,46,0.85) 100%)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to top, rgba(26,26,46,1) 0%, transparent 100%)" }} />

      <div className="hero-content-wrap" style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "7rem 2.5rem 5rem" }}>
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", marginBottom: "2rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(219,15,16,0.6)", borderRadius: "50px", padding: "0.45rem 1.1rem", backdropFilter: "blur(10px)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--red-light)", flexShrink: 0, animation: "red-pulse 2.5s ease-in-out infinite", display: "inline-block" }} />
          <span style={{ color: "white", fontSize: "0.78rem", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.hero.badge}</span>
        </motion.div>

        <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp}
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 7vw, 5rem)", lineHeight: 1.08, marginBottom: "1.5rem", maxWidth: "680px", fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "0.02em" }}>
          {t.hero.title1}<br />
          <span style={{ color: "var(--red-light)" }}>{t.hero.titleHighlight}</span>{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>{t.hero.title2}</em>
        </motion.h1>

        <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
          style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", maxWidth: "520px", marginBottom: "2.5rem", fontFamily: "var(--font-body)" }}>
          {t.hero.subtitle}
        </motion.p>

        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="hero-buttons" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <button onClick={() => go("#kontakt")} style={{ background: "linear-gradient(135deg, var(--red), var(--red-light))", color: "white", border: "none", borderRadius: "60px", padding: "0.9rem 2.25rem", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-body)", cursor: "pointer", transition: "all 0.3s ease" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 35px var(--red-glow)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            {t.hero.ctaPrimary}
          </button>
          <a href="tel:062612526" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "white", textDecoration: "none", borderRadius: "60px", border: "2px solid rgba(255,255,255,0.3)", padding: "0.875rem 2rem", fontSize: "1rem", fontWeight: 500, fontFamily: "var(--font-body)", transition: "all 0.3s ease" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--red-light)"; e.currentTarget.style.color = "var(--red-light)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "white"; }}>
            <Phone size={17} /> {t.hero.ctaPhone}
          </a>
        </motion.div>

        <motion.div custom={3.5} initial="hidden" animate="visible" variants={fadeUp}>
          <QuickRequestForm />
        </motion.div>

        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="hero-stats"
          style={{ position: "absolute", bottom: "4.5rem", right: "2.5rem", display: "flex", gap: "3rem" }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.75rem", fontWeight: 700, color: "var(--red-light)", lineHeight: 1 }}><Counter target={s.target} suffix={s.suffix} /></div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: "0.3rem", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div onClick={() => go("#ueber-uns")} style={{ position: "absolute", bottom: "2.5rem", left: "50%", animation: "bounce-down 2.2s ease-in-out infinite", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>{t.hero.scroll}</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--red-light), transparent)" }} />
        <ChevronDown size={16} style={{ color: "var(--red-light)" }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-stats {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            margin-top: 2.5rem;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .hero-stats { gap: 1.5rem !important; }
          .hero-stats > div > div:first-child { font-size: 2rem !important; }
          .quick-form-grid { grid-template-columns: 1fr !important; }
          .quick-form-grid > button { grid-column: 1 !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons > * { width: 100% !important; justify-content: center !important; text-align: center !important; }
          .hero-content-wrap { padding: 6rem 1.25rem 2rem !important; }
        }
        @media (max-width: 480px) {
          .hero-stats > div { min-width: 80px; }
        }
      `}</style>
    </section>
  );
}
