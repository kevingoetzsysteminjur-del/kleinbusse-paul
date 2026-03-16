import Link from "next/link";
export default function DatenschutzPage() {
  const sections = [
    { title: "1. Verantwortlicher", body: "H. Paul GmbH, Timo Scheuermann\nAm Eisweiher 14, 74821 Mosbach\nTelefon: 06261 2526\nE-Mail: info@kleinbusse-paul.de" },
    { title: "2. Datenerhebung auf unserer Website", body: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Ihr Browser übermittelt beim Besuch automatisch Informationen an den Server. Diese werden temporär in Log-Dateien gespeichert." },
    { title: "3. Server-Log-Dateien", body: "Folgende Informationen werden erfasst: Browsertyp und -version, Betriebssystem, Referrer URL, IP-Adresse, Datum und Uhrzeit des Zugriffs. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt." },
    { title: "4. Cookies", body: "Unsere Website verwendet ausschließlich technisch notwendige Cookies. Es werden keine Marketing- oder Analyse-Cookies eingesetzt." },
    { title: "5. Kontaktformular", body: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO." },
    { title: "6. Ihre Rechte", body: "Sie haben das Recht auf: Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierzu an: info@kleinbusse-paul.de" },
    { title: "7. Anwendbares Recht", body: "Es gilt das Datenschutzrecht der Bundesrepublik Deutschland sowie die DSGVO der Europäischen Union." },
  ];
  return (
    <main style={{ backgroundColor: "var(--bg-white)", minHeight: "100vh", padding: "8rem 2.5rem 6rem", fontFamily: "var(--font-body)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--red)", textDecoration: "none", fontSize: "0.875rem", marginBottom: "2.5rem" }}>← Zurück zur Startseite</Link>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.75rem", fontWeight: 700, marginBottom: "3rem", color: "var(--text-heading)" }}>Datenschutzerklärung</h1>
        {sections.map((s, i) => (
          <section key={i} style={{ marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: i < sections.length - 1 ? "1px solid var(--border-card)" : "none" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--red)", marginBottom: "0.875rem", fontWeight: 600 }}>{s.title}</h2>
            <p style={{ color: "var(--text-body)", lineHeight: 1.85, fontSize: "0.975rem", whiteSpace: "pre-line" }}>{s.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
