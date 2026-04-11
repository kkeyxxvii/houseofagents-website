import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About us", href: "/about" },
    { label: "GET IN TOUCH", href: "/contact-us" },
  ],
  Resources: [
    { label: "Blogs", href: "/blogs" },
    { label: "Case studies", href: "/customer-stories" },
    { label: "Linkedin", href: "https://www.linkedin.com/company/houseofagents-ai/", external: true },
  ],
};

const BTN_STYLE: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 32px",
  fontSize: 16,
  fontWeight: 400,
  textTransform: "uppercase",
  letterSpacing: "normal",
  borderRadius: 2,
  background: "#F8F7F7",
  color: "#000000",
  textDecoration: "none",
  border: "none",
};

export default function Footer() {
  return (
    <footer style={{ background: "#D95938" }}>
      {/* padding-global: paddingLeft 24px */}
      <div style={{ paddingLeft: 24, paddingRight: 24 }}>
        {/* footer-wrapper: grid 700px 350px 350px, maxWidth 1400px, margin auto */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "700px 350px 350px",
            maxWidth: 1400,
            margin: "0 auto",
            paddingTop: 56,
            paddingBottom: 56,
          }}
        >
          {/* Brand column (700px) */}
          <div>
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
                textDecoration: "none",
              }}
            >
              {/* Snowflake icon — same as nav/hero */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "#F8F7F7", flexShrink: 0 }}
              >
                <path
                  d="M22 0V22L33 2.94744L22 22L41.0526 11L22 22H44H22L41.0526 33L22 22L33 41.0526L22 22V44V22L11 41.0526L22 22L2.94744 33L22 22H0H22L2.94744 11L22 22L11 2.94744L22 22V0Z"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
              <span
                style={{
                  fontFamily: "Bdogrotesk, Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#F8F7F7",
                }}
              >
                House of Agents
              </span>
            </Link>

            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#F8F7F7",
                lineHeight: 1.6,
                marginBottom: 32,
                maxWidth: 400,
              }}
            >
              10x your productivity with House of Agents. Save countless hours in manual tasks with our multi-agents today.
            </p>

            {/* CTAs — both white bg, black text */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link href="/try-ai-agent" style={BTN_STYLE}>
                Try Arya
              </Link>
              <Link
                href="https://calendly.com/hello-houseofagents-8n-x/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={BTN_STYLE}
              >
                Book Demo
              </Link>
            </div>
          </div>

          {/* Link columns (350px each) */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} style={{ paddingLeft: 40 }}>
              <h4
                style={{
                  fontSize: 25,
                  fontWeight: 400,
                  color: "#F8F7F7",
                  textTransform: "none",
                  letterSpacing: "normal",
                  marginBottom: 20,
                  marginTop: 0,
                }}
              >
                {section}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#F8F7F7",
                        textDecoration: "none",
                        textTransform: "uppercase",
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

        {/* Bottom bar */}
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            paddingTop: 24,
            paddingBottom: 32,
            borderTop: "1px solid rgba(248,247,247,0.25)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13.6, fontWeight: 400, color: "#F8F7F7", margin: 0 }}>
            ©2026 House of Agents. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link
              href="/privacy-policy"
              style={{ fontSize: 12, fontWeight: 400, color: "#F8F7F7", textDecoration: "none", textTransform: "uppercase" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              style={{ fontSize: 12, fontWeight: 400, color: "#F8F7F7", textDecoration: "none", textTransform: "uppercase" }}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
