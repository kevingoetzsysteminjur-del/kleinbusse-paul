"use client";
import { useEffect, useState } from "react";
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

function GoogleReviewBadge() {
  return (
    <a
      href="https://g.page/r/review"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex", alignItems: "center", gap: "0.75rem",
        marginTop: "2rem", padding: "1rem 1.25rem",
        background: "white", borderRadius: "12px",
        border: "1px solid var(--border-card)",
        textDecoration: "none",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div>
        <div style={{ fontSize: "0.78rem", color: "var(--text-light)", fontFamily: "var(--font-body)", marginBottom: "0.2rem" }}>
          Bewerten Sie uns auf Google
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <div style={{ display: "flex", gap: "0.1rem" }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="#F59E0B">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-heading)", fontFamily: "var(--font-body)" }}>4.8 von 5</span>
        </div>
      </div>
    </a>
  );
}

export default function KontaktSection() {
  const header = useReveal(0);
  const infoCard = useReveal(100);
  const form = useReveal(200);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const preselect = sessionStorage.getItem("hero_service");
    if (preselect) {
      setSelectedService(preselect);
      sessionStorage.removeItem("hero_service");
    }
  }, []);

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
              <GoogleReviewBadge />
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
                  <select
                    required
                    value={selectedService}
                    onChange={e => setSelectedService(e.target.value)}
                    style={{ ...inputBase }}
                    onFocus={e => { e.target.style.borderColor = "var(--red)"; e.target.style.boxShadow = "0 0 0 3px rgba(219,15,16,0.15)"; }}
                    onBlur={e => { e.target.style.borderColor = "var(--border-card)"; e.target.style.boxShadow = "none"; }}
                  >
                    <option value="">Bitte wählen...</option>
                    {["Kleinbusvermietung","Flughafentransfer","Rollstuhlfahrten/Behindertentransport","Ausflugsfahrten","Transportervermietung","Sonstiges"].map(o => <option key={o} value={o}>{o}</option>)}
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
