"use client";
import { useReveal } from "@/hooks/useReveal";
import { MapPin, Phone, Printer, Mail, Clock } from "lucide-react";

const inputBase: React.CSSProperties = {
  width: "100%", boxSizing: "border-box",
  background: "var(--bg-warm)", border: "1.5px solid var(--border-card)",
  borderRadius: "12px", padding: "0.9rem 1.25rem",
  color: "var(--text-heading)", fontSize: "0.95rem", fontFamily: "var(--font-body)",
  outline: "none", transition: "border-color 0.25s ease, box-shadow 0.25s ease",
};

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} style={inputBase}
      onFocus={e => { e.target.style.borderColor = "var(--red)"; e.target.style.boxShadow = "0 0 0 3px rgba(219,15,16,0.15)"; }}
      onBlur={e => { e.target.style.borderColor = "var(--border-card)"; e.target.style.boxShadow = "none"; }} />
  );
}

export default function KontaktSection() {
  const header = useReveal(0);
  const infoCard = useReveal(100);
  const form = useReveal(200);

  const contacts = [
    { icon: <MapPin size={18} />, label: "Adresse", value: "Am Eisweiher 14, 74821 Mosbach", href: undefined },
    { icon: <Phone size={18} />, label: "Telefon", value: "06261 2526", href: "tel:062612526" },
    { icon: <Printer size={18} />, label: "Fax", value: "06261 37954", href: undefined },
    { icon: <Mail size={18} />, label: "E-Mail", value: "info@kleinbusse-paul.de", href: "mailto:info@kleinbusse-paul.de" },
    { icon: <Clock size={18} />, label: "Öffnungszeiten", value: "Mo – Fr, 8:00 – 17:00 Uhr", href: undefined },
  ];

  return (
    <>
      <section id="kontakt" style={{ backgroundColor: "var(--bg-white)", padding: "7rem 2.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Kontakt</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 700, color: "var(--text-heading)" }}>Sprechen Sie uns an</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "2.5rem", alignItems: "start" }} className="kontakt-grid">
            <div ref={infoCard.ref} className={`reveal-left ${infoCard.visible ? "visible" : ""}`}
              style={{ background: "var(--bg-off)", borderLeft: "4px solid var(--red)", borderRadius: "16px", padding: "2.5rem", boxShadow: "var(--shadow-card)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 600, marginBottom: "2rem", color: "var(--text-heading)" }}>Hier finden Sie uns</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {contacts.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "12px", flexShrink: 0, background: "rgba(219,15,16,0.08)", border: "1px solid rgba(219,15,16,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)" }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--red)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-body)", fontWeight: 600, marginBottom: "0.2rem" }}>{c.label}</div>
                      {c.href ? (
                        <a href={c.href} style={{ color: "var(--text-heading)", textDecoration: "none", fontSize: "0.95rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>{c.value}</a>
                      ) : (
                        <span style={{ color: "var(--text-heading)", fontSize: "0.95rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={form.ref} className={`reveal-right ${form.visible ? "visible" : ""}`}>
            <form
              action="#" onSubmit={e => { e.preventDefault(); alert("Danke für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen."); }}
              style={{ background: "var(--bg-off)", border: "1px solid var(--border-card)", borderRadius: "16px", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", boxShadow: "var(--shadow-card)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 600, color: "var(--text-heading)", marginBottom: "0.5rem" }}>Nachricht senden</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row-2">
                <div><label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light)", marginBottom: "0.4rem", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.05em" }}>Name *</label><Input type="text" required placeholder="Ihr Name" /></div>
                <div><label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light)", marginBottom: "0.4rem", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.05em" }}>E-Mail *</label><Input type="email" required placeholder="ihre@email.de" /></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row-2">
                <div><label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light)", marginBottom: "0.4rem", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.05em" }}>Telefon</label><Input type="tel" placeholder="06261 ..." /></div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light)", marginBottom: "0.4rem", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.05em" }}>Leistung *</label>
                  <select required style={{ ...inputBase }}
                    onFocus={e => { e.target.style.borderColor = "var(--red)"; e.target.style.boxShadow = "0 0 0 3px rgba(219,15,16,0.15)"; }}
                    onBlur={e => { e.target.style.borderColor = "var(--border-card)"; e.target.style.boxShadow = "none"; }}>
                    <option value="">Bitte wählen...</option>
                    {["Kleinbusvermietung","Flughafentransfer","Rollstuhlfahrten/Behindertentransport","Ausflugsfahrten","Transportervermietung","Sonstiges"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.78rem", color: "var(--text-light)", marginBottom: "0.4rem", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.05em" }}>Nachricht *</label>
                <textarea required rows={4} placeholder="Ihre Nachricht..." style={{ ...inputBase, resize: "vertical", minHeight: "120px" }}
                  onFocus={e => { e.target.style.borderColor = "var(--red)"; e.target.style.boxShadow = "0 0 0 3px rgba(219,15,16,0.15)"; }}
                  onBlur={e => { e.target.style.borderColor = "var(--border-card)"; e.target.style.boxShadow = "none"; }} />
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <input type="checkbox" required id="dsg" style={{ marginTop: "3px", accentColor: "var(--red)", width: 16, height: 16 } as React.CSSProperties} />
                <label htmlFor="dsg" style={{ fontSize: "0.85rem", color: "var(--text-light)", fontFamily: "var(--font-body)", lineHeight: 1.5 }}>
                  Ich habe die <a href="/datenschutz" style={{ color: "var(--red)", textDecoration: "underline" }}>Datenschutzerklärung</a> gelesen und stimme zu. *
                </label>
              </div>
              <button type="submit" style={{ background: "var(--red)", color: "white", border: "none", borderRadius: "60px", padding: "1rem 2rem", fontSize: "1rem", fontWeight: 700, fontFamily: "var(--font-body)", cursor: "pointer", width: "100%", transition: "all 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--red-dark)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 35px var(--red-glow)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--red)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                Anfrage senden
              </button>
            </form>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.kontakt-grid{grid-template-columns:1fr!important}.form-row-2{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Google Maps - no grayscale filter, red top border */}
      <div style={{ borderTop: "4px solid var(--red)" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.4311970894137!2d9.14559131584759!3d49.36291347300322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797f5716fe6f491%3A0xba07bcc2c958d806!2sAm+Eisweiher+14%2C+74821+Mosbach!5e0!3m2!1sde!2sde!4v1510135699887"
          width="100%" height="400" style={{ border: 0, display: "block" }}
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          title="H. Paul GmbH Standort" />
      </div>
    </>
  );
}
