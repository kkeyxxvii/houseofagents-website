"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const CDN1 = "https://cdn.prod.website-files.com/67c5741832d4da33d634d750";
const CDN2 = "https://cdn.prod.website-files.com/67c5741832d4da33d634d681";

const testimonials = [
  {
    name: "Rohit Sharma",
    title: "Head of Sales, Large Mutual Fund & Asset Company",
    result: "Boosted conversions",
    quote:
      "Before Arya, my VRMs were drowning—each handling 600+ distributors and still missing touchpoints. After Arya stepped in, automated welcome calls and NFO campaigns scaled us to 50,000 distributors with ease. My team now focuses only on high-value closings instead of routine calls. Conversions and SIP activations have never looked better.",
    avatar: `${CDN1}/67cac40bb3ac9e7422d1a156_testimonial%20pfp.avif`,
    color: "#D95938",
  },
  {
    name: "Megha Iyer",
    title: "VP Revenue Operations, FinTech Wealth Platform",
    result: "10K+ AI calls daily",
    quote:
      "We were spending heavily on leads but only reaching 60% of them. Arya changed everything—leads now get engaged within seconds, and multi-channel follow-ups keep them warm. Our wasted acquisition spend dropped significantly, and we scaled to 10,000+ AI calls per day. The efficiency uplift in RevOps is phenomenal.",
    avatar: `${CDN1}/67cac1b611f118840114f93b_testimonial%20pfp.avif`,
    color: "#bf4a28",
  },
  {
    name: "Arjun Nair",
    title: "Head of Marketing Ops, MSME Lending Platform",
    result: "8-sec lead response",
    quote:
      "Earlier, our leads waited 2–6 hours before a call, and many simply dropped off. With Arya, response time shrank to under 8 seconds. Qualification rates improved by 72% and drop-offs fell by 90%. For marketing ops, that's a dream—every rupee spent on acquisition now gets real-time ROI.",
    avatar: `${CDN1}/67cac37b415a80ed94b082ba_testimonial%20pfp.avif`,
    color: "#059669",
  },
  {
    name: "Kavita Menon",
    title: "Director Sales Ops, Real Estate Developer",
    result: "30–40% site lift",
    quote:
      "Our 12-member team couldn't handle 62,000+ outbound dials every month. Arya's multilingual AI scaled cold calls to 10,000+ daily and ensured inbound leads were touched within 15 minutes. Site visits shot up by 30–40% in just 30 days. We finally outpaced competitors in speed-to-lead.",
    avatar: `${CDN2}/67c6cb469a531b0a3320f4ad_testimonial%20pfp.png`,
    color: "#d97706",
  },
  {
    name: "Sandeep Verma",
    title: "Head of Sales Enablement, EdTech Consulting Firm",
    result: "Global scale, no hires",
    quote:
      "SDRs were stretched thin with ~100 calls daily and poor connect rates. Arya instantly engaged inbound students and parent inquiries, qualified them, and passed only serious prospects to advisors. Connect rates surged, retries fell, and scheduling became seamless. Arya helped us scale globally without scaling headcount.",
    avatar: `${CDN1}/67cac40bb3ac9e7422d1a156_testimonial%20pfp.avif`,
    color: "#e11d48",
  },
  {
    name: "Neha Gupta",
    title: "VP RevOps, Hypergrowth WealthTech Platform",
    result: "Onboarding in days",
    quote:
      "Scaling distributor onboarding was always a bottleneck. Arya helped us automate contextual updates, re-engage dormant bases, and execute NFO campaigns in record time. What took weeks now happens in days. The impact is visible—faster conversions, lower CAC, and a RevOps engine that finally feels future-ready.",
    avatar: `${CDN1}/67cac1b611f118840114f93b_testimonial%20pfp.avif`,
    color: "#0891b2",
  },
];


export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "clamp(36px, 4.5vw, 64px)",
              fontWeight: 300,
              color: "#000000",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Let Our Amazing Clients Do The Talking
          </motion.h3>
        </div>

        {/* Desktop — grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.08 }}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: 0,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Result as heading — matches reference h4 */}
              <h4
                style={{
                  fontFamily: "Bdogrotesk, Arial, sans-serif",
                  fontSize: 22,
                  fontWeight: 400,
                  color: "#000000",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {t.result}
              </h4>
              <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.7, margin: 0, flex: 1 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ paddingTop: 16, borderTop: "1px solid #e5e5e5" }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#111111", margin: 0 }}>{t.name}</p>
                <p style={{ fontSize: 12, color: "#555555", margin: 0 }}>{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e5e5e5",
                  borderRadius: 0,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <h4
                  style={{
                    fontFamily: "Bdogrotesk, Arial, sans-serif",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "#000000",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {testimonials[active].result}
                </h4>
                <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.7, margin: 0 }}>
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
                <div style={{ paddingTop: 16, borderTop: "1px solid #e5e5e5" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#111111", margin: 0 }}>{testimonials[active].name}</p>
                  <p style={{ fontSize: 12, color: "#555555", margin: 0 }}>{testimonials[active].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-[#D95938] hover:text-[#D95938] transition-colors"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === active ? "bg-[#D95938] w-5" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-[#D95938] hover:text-[#D95938] transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
