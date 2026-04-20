"use client";

import { useEffect, useRef } from "react";
import BirthdaySplash from "./components/BirthdaySplash";

// ── Scroll-reveal hook ──
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Collection data ──
const COLLECTIONS = [
  {
    id: 1,
    title: "The Originals",
    subtitle: "Classic fits, custom edge",
    label: "Drop 001",
    bg: "#111",
    accent: "#1a1a1a",
    emoji: "✦",
  },
  {
    id: 2,
    title: "Heavy Weights",
    subtitle: "Premium blanks, signature touch",
    label: "Drop 002",
    bg: "#0f0f0f",
    accent: "#181818",
    emoji: "◈",
  },
  {
    id: 3,
    title: "Limited Runs",
    subtitle: "One-of-ones, no restocks",
    label: "Drop 003",
    bg: "#111",
    accent: "#1a1a1a",
    emoji: "◇",
  },
];

// ── Marquee items ──
const MARQUEE_ITEMS = [
  "KŌZŌ CUSTOMS",
  "✦",
  "WEAR YOUR IDENTITY",
  "✦",
  "CUSTOM MADE",
  "✦",
  "LIMITED DROPS",
  "✦",
  "KŌZŌ CUSTOMS",
  "✦",
  "WEAR YOUR IDENTITY",
  "✦",
  "CUSTOM MADE",
  "✦",
  "LIMITED DROPS",
  "✦",
];

export default function Home() {
  const heroRef = useFadeUp();
  const collectionsRef = useFadeUp();
  const aboutRef = useFadeUp();
  const ctaRef = useFadeUp();

  return (
    <>
      <BirthdaySplash />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.25rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, transparent 100%)",
      }}>
        <a href="#" style={{
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 900,
          fontSize: "1rem",
          color: "#f5f0e8",
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}>
          K<span style={{ color: "#c8a96e" }}>Ō</span>Z<span style={{ color: "#c8a96e" }}>Ō</span>
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
        padding: "8rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }} />

        {/* Glow */}
        <div style={{
          position: "absolute", top: "20%", left: "50%",
          transform: "translateX(-50%)",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)",
          zIndex: 0,
        }} />

        <div ref={heroRef} className="fade-up" style={{
          position: "relative", zIndex: 1, textAlign: "center", maxWidth: 900,
        }}>
          <p className="hero-tagline" style={{ marginBottom: "2rem" }}>
            Handcrafted ✦ Custom ✦ Limited
          </p>

          <h1 className="brand-name" style={{ fontSize: "clamp(3.5rem, 14vw, 10rem)", marginBottom: "1.5rem" }}>
            K<span className="gold-text">Ō</span>Z<span className="gold-text">Ō</span><br />
            CUSTOMS
          </h1>

          <div className="gold-line" style={{ margin: "0 auto 2rem" }} />

          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            opacity: 0.6,
            maxWidth: 480,
            margin: "0 auto 3rem",
            fontWeight: 300,
          }}>
            Every piece is a statement. Every stitch, intentional.
            Custom clothing built for those who don&apos;t follow the look.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#collections" className="btn-primary">Shop Collections</a>
            <a href="#about" className="btn-outline">Our Story</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.4,
        }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Scroll</p>
          <div style={{ width: 1, height: 40, background: "#c8a96e", animation: "pulse 2s infinite" }} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{
        borderTop: "1px solid #222",
        borderBottom: "1px solid #222",
        padding: "1.1rem 0",
        overflow: "hidden",
      }}>
        <div className="marquee-track" style={{
          fontFamily: "'Unbounded', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: "#c8a96e",
        }}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} style={{ paddingRight: "3rem" }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── COLLECTIONS ── */}
      <section id="collections" style={{ padding: "7rem 2.5rem" }}>
        <div ref={collectionsRef} className="fade-up" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: "1rem" }}>The Drops</p>
            <h2 style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}>
              COLLECTIONS
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>
            {COLLECTIONS.map((col) => (
              <div key={col.id} className="collection-card" style={{ padding: "2.5rem" }}>
                <div style={{
                  width: "100%", aspectRatio: "4/3",
                  background: col.accent,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "2rem",
                  fontSize: "3rem",
                  color: "#c8a96e",
                  fontFamily: "'Unbounded', sans-serif",
                }}>
                  {col.emoji}
                </div>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#c8a96e", marginBottom: "0.75rem" }}>
                  {col.label}
                </p>
                <h3 style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}>
                  {col.title}
                </h3>
                <p style={{ fontSize: "0.85rem", opacity: 0.5, marginBottom: "1.75rem" }}>
                  {col.subtitle}
                </p>
                <a href="#contact" className="btn-outline" style={{ fontSize: "0.65rem", padding: "0.65rem 1.5rem" }}>
                  Inquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{
        padding: "7rem 2.5rem",
        background: "#0e0e0e",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
      }}>
        <div ref={aboutRef} className="fade-up" style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}>
          {/* Left: visual */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "3/4",
              border: "1px solid #222",
              background: "#111",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Geometric accent */}
              <div style={{
                position: "absolute", inset: 20,
                border: "1px solid rgba(200,169,110,0.15)",
              }} />
              <div style={{
                fontFamily: "'Unbounded', sans-serif",
                fontSize: "clamp(3rem, 10vw, 6rem)",
                fontWeight: 900,
                color: "rgba(200,169,110,0.08)",
                textAlign: "center",
                lineHeight: 1,
                userSelect: "none",
              }}>
                KŌ<br />ZŌ
              </div>
            </div>
            {/* Offset border accent */}
            <div style={{
              position: "absolute", top: 20, left: 20,
              right: -20, bottom: -20,
              border: "1px solid rgba(200,169,110,0.2)",
              zIndex: -1,
            }} />
          </div>

          {/* Right: text */}
          <div>
            <p className="section-label" style={{ marginBottom: "1.25rem" }}>Our Story</p>
            <h2 style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "2rem",
            }}>
              BUILT ON<br />
              <span style={{ color: "#c8a96e" }}>ORIGINALITY</span>
            </h2>

            <div className="gold-line" style={{ marginBottom: "2rem" }} />

            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, opacity: 0.65, marginBottom: "1.5rem" }}>
              KŌZŌ CUSTOMS was born from a simple belief: your clothes should say something
              real about who you are. Not a logo someone else owns — your story, your aesthetic,
              your piece.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, opacity: 0.65, marginBottom: "2.5rem" }}>
              Every order is treated as a collaboration. We source quality blanks, work through
              the vision with you, and deliver something you won&apos;t find anywhere else.
            </p>

            <div style={{ display: "flex", gap: "3rem" }}>
              <div>
                <p style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#c8a96e",
                }}>100%</p>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", opacity: 0.5, textTransform: "uppercase" }}>
                  Custom
                </p>
              </div>
              <div>
                <p style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#c8a96e",
                }}>0</p>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", opacity: 0.5, textTransform: "uppercase" }}>
                  Restocks
                </p>
              </div>
              <div>
                <p style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#c8a96e",
                }}>∞</p>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", opacity: 0.5, textTransform: "uppercase" }}>
                  Possibilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "7rem 2.5rem", textAlign: "center" }}>
        <div ref={ctaRef} className="fade-up" style={{ maxWidth: 700, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>Ready to create?</p>
          <h2 style={{
            fontFamily: "'Unbounded', sans-serif",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "1.5rem",
          }}>
            LET&apos;S BUILD<br />
            <span style={{ color: "#c8a96e" }}>YOUR PIECE</span>
          </h2>
          <p style={{ fontSize: "0.95rem", opacity: 0.55, lineHeight: 1.8, marginBottom: "3rem" }}>
            Have a concept? Want to start from scratch? Either way, reach out and
            let&apos;s make something that&apos;s genuinely yours.
          </p>
          <a href="#contact" className="btn-primary">Start a Custom Order</a>
        </div>
      </section>

      {/* ── CONTACT / FOOTER ── */}
      <footer id="contact" style={{
        background: "#080808",
        borderTop: "1px solid #1a1a1a",
        padding: "5rem 2.5rem 3rem",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "4rem",
            marginBottom: "4rem",
          }}>
            {/* Brand column */}
            <div>
              <h3 style={{
                fontFamily: "'Unbounded', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 900,
                marginBottom: "1rem",
              }}>
                K<span style={{ color: "#c8a96e" }}>Ō</span>Z<span style={{ color: "#c8a96e" }}>Ō</span><br />CUSTOMS
              </h3>
              <p style={{ fontSize: "0.85rem", opacity: 0.45, lineHeight: 1.8, maxWidth: 280 }}>
                Custom clothing built for individuals who know exactly who they are.
              </p>
            </div>

            {/* Links */}
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1.5rem" }}>
                Navigate
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <a href="#collections" className="nav-link">Collections</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1.5rem" }}>
                Get in Touch
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <a href="mailto:hello@kozocustoms.com" className="nav-link">
                  hello@kozocustoms.com
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid #1a1a1a",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <p style={{ fontSize: "0.7rem", opacity: 0.3, letterSpacing: "0.1em" }}>
              © {new Date().getFullYear()} KŌZŌ CUSTOMS. All rights reserved.
            </p>
            <p style={{ fontSize: "0.7rem", opacity: 0.3, letterSpacing: "0.1em" }}>
              WEAR YOUR IDENTITY ✦
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          footer div[style*="grid-template-columns: 2fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
