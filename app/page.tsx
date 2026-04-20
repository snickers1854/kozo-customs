"use client";

import { useEffect, useRef } from "react";
import BirthdaySplash from "./components/BirthdaySplash";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const COLLECTIONS = [
  { id: 1, label: "Drop 001", title: "The Originals", subtitle: "Classic silhouettes, custom touch" },
  { id: 2, label: "Drop 002", title: "Heavy Weights", subtitle: "Premium blanks, signature finish" },
  { id: 3, label: "Drop 003", title: "Limited Runs", subtitle: "One-of-ones, never restocked" },
];

const MARQUEE = [
  "KŌZŌ CUSTŌMS", "—", "DM FOR COMMISSIONS", "—",
  "CUSTOM MADE", "—", "LIMITED DROPS", "—",
  "KŌZŌ CUSTŌMS", "—", "DM FOR COMMISSIONS", "—",
  "CUSTOM MADE", "—", "LIMITED DROPS", "—",
];

export default function Home() {
  const heroRef    = useFadeUp();
  const colRef     = useFadeUp();
  const aboutRef   = useFadeUp();
  const ctaRef     = useFadeUp();

  return (
    <>
      <BirthdaySplash />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.5rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(247,246,242,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid transparent",
      }}>
        {/* Monogram logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.15rem", letterSpacing: "0.06em", color: "#0d0d0d" }}>K</span>
          <span style={{ width: 1, height: 18, background: "#0d0d0d", display: "block" }} />
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.15rem", letterSpacing: "0.06em", color: "#0d0d0d" }}>Z</span>
        </a>

        <div style={{ display: "flex", gap: "2.5rem" }}>
          <a href="#collections" className="nav-link">Collections</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10rem 2rem 5rem",
        background: "var(--bg)",
        position: "relative",
      }}>
        <div ref={heroRef} className="fade-up" style={{ textAlign: "center", maxWidth: 1000 }}>

          <p className="section-label" style={{ marginBottom: "2.5rem" }}>
            Handcrafted &nbsp;—&nbsp; Custom &nbsp;—&nbsp; Limited
          </p>

          {/* Outlined top line */}
          <h1 style={{ marginBottom: "0.1em" }}>
            <span className="brand-outline" style={{ fontSize: "clamp(4rem, 16vw, 11rem)", display: "block" }}>
              KŌZŌ
            </span>
            <span className="brand-serif" style={{ fontSize: "clamp(3.8rem, 15vw, 10.5rem)", display: "block", color: "#0d0d0d" }}>
              CUSTŌMS
            </span>
          </h1>

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem",
            margin: "2.5rem auto",
          }}>
            <div className="thin-line" />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", color: "#888", letterSpacing: "0.05em" }}>
              Wear your identity
            </p>
            <div className="thin-line" />
          </div>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "0.9rem",
            lineHeight: 2,
            color: "#888",
            maxWidth: 420,
            margin: "0 auto 3rem",
            letterSpacing: "0.02em",
          }}>
            Every piece is a statement. Every stitch, intentional.
            Custom clothing built for those who don&apos;t follow the look.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#collections" className="btn-dark">View Collections</a>
            <a href="#contact" className="btn-ghost">DM for Commissions</a>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem",
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#bbb" }}>Scroll</p>
          <div style={{ width: 1, height: 36, background: "#0d0d0d", opacity: 0.2, animation: "pulse 2s infinite" }} />
        </div>
      </section>

      {/* ── MARQUEE (dark band) ── */}
      <div style={{
        background: "#0d0d0d",
        padding: "1.15rem 0",
        overflow: "hidden",
      }}>
        <div className="marquee-track" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "0.85rem",
          letterSpacing: "0.18em",
          color: "rgba(247,246,242,0.55)",
        }}>
          {MARQUEE.map((item, i) => (
            <span key={i} style={{ paddingRight: "3rem" }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── COLLECTIONS ── */}
      <section id="collections" style={{ padding: "8rem 2.5rem", background: "var(--bg)" }}>
        <div ref={colRef} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto" }}>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "0.75rem" }}>The Drops</p>
              <h2 className="brand-serif" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0d0d0d" }}>
                Collections
              </h2>
            </div>
            <a href="#contact" className="btn-ghost" style={{ fontSize: "0.62rem", padding: "0.75rem 1.75rem" }}>
              Inquire about a custom piece
            </a>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}>
            {COLLECTIONS.map((col) => (
              <div key={col.id} className="collection-card">
                {/* Placeholder image area */}
                <div style={{
                  width: "100%", aspectRatio: "3/4",
                  background: "#ede",
                  backgroundColor: col.id === 1 ? "#ece9e3" : col.id === 2 ? "#e6e4de" : "#ede9e1",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", inset: 16,
                    border: "1px solid rgba(13,13,13,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 300,
                      fontSize: "4rem",
                      color: "rgba(13,13,13,0.07)",
                      letterSpacing: "0.08em",
                    }}>
                      {col.id === 1 ? "KŌ" : col.id === 2 ? "ZŌ" : "KC"}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "1.75rem" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#aaa", marginBottom: "0.6rem" }}>
                    {col.label}
                  </p>
                  <h3 className="brand-serif" style={{ fontSize: "1.4rem", color: "#0d0d0d", marginBottom: "0.4rem" }}>
                    {col.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "#888", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                    {col.subtitle}
                  </p>
                  <a href="#contact" className="btn-ghost" style={{ fontSize: "0.6rem", padding: "0.65rem 1.5rem" }}>
                    Inquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT (dark) ── */}
      <section id="about" style={{ background: "#0d0d0d", padding: "8rem 2.5rem" }}>
        <div ref={aboutRef} className="fade-up" style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "7rem",
          alignItems: "center",
        }}>
          {/* Left visual */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "4/5",
              border: "1px solid rgba(247,246,242,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
              background: "#111",
            }}>
              <div style={{ position: "absolute", inset: 24, border: "1px solid rgba(247,246,242,0.05)" }} />
              {/* Outlined brand in plate */}
              <div style={{ textAlign: "center" }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2.5rem, 8vw, 5rem)",
                  letterSpacing: "0.1em",
                  WebkitTextStroke: "1px rgba(247,246,242,0.15)",
                  color: "transparent",
                  lineHeight: 1,
                }}>KŌZŌ</p>
                <div style={{ width: 1, height: 40, background: "rgba(247,246,242,0.12)", margin: "0.5rem auto" }} />
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  letterSpacing: "0.1em",
                  WebkitTextStroke: "1px rgba(247,246,242,0.15)",
                  color: "transparent",
                }}>CUSTŌMS</p>
              </div>
            </div>
            <div style={{
              position: "absolute", top: 16, left: 16, right: -16, bottom: -16,
              border: "1px solid rgba(247,246,242,0.06)", zIndex: -1,
            }} />
          </div>

          {/* Right text */}
          <div>
            <p className="section-label" style={{ color: "rgba(247,246,242,0.35)", marginBottom: "1.25rem" }}>Our Story</p>
            <h2 className="brand-serif" style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--fg-dark)",
              marginBottom: "2rem",
              lineHeight: 1.1,
            }}>
              Built on<br />
              <em style={{ fontStyle: "italic" }}>Originality</em>
            </h2>

            <div className="thin-line-light" style={{ marginBottom: "2rem" }} />

            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.88rem", lineHeight: 2, color: "rgba(247,246,242,0.55)", marginBottom: "1.5rem" }}>
              KŌZŌ CUSTŌMS was born from a simple belief: your clothes should say something
              real about who you are. Not a logo someone else owns — your story, your aesthetic,
              your piece.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.88rem", lineHeight: 2, color: "rgba(247,246,242,0.55)", marginBottom: "3rem" }}>
              Every order is a collaboration. We work through the vision with you and deliver
              something you won&apos;t find anywhere else — then close the run.
            </p>

            <div style={{ display: "flex", gap: "3rem" }}>
              {[["100%", "Custom"], ["0", "Restocks"], ["∞", "Possibilities"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="brand-serif" style={{ fontSize: "2rem", color: "var(--fg-dark)" }}>{val}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(247,246,242,0.3)", marginTop: "0.25rem" }}>{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "8rem 2.5rem", background: "var(--bg)", textAlign: "center" }}>
        <div ref={ctaRef} className="fade-up" style={{ maxWidth: 640, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: "1.75rem" }}>Ready to create?</p>
          <h2 className="brand-serif" style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            color: "#0d0d0d",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}>
            Let&apos;s build<br />
            <em style={{ fontStyle: "italic" }}>your piece</em>
          </h2>
          <div className="thin-line" style={{ margin: "0 auto 2rem" }} />
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.88rem", color: "#888", lineHeight: 2, marginBottom: "3rem" }}>
            Have a concept? Want to start from scratch? Either way, slide into the DMs
            and let&apos;s make something that&apos;s genuinely yours.
          </p>
          <a href="https://instagram.com/kozocustoms" target="_blank" rel="noopener noreferrer" className="btn-dark">
            DM on Instagram
          </a>
        </div>
      </section>

      {/* ── FOOTER (dark) ── */}
      <footer id="contact" style={{ background: "#0d0d0d", padding: "5rem 2.5rem 3rem", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "4rem",
            marginBottom: "4rem",
          }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.35rem", letterSpacing: "0.06em", color: "var(--fg-dark)" }}>KŌZŌ</span>
                <span style={{ width: 1, height: 20, background: "rgba(247,246,242,0.3)", display: "block" }} />
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.35rem", letterSpacing: "0.06em", color: "var(--fg-dark)" }}>CUSTŌMS</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "rgba(247,246,242,0.35)", lineHeight: 1.9, maxWidth: 260 }}>
                Custom clothing built for individuals who know exactly who they are.
              </p>
            </div>

            {/* Links */}
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(247,246,242,0.25)", marginBottom: "1.5rem" }}>Navigate</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                <a href="#collections" className="nav-link-light">Collections</a>
                <a href="#about" className="nav-link-light">About</a>
                <a href="#contact" className="nav-link-light">Contact</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(247,246,242,0.25)", marginBottom: "1.5rem" }}>Get in Touch</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                <a href="https://instagram.com/kozocustoms" target="_blank" rel="noopener noreferrer" className="nav-link-light">@kozocustoms</a>
                <a href="mailto:hello@kozocustoms.com" className="nav-link-light">hello@kozocustoms.com</a>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: "1px solid rgba(247,246,242,0.07)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "rgba(247,246,242,0.2)", letterSpacing: "0.08em" }}>
              © {new Date().getFullYear()} KŌZŌ CUSTŌMS
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.8rem", color: "rgba(247,246,242,0.2)", letterSpacing: "0.05em" }}>
              Wear your identity
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          section[id="about"] > div > div,
          section[id="about"] > div > div[style] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
