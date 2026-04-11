"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const BASE = "https://cdn.prod.website-files.com/67c5741832d4da33d634d681";

const features = [
  { icon: `${BASE}/67cbe9723afbeca3bbd6fae2_stash_light-bulb-light.svg`, title: "Smarter Everyday" },
  { icon: `${BASE}/67cb08483606e87a053ba5c2_uit_clock.svg`, title: "Always On 24/7" },
  { icon: `${BASE}/67cb0848d6c9fb807574b36a_ph_hand-peace-thin.svg`, title: "Human Like Interactions" },
  { icon: `${BASE}/67cbea221f6fd7b2ac9e641d_prime_language.avif`, title: "Global Multilingual Capabilities" },
  { icon: `${BASE}/67cb084889553431ea9e903e_stash_integrations-light.svg`, title: "Seamless Product Integration" },
  { icon: `${BASE}/67cbe9c918859453bbe4148b_ep_setting.svg`, title: "Full Control & Customization" },
  { icon: `${BASE}/67cb08489f6017f2070c7354_mage_goals.svg`, title: "Outcome-Driven AI" },
  { icon: `${BASE}/67cbea4cf42c14bba12467b5_arcticons_security.svg`, title: "Enterprise-Level Security" },
];

const pillars = [
  {
    slash: "/Smart",
    desc: "Agents use deep reasoning and contextual memory to adapt, solve problems, and make strategic, context-aware decisions efficiently, with you in the loop.",
    img: `${BASE}/6877ad5851837cf6ae6cf90e_Smart.avif`,
  },
  {
    slash: "/Simple",
    desc: "The AI agents are simple, intuitive, and ready to use — just plug and play, no technical skills or setup required for instant results.",
    img: `${BASE}/6877ad5841c48f8ceae63be9_simple.avif`,
  },
  {
    slash: "/Compliant",
    desc: "You control access, augmented with our adherence to globally recognized standards guarantees exceptional data security and management practices.",
    img: `${BASE}/6877ad58de207c4ace8d06a4_compliant.avif`,
  },
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const pillarsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── 8-feature grid ── */}
      <section style={{ background: "#000000", padding: "100px 0" }} ref={ref}>
        <div className="container-site">
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 0 }}>
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "#F8F7F7",
                margin: 0,
              }}
            >
              Purpose-Built AI That Drives Human Efficiency
            </motion.h3>
          </div>

          {/* Try Arya button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center", margin: "32px 0 80px" }}
          >
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
                letterSpacing: "0.04em",
                borderRadius: 2,
                background: "#D95938",
                color: "#F8F7F7",
                textDecoration: "none",
              }}
            >
              Try Arya
            </Link>
          </motion.div>

          {/* 4×2 feature card table */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              width: "100%",
            }}
          >
            {features.map((f, i) => {
              const isLastInRow = (i + 1) % 4 === 0;
              const isTopRow = i < 4;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    padding: 32,
                    borderRight: isLastInRow ? "none" : "2px solid rgba(247,238,218,0.5)",
                    borderBottom: isTopRow ? "2px solid rgba(247,238,218,0.5)" : "none",
                  }}
                >
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={44}
                    height={44}
                    className="w-11 h-11 object-contain"
                    unoptimized
                  />
                  <h4
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#F8F7F7",
                      margin: 0,
                    }}
                  >
                    {f.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Three pillars ── */}
      <section style={{ background: "#D95938", padding: "100px 0" }} ref={pillarsRef}>
        <div className="container-site">
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "#F8F7F7",
                margin: 0,
              }}
            >
              10x Productivity. Connected Agents. Infinite Possibilities.
            </motion.h3>
          </div>

          {/* 3-column pillar cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.slash}
                initial={{ opacity: 0, y: 28 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.12 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid rgba(247,238,218,0.5)",
                  padding: 14,
                  borderRadius: 0,
                }}
              >
                {/* Slash heading */}
                <h3
                  style={{
                    fontSize: "clamp(40px, 4vw, 64px)",
                    fontWeight: 300,
                    color: "#F8F7F7",
                    margin: "0 0 12px 0",
                    lineHeight: 1.1,
                  }}
                >
                  {p.slash}
                </h3>
                {/* Description */}
                <p
                  style={{
                    fontSize: 13.6,
                    fontWeight: 400,
                    color: "#F8F7F7",
                    lineHeight: 1.6,
                    margin: "0 0 16px 0",
                  }}
                >
                  {p.desc}
                </p>
                {/* Image — at bottom */}
                <div
                  style={{
                    height: 400,
                    background: "rgb(245,226,196)",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={p.img}
                    alt={p.slash}
                    width={450}
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    unoptimized
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
