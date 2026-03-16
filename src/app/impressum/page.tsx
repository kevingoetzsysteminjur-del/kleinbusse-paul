import Link from "next/link";
export default function ImpressumPage() {
  const sections = [
    { title: "Angaben gemäß § 5 TMG", body: "H. Paul GmbH\nAm Eisweiher 14\n74821 Mosbach" },
    { title: "Vertreten durch", body: "Timo Scheuermann (Inhaber)" },
    { title: "Handelsregister", body: "Registernummer: HRB 926\nRegistergericht: Amtsgericht Mannheim" },
    { title: "Kontakt", body: "Telefon: 06261 2526\nFax: 06261 37954\nE-Mail: info@kleinbusse-paul.de" },
    { title: "Haftungsausschluss", body: "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen." },
    { title: "Haftung für Links", body: "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben." },
  ];
  return (
    <main style={{ backgroundColor: "var(--bg-white)", minHeight: "100vh", padding: "8rem 2.5rem 6rem", fontFamily: "var(--font-body)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--red)", textDecoration: "none", fontSize: "0.875rem", marginBottom: "2.5rem" }}>← Zurück zur Startseite</Link>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.75rem", fontWeight: 700, marginBottom: "3rem", color: "var(--text-heading)" }}>Impressum</h1>
        {sections.map((s, i) => (
          <section key={i} style={{ marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: i < sections.length - 1 ? "1px solid var(--border-card)" : "none" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--red)", marginBottom: "0.875rem", fontWeight: 600 }}>{s.title}</h2>
            <div style={{ color: "var(--text-body)", lineHeight: 1.85, fontSize: "0.975rem", whiteSpace: "pre-line" }}>{s.body}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
