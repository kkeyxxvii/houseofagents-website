"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

interface NavbarProps {
  variant?: "dark" | "light";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = variant === "light";
  // Light variant: white bg, dark text. Dark variant: transparent → dark on scroll.
  const navBg = isLight
    ? scrolled ? "rgba(255,255,255,0.97)" : "#ffffff"
    : scrolled ? "rgba(0,0,0,0.85)" : "transparent";
  const navBorder = isLight ? "1px solid #e5e5e5" : "1px solid rgb(240, 230, 209)";
  const textColor = isLight ? "#111111" : "#F8F7F7";
  const iconColor = isLight ? "#111111" : "#F8F7F7";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "transparent" }}
    >
      {/* Inner bordered container — matches reference .nav_container */}
      <div
        style={{
          margin: "1rem 1.5rem",
          border: navBorder,
          display: "flex",
          alignItems: "stretch",
          height: "69px",
          background: navBg,
          backdropFilter: "blur(8px)",
          transition: "background 0.3s",
        }}
      >
        {/* Logo — snowflake icon + wordmark */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 24,
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          <Logo color={textColor} height={20} />
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop — About us */}
        <Link
          href="/about"
          className="hidden lg:flex items-center"
          style={{
            padding: "0 32px",
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: "normal",
            textTransform: "uppercase",
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          About us
        </Link>

        {/* Desktop — TRY ARYA (fills full nav height) */}
        <Link
          href="/try-ai-agent"
          className="hidden lg:flex items-center justify-center"
          style={{
            padding: "24px 32px",
            fontSize: 12.8,
            fontWeight: 400,
            letterSpacing: "normal",
            textTransform: "uppercase",
            background: "#D95938",
            color: "#F8F7F7",
            whiteSpace: "nowrap",
            borderRadius: 2,
          }}
        >
          Try Arya
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex items-center"
          style={{ padding: "0 20px", color: iconColor }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden flex flex-col"
          style={{
            margin: "0 1.5rem",
            borderLeft: navBorder,
            borderRight: navBorder,
            borderBottom: navBorder,
            background: isLight ? "rgba(255,255,255,0.97)" : "rgba(0,0,0,0.92)",
            padding: "16px 20px",
            gap: 12,
          }}
        >
          <Link
            href="/about"
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: textColor,
            }}
            onClick={() => setMenuOpen(false)}
          >
            About us
          </Link>
          <Link
            href="/try-ai-agent"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 24px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "#D95938",
              color: "#F8F7F7",
              borderRadius: 2,
            }}
            onClick={() => setMenuOpen(false)}
          >
            Try Arya
          </Link>
        </div>
      )}
    </header>
  );
}
