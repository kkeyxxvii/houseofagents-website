"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const AGENTS_BG = "https://cdn.prod.website-files.com/67c5741832d4da33d634d681/67cbd5e18d07464c05db65ee_120694858f668e6f499e74413694255a_Agents.avif";

export default function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" ref={ref}>
      <div className="container-site">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left — Agents image (matches reference DOM order: image first) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:w-1/2 shrink-0"
          >
            <Image
              src={AGENTS_BG}
              alt="AI Agents"
              width={640}
              height={480}
              className="w-full object-cover"
              style={{ borderRadius: 0 }}
              unoptimized
            />
          </motion.div>

          {/* Right — text + CTA */}
          <div className="flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: "clamp(36px, 4.5vw, 64px)",
                fontWeight: 300,
                color: "#000000",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Experience Sales on{" "}
              <span style={{ color: "#D95938" }}>Auto-Pilot</span>{" "}
              in Less Than 30 Seconds
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted mb-10 max-w-lg"
            >
              Our chat &amp; voice agentic capabilities help you unlock productivity at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
                  textTransform: "uppercase",
                  borderRadius: 2,
                  background: "#D95938",
                  color: "#F8F7F7",
                  textDecoration: "none",
                }}
              >
                Book Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
