import Link from "next/link";
import Logo from "@/components/Logo";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Get In Touch", href: "/contact-us" },
  ],
  Resources: [
    { label: "Blogs", href: "/blogs" },
    { label: "Case Studies", href: "/customer-stories" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/houseofagents-ai/", external: true },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#D95938" }}>
      <div className="container-site" style={{ paddingTop: 40, paddingBottom: 0 }}>

        {/* ── Inner bordered grid ── */}
        <div
          className="footer-inner-grid"
          style={{
            border: "1px solid rgba(255,255,255,0.35)",
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
          }}
        >
          {/* ── Brand column ── */}
          <div className="footer-brand-col" style={{ padding: "52px 48px 52px 48px", borderRight: "1px solid rgba(255,255,255,0.35)" }}>

            {/* Logo */}
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", marginBottom: 28, textDecoration: "none" }}
            >
              <Logo color="#F8F7F7" height={26} />
            </Link>

            {/* Tagline */}
            <p style={{ fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, marginBottom: 40, maxWidth: 380, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
              10x your productivity with House of Agents. Save countless hours in manual tasks with our multi-agents today.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              {/* Solid white — primary */}
              <Link
                href="/try-ai-agent"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "14px 32px", fontSize: 14, fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.06em",
                  background: "#ffffff", color: "#000000",
                  textDecoration: "none", border: "none",
                  fontFamily: "Plusjakartasans, Arial, sans-serif",
                }}
              >
                Try Arya
              </Link>
              {/* Outlined — secondary */}
              <Link
                href="https://calendly.com/hello-houseofagents-8n-x/30min"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "14px 32px", fontSize: 14, fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: "0.06em",
                  background: "transparent", color: "#ffffff",
                  textDecoration: "none", border: "1px solid rgba(255,255,255,0.7)",
                  fontFamily: "Plusjakartasans, Arial, sans-serif",
                }}
              >
                Book Demo
              </Link>
            </div>
          </div>

          {/* ── Link columns ── */}
          {Object.entries(footerLinks).map(([section, links], colIdx, arr) => (
            <div
              key={section}
              className={`footer-link-col${colIdx === arr.length - 1 ? " footer-link-col-last" : ""}`}
              style={{
                padding: "52px 48px",
                borderRight: colIdx === 0 ? "1px solid rgba(255,255,255,0.35)" : "none",
              }}
            >
              <h4 style={{
                fontFamily: "Bdogrotesk, Arial, sans-serif",
                fontSize: 22, fontWeight: 400,
                color: "#F8F7F7", margin: "0 0 32px",
                letterSpacing: "normal",
              }}>
                {section}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 12, fontWeight: 400,
                        color: "rgba(255,255,255,0.85)",
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontFamily: "Plusjakartasans, Arial, sans-serif",
                      }}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          paddingTop: 20, paddingBottom: 24,
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: 12,
        }}>
          <p style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.7)", margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
            ©2026 House of Agents. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 28 }}>
            <Link href="/privacy-policy" style={{ fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.7)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" style={{ fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.7)", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
