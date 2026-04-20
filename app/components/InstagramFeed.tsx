"use client";

import Script from "next/script";

const POSTS = [
  "https://www.instagram.com/p/DVUAqWRj5Z6/",
  "https://www.instagram.com/p/DVP-OEIDj68/",
  "https://www.instagram.com/p/DT3fGfwj30D/",
  "https://www.instagram.com/p/DTHElAhDu1F/",
  "https://www.instagram.com/p/DSeimrGjki4/",
  "https://www.instagram.com/p/DRnrwaRDzOH/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramFeed() {
  return (
    <section style={{ padding: "8rem 2.5rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>From the feed</p>
          <h2 className="brand-serif" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0d0d0d" }}>
            Recent Work
          </h2>
          <div className="thin-line" style={{ margin: "1.5rem auto 0" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          alignItems: "start",
        }}>
          {POSTS.map((url) => (
            <blockquote
              key={url}
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14"
              style={{
                background: "#fff",
                border: "1px solid #d8d7d2",
                margin: 0,
                maxWidth: "100%",
                width: "100%",
                minWidth: 0,
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "#888",
                    textDecoration: "none",
                  }}
                >
                  View this post on Instagram
                </a>
              </div>
            </blockquote>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="https://instagram.com/kozocustoms"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Follow @kozocustoms
          </a>
        </div>
      </div>

      {/* Next.js Script handles loading correctly — fires onLoad after DOM is ready */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </section>
  );
}
