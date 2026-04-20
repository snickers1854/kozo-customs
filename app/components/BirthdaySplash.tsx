"use client";

import { useEffect, useRef, useState } from "react";

export default function BirthdaySplash() {
  const [phase, setPhase] = useState<"visible" | "hiding" | "hidden">("visible");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Lock body scroll while splash is up
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Confetti canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const COLORS = ["#c8a96e", "#f5f0e8", "#8a6e3e", "#d4b87a", "#ffffff"];
    const pieces: {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; angle: number; spin: number;
    }[] = [];

    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: -10 - Math.random() * 200,
        vx: (Math.random() - 0.5) * 2,
        vy: 1.5 + Math.random() * 3,
        size: 4 + Math.random() * 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.15,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pieces) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.4);
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        if (p.y > canvas.height + 20) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(raf);
  }, []);

  const dismiss = () => {
    setPhase("hiding");
    document.body.style.overflow = "";
    setTimeout(() => setPhase("hidden"), 900);
  };

  if (phase === "hidden") return null;

  return (
    <div className={`splash-overlay${phase === "hiding" ? " hiding" : ""}`}>
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "2rem" }}>
        {/* Gold ring */}
        <div style={{
          width: 120, height: 120, borderRadius: "50%",
          border: "2px solid #c8a96e",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 2rem",
          animation: "spin-slow 8s linear infinite",
        }}>
          <div style={{
            width: 90, height: 90, borderRadius: "50%",
            border: "1px solid #8a6e3e",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: "2.5rem" }}>🎂</span>
          </div>
        </div>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#c8a96e",
          marginBottom: "1.25rem",
        }}>
          A special surprise
        </p>

        <h1 style={{
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(2rem, 8vw, 4rem)",
          lineHeight: 1,
          color: "#f5f0e8",
          marginBottom: "0.75rem",
        }}>
          HAPPY<br />
          <span style={{ color: "#c8a96e" }}>BIRTHDAY</span>
        </h1>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "1.1rem",
          color: "#f5f0e8",
          opacity: 0.8,
          marginTop: "1rem",
          marginBottom: "2.5rem",
          lineHeight: 1.6,
          maxWidth: 380,
        }}>
          Your vision, your craft, your brand —<br />
          welcome to <strong style={{ color: "#c8a96e" }}>KŌZŌ CUSTOMS</strong>.
        </p>

        <button className="btn-primary" onClick={dismiss}>
          Enter the site
        </button>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
