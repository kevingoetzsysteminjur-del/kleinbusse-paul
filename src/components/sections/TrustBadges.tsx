"use client";
import { Shield, BadgeCheck, Accessibility, Star, Lock } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/LanguageContext";

export default function TrustBadges() {
  const { ref, visible } = useReveal(0);
  const { t } = useLanguage();

  const badges = [
    { icon: <Shield size={18} color="#DB0F10" />, text: t.trust.badge1 },
    { icon: <BadgeCheck size={18} color="#DB0F10" />, text: t.trust.badge2 },
    { icon: <Accessibility size={18} color="#DB0F10" />, text: t.trust.badge3 },
    { icon: <Star size={18} color="#DB0F10" />, text: t.trust.badge4 },
    { icon: <Lock size={18} color="#DB0F10" />, text: t.trust.badge5 },
  ];

  return (
    <section style={{ backgroundColor: "var(--bg-off)", padding: "1.75rem 2.5rem", borderBottom: "1px solid var(--border-card)" }}>
      <div
        ref={ref}
        className={`reveal ${visible ? "visible" : ""}`}
        style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}
      >
        {badges.map((b, i) => (
          <div key={b.text} className={`reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: `${i * 60}ms`, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {b.icon}
            <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-light)", fontFamily: "var(--font-body), sans-serif", whiteSpace: "nowrap" }}>{b.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
