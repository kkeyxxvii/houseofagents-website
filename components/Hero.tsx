"use client";

import Link from "next/link";
import LogoMarquee from "@/components/LogoMarquee";

const CDN = "https://cdn.prod.website-files.com/67c5741832d4da33d634d681";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={`${CDN}/681db9d33866726bc80d3523_freepik__wide-shot-two-futuristic-figures-stand-on-a-cliff-__55424-transcode.mp4`}
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-end"
        style={{ minHeight: "100vh" }}
      >
        <div className="container-site pb-20">
          <div className="max-w-2xl mb-12">
            {/* H1 layout: "AI Workforce" + star on same flex row, then "for Sales" below */}
            <div style={{ marginBottom: 24 }}>
              {/* Row 1: AI Workforce + Star */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "nowrap",
                }}
              >
                <h1
                  className="home-hero-h1"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(36px, 7vw, 72px)",
                    lineHeight: 1.1,
                    letterSpacing: "normal",
                    color: "#F8F7F7",
                    margin: 0,
                  }}
                >
                  AI Workforce
                </h1>
                {/* Star SVG — stroke-based snowflake, 48×44px */}
                <div
                  className="home-hero-star"
                  style={{
                    width: 48,
                    height: 44,
                    flexShrink: 0,
                    color: "#F8F7F7",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 0V22L33 2.94744L22 22L41.0526 11L22 22H44H22L41.0526 33L22 22L33 41.0526L22 22V44V22L11 41.0526L22 22L2.94744 33L22 22H0H22L2.94744 11L22 22L11 2.94744L22 22V0Z"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>

              {/* Row 2: for Sales */}
              <h1
                className="home-hero-h1"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(36px, 7vw, 72px)",
                  lineHeight: 1.1,
                  letterSpacing: "normal",
                  color: "#F8F7F7",
                  margin: 0,
                }}
              >
                for Sales
              </h1>
            </div>

            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "24.8px",
                color: "rgb(255,255,255)",
                maxWidth: 512,
                marginBottom: 32,
                marginTop: 0,
              }}
            >
              Meet Your AI Team. Always On. Built to Scale.{" "}
              House of Agents brings human-like AI agents to sales –
              helping you work faster, smarter, and at scale.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <Link
                href="/try-ai-agent"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 32px",
                  fontSize: 16,
                  fontWeight: 400,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  borderRadius: 2,
                  background: "#D95938",
                  color: "#F8F7F7",
                  textDecoration: "none",
                }}
              >
                Try Arya
              </Link>
              <Link
                href="https://calendly.com/hello-houseofagents-8n-x/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 32px",
                  fontSize: 16,
                  fontWeight: 400,
                  letterSpacing: "normal",
                  textTransform: "uppercase",
                  borderRadius: 2,
                  background: "#F8F7F7",
                  color: "#000000",
                  textDecoration: "none",
                }}
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Logo marquee — dark variant inside hero */}
        <LogoMarquee dark />
      </div>
    </section>
  );
}
