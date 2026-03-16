"use client";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    text: "Wir buchen seit Jahren unsere Vereinsfahrten bei H. Paul. Die Busse sind immer top gepflegt und die Fahrer freundlich und pünktlich. Absolut empfehlenswert!",
    name: "Michael Kramer",
    role: "Vorsitzender SV Mosbach",
  },
  {
    text: "Der Rollstuhltransport für meine Mutter war hervorragend. Die Fahrer waren einfühlsam und haben sich wunderbar um sie gekümmert. Vielen Dank für diesen tollen Service!",
    name: "Sandra Fischer",
    role: "Mosbach",
  },
  {
    text: "Für unsere Klassenfahrt nach München hat alles perfekt geklappt. Pünktlich, sicher und die Schüler waren begeistert vom komfortablen Bus. Gerne wieder!",
    name: "Thomas Weber",
    role: "Lehrer am Nicolaus-Kistner-Gymnasium",
  },
];

function StarRating() {
  return (
    <div style={{ display: "flex", gap: "0.2rem" }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#F59E0B">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const header = useReveal(0);
  const cards = [useReveal(100), useReveal(200), useReveal(300)];

  return (
    <section style={{ backgroundColor: "var(--bg-off)", padding: "7rem 2.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div ref={header.ref} className={`reveal ${header.visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Kundenstimmen</div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 700, color: "var(--text-heading)" }}>
            Was unsere Kunden sagen
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={cards[i].ref}
              className={`reveal testimonial-card ${cards[i].visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div style={{
                fontSize: "4rem", lineHeight: 1, color: "var(--red)", opacity: 0.2,
                fontFamily: "Georgia, serif", marginBottom: "0.5rem", userSelect: "none",
              }}>"</div>
              <p style={{
                fontStyle: "italic", color: "var(--text-body)", fontSize: "0.95rem",
                lineHeight: 1.7, marginBottom: "1.5rem", flexGrow: 1,
              }}>
                {t.text}
              </p>
              <hr style={{ border: "none", borderTop: "1px solid var(--border-card)", marginBottom: "1.25rem" }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--text-heading)", fontSize: "0.95rem", fontFamily: "var(--font-body)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-light)", fontFamily: "var(--font-body)" }}>{t.role}</div>
                </div>
                <StarRating />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .testimonial-card {
          background: white;
          border: 1px solid var(--border-card);
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-card);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
