"use client";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ backgroundColor: "var(--bg-dark)", borderTop: "3px solid var(--red)", fontFamily: "var(--font-body)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 2.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: "3rem", marginBottom: "3.5rem" }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.25rem" }}>
              <img src="https://kleinbusse-paul.de/wp-content/uploads/2017/11/logo.jpg" alt="H. Paul GmbH" width={42} height={42} style={{ borderRadius: "8px", objectFit: "cover" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "white" }}>H. Paul <span style={{ color: "var(--red-light)" }}>GmbH</span></span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: "240px" }}>{t.footer.brand}</p>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 600, color: "white", marginBottom: "1.25rem" }}>{t.footer.servicesTitle}</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[t.services.card1Title, t.services.card2Title, t.services.card3Title, t.services.card4Title, t.services.card5Title].map(s => (
                <li key={s}><a href="#leistungen" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s ease" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--red-light)")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 600, color: "white", marginBottom: "1.25rem" }}>{t.footer.legalTitle}</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <li><Link href="/impressum" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.875rem" }}>{t.footer.impressum}</Link></li>
              <li><Link href="/datenschutz" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.875rem" }}>{t.footer.datenschutz}</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 600, color: "white", marginBottom: "1.25rem" }}>{t.footer.contactTitle}</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { icon: <MapPin size={15} />, content: "Am Eisweiher 14, 74821 Mosbach", href: undefined },
                { icon: <Phone size={15} />, content: "06261 2526", href: "tel:062612526" },
                { icon: <Mail size={15} />, content: "info@kleinbusse-paul.de", href: "mailto:info@kleinbusse-paul.de" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
                  <span style={{ color: "var(--red-light)", marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                  {item.href ? <a href={item.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{item.content}</a> : <span>{item.content}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem", fontSize: "0.825rem", color: "rgba(255,255,255,0.35)" }}>
          <span>{t.footer.copyright}</span>
          <a href="https://contexflow.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>{t.footer.webdesign} <span style={{ color: "var(--red-light)" }}>Contexflow AI</span></a>
        </div>
      </div>
      <style>{`@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:520px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
