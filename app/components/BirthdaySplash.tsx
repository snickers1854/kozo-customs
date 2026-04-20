"use client";

import { useEffect, useRef, useState } from "react";

export default function BirthdaySplash() {
  const [phase, setPhase] = useState<"visible" | "hiding" | "hidden">("visible");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Confetti — black & white to match brand
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const COLORS = ["#0d0d0d", "#888", "#d8d7d2", "#0d0d0d", "#555"];
    const pieces: {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; angle: number; spin: number; shape: number;
    }[] = [];

    for (let i = 0; i < 100; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: -10 - Math.random() * 300,
        vx: (Math.random() - 0.5) * 1.5,
        vy: 1.2 + Math.random() * 2.5,
        size: 3 + Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.12,
        shape: Math.random() > 0.5 ? 0 : 1, // rect or line
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pieces) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.strokeStyle = p.color;
        ctx.fillStyle = p.color;
        ctx.lineWidth = 1;
        if (p.shape === 0) {
          ctx.fillRect(-p.size / 2, -p.size * 0.2, p.size, p.size * 0.4);
        } else {
          ctx.beginPath();
          ctx.moveTo(-p.size / 2, 0);
          ctx.lineTo(p.size / 2, 0);
          ctx.stroke();
        }
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
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "2rem" }}>

        {/* Monogram circle */}
        <div style={{
          width: 110, height: 110, borderRadius: "50%",
          border: "1px solid #0d0d0d",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 2.5rem",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "1.5rem",
            letterSpacing: "0.05em",
            color: "#0d0d0d",
          }}>
            <span>K</span>
            <span style={{ width: 1, height: 24, background: "#0d0d0d", display: "block" }} />
            <span>Z</span>
          </div>
        </div>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.6rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: "1.5rem",
        }}>
          A birthday surprise
        </p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: "clamp(2.5rem, 10vw, 5rem)",
          lineHeight: 1,
          color: "#0d0d0d",
          letterSpacing: "0.05em",
          marginBottom: "1rem",
        }}>
          Happy Birthday
        </h1>

        <div style={{ width: "2.5rem", height: 1, background: "#0d0d0d", margin: "0 auto 1.75rem" }} />

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.95rem",
          color: "#0d0d0d",
          opacity: 0.6,
          marginBottom: "2.5rem",
          lineHeight: 1.8,
          maxWidth: 340,
        }}>
          Your vision, your craft, your brand —<br />
          welcome to <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.05rem", opacity: 1, color: "#0d0d0d" }}>KŌZŌ CUSTŌMS</em>.
        </p>

        <button className="btn-dark" onClick={dismiss}>
          Enter the site
        </button>
      </div>
    </div>
  );
}
