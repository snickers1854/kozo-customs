"use client";

export default function InstagramFeed() {
  return (
    <section style={{ background: "#0d0d0d", padding: "8rem 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Top label */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p className="section-label" style={{ color: "rgba(247,246,242,0.35)", marginBottom: "0.75rem" }}>
            Follow the work
          </p>
          <h2 className="brand-serif" style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--fg-dark)",
          }}>
            Recent Work
          </h2>
          <div className="thin-line-light" style={{ margin: "1.5rem auto 0" }} />
        </div>

        {/* Instagram handle block */}
        <a
          href="https://instagram.com/kozocustoms"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "block" }}
        >
          <div style={{
            border: "1px solid rgba(247,246,242,0.1)",
            padding: "5rem 3rem",
            textAlign: "center",
            transition: "border-color 0.3s, background 0.3s",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(247,246,242,0.3)";
              (e.currentTarget as HTMLDivElement).style.background = "rgba(247,246,242,0.03)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(247,246,242,0.1)";
              (e.currentTarget as HTMLDivElement).style.background = "transparent";
            }}
          >
            {/* Large faded handle in background */}
            <p style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(3rem, 12vw, 9rem)",
              letterSpacing: "0.05em",
              color: "rgba(247,246,242,0.03)",
              userSelect: "none",
              pointerEvents: "none",
              margin: 0,
            }}>
              @kozocustoms
            </p>

            {/* Foreground content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Instagram icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(247,246,242,0.3)"
                strokeWidth="1"
                style={{ width: 32, height: 32, margin: "0 auto 2rem", display: "block" }}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="rgba(247,246,242,0.3)" stroke="none" />
              </svg>

              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 300,
                letterSpacing: "0.06em",
                color: "var(--fg-dark)",
                marginBottom: "1rem",
              }}>
                @kozocustoms
              </p>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "0.78rem",
                color: "rgba(247,246,242,0.35)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "2.5rem",
              }}>
                See every piece on Instagram
              </p>

              <span className="btn-ghost-light">
                Follow @kozocustoms
              </span>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}
