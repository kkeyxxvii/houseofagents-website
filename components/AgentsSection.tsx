"use client";

import Image from "next/image";
import Link from "next/link";

const CDN = "https://cdn.prod.website-files.com/67c5741832d4da33d634d681";

const agents = [
  {
    id: "arya",
    title: "Arya - Your human like voice caller",
    headingColor: "rgb(0, 0, 0)",
    paddingTop: 100,
    paddingBottom: 100,
    reversed: false,
    video: `${CDN}/6878f95a211e3064ed17c20f_cora%20compressed%201-transcode.mp4`,
    capabilities: [
      {
        icon: `${CDN}/686d1a882b3635b5cbc1669c_languages.svg`,
        text: "Arya calls, engages, converts — even while you sleep.",
      },
      {
        icon: `${CDN}/686d1b4a8b769da5464cd866_scan-eye.svg`,
        text: "Seamless voice outreach that scales — no human needed",
      },
      {
        icon: `${CDN}/686d1b2c71718033b3208fe4_globe.svg`,
        text: "Arya bridges conversation and conversion at every touch.",
      },
    ],
  },
  {
    id: "cora",
    title: "Cora \u2013 Your AI Workforce Assistant",
    headingColor: "rgb(90, 48, 25)",
    paddingTop: 0,
    paddingBottom: 100,
    reversed: true,
    video: `${CDN}/6878f4f4864e3c403ddb0354_Untitled%20video%20-%20Made%20with%20Clipchamp%20%288%29-transcode.mp4`,
    capabilities: [
      {
        icon: `${CDN}/686d1dfdc98d038a85a28ee4_mail-check.svg`,
        text: "Deep insights in seconds \u2014 research made effortless.",
      },
      {
        icon: `${CDN}/686d1dfd610318af92dd04b9_history.svg`,
        text: "From data to decisions \u2014 Cora powers your insights and strategy.",
      },
      {
        icon: `${CDN}/686d1dfdee46a9b8cdca2d05_user-cog.svg`,
        text: "Cora connects the dots between data and research, so your team can move fast.",
      },
    ],
  },
];

export default function AgentsSection() {
  return (
    <>
      {agents.map((agent) => (
        <div
          key={agent.id}
          style={{
            paddingTop: agent.paddingTop,
            paddingBottom: agent.paddingBottom,
          }}
        >
          {/* padding-global: 24px left only, then container_large 1400px */}
          <div style={{ paddingLeft: 24 }}>
            {/* grid: 660px 660px, col-gap 80px */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "660px 660px",
                columnGap: 80,
                rowGap: 48,
                height: 800,
                width: 1400,
              }}
            >
              {/* Video column — left for Arya, right for Cora (via order) */}
              <div
                style={{
                  position: "relative",
                  width: 660,
                  height: 800,
                  overflow: "hidden",
                  order: agent.reversed ? 2 : 1,
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source src={agent.video} type="video/mp4" />
                </video>
              </div>

              {/* Content panel — right for Arya, left for Cora (via order) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 32,
                  width: 660,
                  justifyContent: "center",
                  order: agent.reversed ? 1 : 2,
                }}
              >
                {/* H1 heading */}
                <h1
                  style={{
                    fontFamily: "Bdogrotesk, Arial, sans-serif",
                    fontSize: 35.2,
                    fontWeight: 400,
                    lineHeight: "42.24px",
                    textTransform: "uppercase",
                    color: agent.headingColor,
                    margin: 0,
                  }}
                >
                  {agent.title}
                </h1>

                {/* Capabilities list */}
                <div style={{ display: "block" }}>
                  {agent.capabilities.map((cap) => (
                    <div
                      key={cap.text}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 16,
                        height: 76,
                      }}
                    >
                      <Image
                        src={cap.icon}
                        alt=""
                        width={44}
                        height={44}
                        style={{ width: 44, height: 44, flexShrink: 0 }}
                        unoptimized
                      />
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 400,
                          color: "rgb(0, 0, 0)",
                          fontFamily: "Plusjakartasans, Arial, sans-serif",
                        }}
                      >
                        {cap.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", gap: 20 }}>
                  <Link
                    href="/try-ai-agent"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px 32px",
                      fontSize: 16,
                      fontWeight: 400,
                      textTransform: "uppercase",
                      borderRadius: 2,
                      background: "#D95938",
                      color: "#F8F7F7",
                      textDecoration: "none",
                      fontFamily: "Plusjakartasans, Arial, sans-serif",
                    }}
                  >
                    Try Arya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
