"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";

const CDN = "https://cdn.prod.website-files.com/67c5741832d4da33d634d681";
const CDN2 = "https://cdn.prod.website-files.com/67c5741832d4da33d634d750";
const ARYA_VIDEO = `${CDN}/6878f95a211e3064ed17c20f_cora%20compressed%201-transcode.mp4`;

/* ─── Data ──────────────────────────────────────────────── */

const features = [
  {
    icon: `${CDN}/686d1b4a8b769da5464cd866_scan-eye.svg`,
    title: "24*7 Calling",
    desc: "Handles inbound and outbound calls, qualifies leads, and books appointments — even while your team sleeps.",
  },
  {
    icon: `${CDN}/686d1b2c71718033b3208fe4_globe.svg`,
    title: "Scaling effortlessly",
    desc: "Effortlessly handle thousands of calls per day with scalable concurrent calling — no need to hire more agents or expand infrastructure.",
  },
  {
    icon: `${CDN}/686d1dfdc98d038a85a28ee4_mail-check.svg`,
    title: "Plug Into Your Workflow",
    desc: "Seamless integration with existing CRMs, ERPs, and Internal tools. Arya adapts to your stack, not the other way around.",
  },
  {
    icon: `${CDN}/686d1dfdee46a9b8cdca2d05_user-cog.svg`,
    title: "Instant Qualification & Routing",
    desc: "Capture, screen, and qualify leads in real time. Arya intelligently routes them to the right person or team without delays.",
  },
  {
    icon: `${CDN}/686d1a882b3635b5cbc1669c_languages.svg`,
    title: "Multilingual Fluency",
    desc: "Speak to your audience in their language — from global English to local dialects. Arya communicates naturally across linguistic boundaries.",
  },
  {
    icon: `${CDN}/686d1dfd610318af92dd04b9_history.svg`,
    title: "Follow-up on Autopilot",
    desc: "Stop chasing cold leads. Arya handles follow-ups, re-engagement, and lead nurturing automatically — so nothing slips through the cracks.",
  },
];

const stats = [
  {
    sublabel: "Speed to lead",
    value: "< 8 sec",
    label: "AI Calls Made",
    desc: "Arya dials within 8 seconds of a form submission — before any human rep even sees the notification.",
  },
  {
    sublabel: "Inbound conversion",
    value: "+61%",
    label: "Leads Qualified",
    desc: "Decreasing lead response time results in a dramatically better buying experience and higher close rates.",
  },
  {
    sublabel: "Pipeline generated",
    value: "$5M+",
    label: "Pipeline Booked",
    desc: "Clients who deploy Arya see pipeline acceleration within the first 30 days — with zero extra headcount.",
  },
];

const videoCaseTabs = [
  {
    id: "inbound",
    label: "Inbound",
    videos: [
      {
        title: "Wealth Management Use Case",
        duration: "2:25",
        thumbnail: `${CDN2}/68e370db885561bc786e1d4f_wealth%20management%20usecase.avif`,
      },
      {
        title: "Inbound prospecting for a large Real Estate company",
        duration: "1:37",
        thumbnail: `${CDN2}/68e370ceb43b7ba5414acad6_Real%20Estate.avif`,
      },
      {
        title: "Ed tech prospecting for a large company",
        duration: "3:40",
        thumbnail: `${CDN2}/68e37095a276b3c16c819a5a_EdTech.avif`,
      },
    ],
  },
  {
    id: "outbound",
    label: "Outbound",
    videos: [
      {
        title: "DSA Onboarding",
        duration: "1:34",
        thumbnail: `${CDN2}/68e370bc34626e384285da5c_DSA%20pre%20qualification.avif`,
      },
      {
        title: "SIP Upgrade for a Large MG company",
        duration: "3:31",
        thumbnail: `${CDN2}/68e370ac23fb79cadf384014_SIP%20upgrade.avif`,
      },
      {
        title: "Upsell Services to Existing Customers (Deep Tech)",
        duration: "1:45",
        thumbnail: `${CDN2}/68e37085f83cb0624df62209_Upsell%20Services.avif`,
      },
    ],
  },
];

const testimonials = [
  {
    name: "Rohit Sharma",
    title: "Head of Sales, Large Mutual Fund & Asset Company",
    result: "Boosted conversions",
    quote:
      "Before Arya, my VRMs were drowning\u2014each handling 600+ distributors and still missing touchpoints. After Arya stepped in, automated welcome calls and NFO campaigns scaled us to 50,000 distributors with ease. My team now focuses only on high-value closings instead of routine calls. Conversions and SIP activations have never looked better.",
  },
  {
    name: "Megha Iyer",
    title: "VP Revenue Operations, FinTech Wealth Platform",
    result: "10K+ AI calls daily",
    quote:
      "We were spending heavily on leads but only reaching 60% of them. Arya changed everything\u2014leads now get engaged within seconds, and multi-channel follow-ups keep them warm. Our wasted acquisition spend dropped significantly, and we scaled to 10,000+ AI calls per day. The efficiency uplift in RevOps is phenomenal.",
  },
  {
    name: "Arjun Nair",
    title: "Head of Marketing Ops, MSME Lending Platform",
    result: "8-sec lead response",
    quote:
      "Earlier, our leads waited 2\u20136 hours before a call, and many simply dropped off. With Arya, response time shrank to under 8 seconds. Qualification rates improved by 72% and drop-offs fell by 90%. For marketing ops, that\u2019s a dream\u2014every rupee spent on acquisition now gets real-time ROI.",
  },
  {
    name: "Kavita Menon",
    title: "Director Sales Ops, Real Estate Developer",
    result: "30\u201340% site lift",
    quote:
      "Our 12-member team couldn\u2019t handle 62,000+ outbound dials every month. Arya\u2019s multilingual AI scaled cold calls to 10,000+ daily and ensured inbound leads were touched within 15 minutes. Site visits shot up by 30\u201340% in just 30 days. We finally outpaced competitors in speed-to-lead.",
  },
  {
    name: "Sandeep Verma",
    title: "Head of Sales Enablement, EdTech Consulting Firm",
    result: "Global scale, no hires",
    quote:
      "SDRs were stretched thin with ~100 calls daily and poor connect rates. Arya instantly engaged inbound students and parent inquiries, qualified them, and passed only serious prospects to advisors. Connect rates surged, retries fell, and scheduling became seamless. Arya helped us scale globally without scaling headcount.",
  },
  {
    name: "Neha Gupta",
    title: "VP RevOps, Hypergrowth WealthTech Platform",
    result: "Onboarding in days",
    quote:
      "Scaling distributor onboarding was always a bottleneck. Arya helped us automate contextual updates, re-engage dormant bases, and execute NFO campaigns in record time. What took weeks now happens in days. The impact is visible\u2014faster conversions, lower CAC, and a RevOps engine that finally feels future-ready.",
  },
];

const countryCodes = [
  { code: "+91", flag: "\uD83C\uDDEE\uD83C\uDDF3", name: "India" },
  { code: "+1", flag: "\uD83C\uDDFA\uD83C\uDDF8", name: "USA" },
  { code: "+44", flag: "\uD83C\uDDEC\uD83C\uDDE7", name: "UK" },
  { code: "+61", flag: "\uD83C\uDDE6\uD83C\uDDFA", name: "Australia" },
  { code: "+65", flag: "\uD83C\uDDF8\uD83C\uDDEC", name: "Singapore" },
  { code: "+971", flag: "\uD83C\uDDE6\uD83C\uDDEA", name: "UAE" },
  { code: "+60", flag: "\uD83C\uDDF2\uD83C\uDDFE", name: "Malaysia" },
  { code: "+49", flag: "\uD83C\uDDE9\uD83C\uDDEA", name: "Germany" },
  { code: "+33", flag: "\uD83C\uDDEB\uD83C\uDDF7", name: "France" },
  { code: "+81", flag: "\uD83C\uDDEF\uD83C\uDDF5", name: "Japan" },
];

/* ─── Demo call thumbnails ──────────────────────────────── */
const demoCalls = [
  {
    label: "Wealth Management",
    desc: "Arya handles inbound distributor queries and books SIP calls",
    thumbnail: `${CDN2}/68e370db885561bc786e1d4f_wealth%20management%20usecase.avif`,
    duration: "2:25",
  },
  {
    label: "Real Estate",
    desc: "After-hours lead responds within 15 min, site visit booked automatically",
    thumbnail: `${CDN2}/68e370ceb43b7ba5414acad6_Real%20Estate.avif`,
    duration: "1:37",
  },
  {
    label: "EdTech",
    desc: "Student inquiry qualified in seconds, advisor slot filled same day",
    thumbnail: `${CDN2}/68e37095a276b3c16c819a5a_EdTech.avif`,
    duration: "3:40",
  },
];

/* ─── Omni-channel data ─────────────────────────────────── */
const channels = [
  {
    icon: `${CDN}/686d1a882b3635b5cbc1669c_languages.svg`,
    title: "Voice Calls",
    desc: "Human-like voice with real-time objection handling, sentiment detection, and adaptive persuasion. Warm, natural conversation with sub 2-second response latency.",
  },
  {
    icon: `${CDN}/686d1b2c71718033b3208fe4_globe.svg`,
    title: "WhatsApp",
    desc: "Short, personal, human-like messaging with smart follow-up sequences and rich media support. Multi-step sequences with 3-second reply reaction time.",
  },
  {
    icon: `${CDN}/686d1dfdc98d038a85a28ee4_mail-check.svg`,
    title: "Email",
    desc: "Hyper-personalized outreach with inbox rotation, dynamic responses, and deliverability optimization. A/B tested subject lines with CRM state sync in real-time.",
  },
];

/* ─── Problem cards ─────────────────────────────────────── */
const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D95938" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-3.41-2.6m-4.97-8.62a19.42 19.42 0 01-1.97-4.12 2 2 0 011-2.32" />
        <line x1="23" y1="1" x2="1" y2="23" />
      </svg>
    ),
    title: "Voice agents crumble",
    desc: "Most voice bots can\u2019t handle noisy calls, accents, or real-time objections. Leads hang up frustrated and never come back.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D95938" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="14" height="14" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="5" />
        <line x1="15" y1="1" x2="15" y2="5" />
        <line x1="9" y1="19" x2="9" y2="23" />
        <line x1="15" y1="19" x2="15" y2="23" />
        <line x1="1" y1="9" x2="5" y2="9" />
        <line x1="1" y1="15" x2="5" y2="15" />
        <line x1="19" y1="9" x2="23" y2="9" />
        <line x1="19" y1="15" x2="23" y2="15" />
      </svg>
    ),
    title: "WhatsApp bots feel robotic",
    desc: "Rigid decision trees. No memory. No personality. Prospects stop responding after the first templated message.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D95938" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        <line x1="8" y1="8" x2="16" y2="16" />
      </svg>
    ),
    title: "Zero context across channels",
    desc: "Most \u201CAI agents\u201D forget everything between sessions. No continuity, no relationship. Leads slip through the cracks.",
  },
];

/* ─── Demo Form ─────────────────────────────────────────── */
function DemoForm() {
  const [form, setForm] = useState({ name: "", countryCode: "+91", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ background: "#ffffff", borderRadius: 0, padding: "48px 40px", textAlign: "center" }}
      >
        <div style={{
          width: 64, height: 64, borderRadius: "50%", background: "#D95938",
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 24, fontWeight: 400, color: "#000", marginBottom: 12 }}>
          Thank you! Our AI will be calling you shortly.
        </h3>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.6, margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
          Arya will reach out within minutes. Keep your phone handy.
        </p>
      </motion.div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", fontSize: 15,
    border: "1px solid #e0e0e0", borderRadius: 0, outline: "none",
    background: "#fafafa", boxSizing: "border-box",
    fontFamily: "Plusjakartasans, Arial, sans-serif", color: "#111",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 12, fontWeight: 600, color: "#333",
    textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6,
    fontFamily: "Plusjakartasans, Arial, sans-serif",
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "#ffffff", borderRadius: 0, padding: "40px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input type="text" required placeholder="Your full name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <div style={{ display: "flex", gap: 8 }}>
            <select value={form.countryCode} onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
              style={{ padding: "12px 10px", fontSize: 14, border: "1px solid #e0e0e0", borderRadius: 0, outline: "none", background: "#fafafa", color: "#111", fontFamily: "Plusjakartasans, Arial, sans-serif", cursor: "pointer", minWidth: 90 }}>
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
              ))}
            </select>
            <input type="tel" required placeholder="98765 43210" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              style={{ ...inputStyle, flex: 1 }} />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" required placeholder="you@company.com" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
        </div>
        <button type="submit" disabled={status === "loading"} style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          padding: "16px 32px", fontSize: 16, fontWeight: 400, textTransform: "uppercase",
          borderRadius: 0, border: "none", cursor: status === "loading" ? "wait" : "pointer",
          background: status === "loading" ? "#bf4a28" : "#D95938", color: "#F8F7F7",
          width: "100%", fontFamily: "Plusjakartasans, Arial, sans-serif", transition: "background 0.2s", marginTop: 4,
        }}>
          {status === "loading" ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                style={{ animation: "spin 1s linear infinite" }}>
                <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
              </svg>
              Connecting...
            </>
          ) : "Get a Call"}
        </button>
      </div>
      <p style={{ fontSize: 11, color: "#999", marginTop: 14, lineHeight: 1.5, textAlign: "center", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
        By submitting your details, you agree to receive occasional surveys and special offers via phone.
      </p>
    </form>
  );
}

/* ─── Stats Bar ─────────────────────────────────────────── */
function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="ta-section-padding" style={{ background: "#0a0a0a", padding: "80px 24px" }}>
      <div className="container-site">
        {/* Heading */}
        <div style={{ marginBottom: 56 }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#ffffff", margin: 0, lineHeight: 1.1 }}>
            Arya&apos;s Average Impact
          </motion.h2>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 56 }} />

        {/* Stats grid */}
        <div className="ta-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {stats.map((s, i) => (
            <motion.div key={s.sublabel}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              style={{ padding: "0 40px 0 0", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none", paddingLeft: i > 0 ? 40 : 0 }}>
              <p style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                {s.sublabel}
              </p>
              <p style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 300, color: "#ffffff", margin: "0 0 16px", lineHeight: 1 }}>
                {s.value}
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif", maxWidth: 280 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Demo Calls Section ────────────────────────────────── */
function DemoCallsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="ta-section-padding" style={{ background: "#ffffff", padding: "100px 24px" }}>
      <div className="container-site">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 300, color: "#000000", margin: "0 0 16px", lineHeight: 1.1 }}>
            Watch Arya in action.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontSize: 16, color: "#555555", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
            Real conversations. Real results. No scripts — just Arya qualifying leads, handling objections, and booking meetings.
          </motion.p>
        </div>

        {/* Featured video embed */}
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ position: "relative", width: "100%", maxWidth: 900, margin: "0 auto 56px", aspectRatio: "16/9", overflow: "hidden", border: "1px solid #e5e5e5" }}>
          <iframe
            src="https://www.veed.io/embed/6ce076d0-0d1b-45d6-bb84-b9d45f2de4c6"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </motion.div>

        {/* 3 call thumbnail cards */}
        <div className="ta-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {demoCalls.map((call, i) => (
            <motion.div key={call.label}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #e5e5e5" }}>
              {/* Thumbnail */}
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "#111" }}>
                <Image src={call.thumbnail} alt={call.label} fill
                  style={{ objectFit: "cover" }} unoptimized />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
                {/* Play button */}
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 44, height: 44, borderRadius: "50%", background: "rgba(217,89,56,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"><polygon points="5,3 19,12 5,21" /></svg>
                </div>
                <div style={{ position: "absolute", bottom: 8, right: 8, background: "rgba(0,0,0,0.65)", color: "#fff", fontSize: 11, fontFamily: "Plusjakartasans, Arial, sans-serif", padding: "3px 8px" }}>
                  {call.duration} min
                </div>
              </div>
              {/* Label */}
              <div style={{ padding: "16px 20px" }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#D95938", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.07em", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>{call.label}</p>
                <p style={{ fontSize: 13, color: "#555", margin: 0, lineHeight: 1.55, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>{call.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── The Problem Section ───────────────────────────────── */
function TheProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="ta-section-padding" style={{ background: "#f8f7f7", padding: "100px 24px" }}>
      <div className="container-site">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="ta-h2"
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 300, color: "#000000", margin: "0 0 20px", lineHeight: 1.05 }}>
            Silence is where your<br />revenue goes to die.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 16, color: "#555555", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
            The world doesn&apos;t need more bots. It needs a digital worker that owns the funnel, learns over time, and helps you close deals.
          </motion.p>
        </div>

        {/* Problem cards */}
        <div className="ta-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {problems.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              style={{ background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: 0, padding: "36px 32px" }}>
              <div style={{ width: 48, height: 48, background: "rgba(217,89,56,0.08)", border: "1px solid rgba(217,89,56,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                {p.icon}
              </div>
              <h4 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 20, fontWeight: 400, color: "#000000", margin: "0 0 12px" }}>
                {p.title}
              </h4>
              <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.7, margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Omni-Channel Section ──────────────────────────────── */
function OmniChannelSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="ta-section-padding" style={{ background: "#ffffff", padding: "100px 24px" }}>
      <div className="container-site">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 300, color: "#000000", margin: "0 0 4px", lineHeight: 1.1 }}>
            One worker. Three channels.
          </motion.h2>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 300, color: "#D95938", margin: "0 0 20px", lineHeight: 1.1 }}>
            Shared memory &amp; shared goal.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ fontSize: 16, color: "#555555", maxWidth: 580, margin: "0 auto", lineHeight: 1.7, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
            Arya moves seamlessly between calls, WhatsApp, and email — carrying full context across every interaction.
          </motion.p>
        </div>

        {/* Channel grid — same format as "Arya is capable of" */}
        <div className="ta-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {channels.map((ch, i) => (
            <motion.div key={ch.title}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
              style={{
                padding: 40,
                borderRight: i < channels.length - 1 ? "1px solid #e5e5e5" : "none",
              }}>
              <Image src={ch.icon} alt="" width={44} height={44}
                style={{ width: 44, height: 44, marginBottom: 20 }} unoptimized />
              <h4 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 20, fontWeight: 400, color: "#000000", margin: "0 0 12px" }}>
                {ch.title}
              </h4>
              <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.7, margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                {ch.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How Arya Works Section ───────────────────────────── */
const howAryaSteps = [
  {
    num: "01",
    title: "Missed call \u2192 WhatsApp follow-up",
    desc: "Detects the missed call and instantly sends a warm, contextual WhatsApp message \u2014 no delay, no leads lost.",
  },
  {
    num: "02",
    title: "Dropped mid-pitch \u2192 Re-engages",
    desc: "Picks up exactly where the conversation left off \u2014 with full memory of objections and buying signals.",
  },
  {
    num: "03",
    title: "\u201CWhatsApp me\u201D \u2192 Switches instantly",
    desc: "Channel preference detected in real-time. Moves the conversation seamlessly without skipping a beat.",
  },
  {
    num: "04",
    title: "\u201CCall me in 5 minutes\u201D \u2192 She does",
    desc: "Respects timing with precision. Schedules the callback and arrives exactly on time, every time.",
  },
  {
    num: "05",
    title: "Memory that lasts for months",
    desc: "Deterministic memory \u2014 never forgets a past interaction, objection, or buying signal, even months later.",
  },
  {
    num: "06",
    title: "CRM updated behind the scenes",
    desc: "Logs every interaction, creates tasks, closes loops \u2014 invisible to the prospect, invaluable to you.",
  },
];

function HowAryaWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} style={{ background: "#0a0a0a", overflow: "hidden" }}>
      <div className="ta-how-arya-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 760 }}>

        {/* ── Left — content ── */}
        <motion.div
          initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.75 }}
          className="ta-how-arya-content"
          style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "88px 64px 88px max(24px, calc((100vw - 1400px) / 2 + 24px))" }}>

          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}
            style={{ fontSize: 11, fontWeight: 600, color: "#D95938", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 20px", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
            How she works
          </motion.p>

          {/* Heading */}
          <h2 className="ta-h2"
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(32px, 3.2vw, 52px)", fontWeight: 300, color: "#ffffff", margin: "0 0 2px", lineHeight: 1.08 }}>
            She doesn&apos;t just automate.
          </h2>
          <h2 className="ta-h2"
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(32px, 3.2vw, 52px)", fontWeight: 300, color: "#ffffff", margin: "0 0 20px", lineHeight: 1.08 }}>
            She <span style={{ color: "#D95938" }}>owns the funnel.</span>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: "0 0 52px", maxWidth: 440, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
            Every interaction makes her smarter. She remembers context, crosses channels, and works until the deal is closed.
          </p>

          {/* Step list — left-border timeline style */}
          <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid rgba(217,89,56,0.3)" }}>
            {howAryaSteps.map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                style={{ display: "flex", gap: 20, padding: "20px 0 20px 24px", borderBottom: i < howAryaSteps.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", alignItems: "flex-start", position: "relative" }}>
                {/* Orange dot on timeline */}
                <span style={{ position: "absolute", left: -5, top: 26, width: 9, height: 9, borderRadius: "50%", background: "#D95938", flexShrink: 0 }} />
                <span style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 12, fontWeight: 600, color: "#D95938", letterSpacing: "0.06em", flexShrink: 0, minWidth: 24, paddingTop: 2 }}>
                  {step.num}
                </span>
                <div>
                  <h4 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 16, fontWeight: 400, color: "#ffffff", margin: "0 0 5px", lineHeight: 1.35 }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.38)", lineHeight: 1.7, margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Right — Arya video (edge-to-edge on right side) ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.15 }}
          style={{ position: "relative", overflow: "hidden" }}
          className="ta-how-arya-video">

          <video autoPlay muted loop playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}>
            <source src={ARYA_VIDEO} type="video/mp4" />
          </video>

          {/* Multi-directional gradient */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.05) 35%), linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)" }} />

          {/* LIVE badge — top right */}
          <div style={{ position: "absolute", top: 20, right: 20, display: "flex", alignItems: "center", gap: 7, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)", padding: "6px 14px" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.25)", flexShrink: 0 }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: "#ffffff", letterSpacing: "0.12em", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>LIVE</span>
          </div>

          {/* Bottom caption */}
          <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
            <p style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 22, fontWeight: 300, color: "#ffffff", margin: 0, lineHeight: 1.25 }}>
              Arya, owning<br />the funnel.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ─── Talk To Arya Section ──────────────────────────────── */
const talkChannels = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.06 2.18a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" />
      </svg>
    ),
    num: "01",
    title: "Arya Calls You",
    desc: "Share your number and Arya will call you within 60 seconds.",
    ctaHref: "#hero-form",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    num: "02",
    title: "WhatsApp Arya",
    desc: "Message her on WhatsApp. See real conversations in action.",
    ctaHref: "https://wa.me/919873322457",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    num: "03",
    title: "Call Arya Now",
    desc: "Dial her directly. No waiting. No queue. Just Arya, ready to talk.",
    ctaHref: "tel:+919873322457",
  },
];

const useCaseOptions = [
  "Inbound Lead Qualification",
  "Outbound Sales Calling",
  "Wealth Management",
  "Real Estate Follow-up",
  "EdTech Counselling",
  "DSA Onboarding",
  "SIP Upgrade Campaigns",
  "Customer Re-engagement",
  "Other",
];

function TalkToAryaContactForm() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", useCase: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        style={{ textAlign: "center", padding: "48px 32px" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#D95938", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 24, fontWeight: 400, color: "#000", marginBottom: 10 }}>
          Arya will call you shortly!
        </h3>
        <p style={{ fontSize: 14, color: "#555", margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
          No spam. No human SDRs. Just Arya calling you back.
        </p>
      </motion.div>
    );
  }

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 16px", fontSize: 14,
    border: "1px solid #e0e0e0", borderRadius: 0, outline: "none",
    background: "#fafafa", boxSizing: "border-box",
    fontFamily: "Plusjakartasans, Arial, sans-serif", color: "#111",
  };
  const lbl: React.CSSProperties = {
    display: "block", fontSize: 11, fontWeight: 600, color: "#444",
    textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6,
    fontFamily: "Plusjakartasans, Arial, sans-serif",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Name + Company row */}
      <div className="ta-form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={lbl}>Full Name</label>
          <input type="text" required placeholder="Your name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} style={inp} />
        </div>
        <div>
          <label style={lbl}>Company</label>
          <input type="text" placeholder="Company name" value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })} style={inp} />
        </div>
      </div>
      {/* Phone */}
      <div>
        <label style={lbl}>Phone Number</label>
        <input type="tel" required placeholder="+91 XXXXX XXXXX" value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inp} />
      </div>
      {/* Email */}
      <div>
        <label style={lbl}>Work Email</label>
        <input type="email" required placeholder="you@company.com" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} style={inp} />
      </div>
      {/* Use case */}
      <div>
        <label style={lbl}>What are you looking for?</label>
        <select value={form.useCase} onChange={(e) => setForm({ ...form, useCase: e.target.value })}
          style={{ ...inp, cursor: "pointer" }}>
          <option value="">Select your use case</option>
          {useCaseOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      {/* Submit */}
      <button type="submit" disabled={status === "loading"} style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        padding: "16px 32px", fontSize: 15, fontWeight: 400, borderRadius: 0, border: "none",
        background: status === "loading" ? "#bf4a28" : "#D95938", color: "#F8F7F7",
        cursor: status === "loading" ? "wait" : "pointer",
        fontFamily: "Plusjakartasans, Arial, sans-serif", width: "100%", marginTop: 4,
        transition: "background 0.2s",
      }}>
        {status === "loading" ? (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ animation: "spin 1s linear infinite" }}>
              <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
            </svg>
            Connecting...
          </>
        ) : "Submit"}
      </button>
      <p style={{ fontSize: 11, color: "#999", textAlign: "center", margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
        No spam. No human SDRs. Just Arya calling you back.
      </p>
    </form>
  );
}

function TalkToAryaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="talk-to-arya" ref={ref} className="ta-section-padding" style={{ background: "#D95938", padding: "100px 0" }}>
      <div className="container-site">

        {/* ── Left | Right grid ── */}
        <div className="ta-talk-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 2, alignItems: "stretch" }}>

          {/* ── LEFT — heading + stacked channel cards ── */}
          <div style={{ display: "flex", flexDirection: "column" }}>

            {/* Heading block */}
            <div style={{ padding: "56px 48px 48px", textAlign: "left" }}>
              <motion.h2
                initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
                className="ta-h2"
                style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 300, color: "#ffffff", margin: "0 0 20px", lineHeight: 1.05 }}
              >
                Experience the future<br />of sales. Choose your<br />channel.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.08 }}
                style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.7, fontFamily: "Plusjakartasans, Arial, sans-serif", maxWidth: 320 }}
              >
                This isn&apos;t a demo form. Arya is live. Talk to her right now.
              </motion.p>
            </div>

            {/* Stacked channel rows */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {talkChannels.map((ch, i) => (
                <motion.a
                  key={ch.title}
                  href={ch.ctaHref}
                  target={ch.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ background: "rgba(0,0,0,0.08)" }}
                  style={{
                    padding: "28px 48px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    flex: 1,
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Icon box */}
                  <div style={{ width: 44, height: 44, flexShrink: 0, background: "rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {ch.icon}
                  </div>
                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 17, fontWeight: 400, color: "#ffffff", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.2 }}>
                      {ch.title}
                    </h4>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.55, margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                      {ch.desc}
                    </p>
                  </div>
                  {/* Arrow */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.a>
              ))}
              {/* Bottom border */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }} />
            </div>

          </div>

          {/* ── RIGHT — form card ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.3 }}
            style={{ background: "#ffffff", display: "flex", flexDirection: "column" }}
          >
            <div style={{ padding: "48px 44px 44px", flex: 1 }}>
              <h3 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 28, fontWeight: 400, color: "#000000", margin: "0 0 8px" }}>
                Let Arya call you.
              </h3>
              <p style={{ fontSize: 14, color: "#666666", marginBottom: 32, lineHeight: 1.6, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                Share your details — she&apos;ll ring in under 60 seconds.
              </p>
              <TalkToAryaContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── Launch Video Section ──────────────────────────────── */
/* ─── Features Section ──────────────────────────────────── */
// Exact illustration images from houseofagents.ai/try-ai-agent (CDN1)
const featureIllustrations = [
  `${CDN}/68b1484200a0bc8309028504_67368480c2cd1d0b8e9ce4dcf9d20589_try-ai-card-imgs-new%20%281%29.avif`,  // 24/7 Calling
  `${CDN}/68b14842a76899261b2e6b9d_3a879829deabb3d321fe220eccd362f4_try-ai-card-imgs-new%20%284%29.avif`,  // Scaling effortlessly
  `${CDN}/68b1484259d7f1762e80e514_f078adf0716728fe15a2c5d7840926cc_try-ai-card-imgs-new%20%283%29.avif`,  // Plug Into Your Workflow
  `${CDN}/68b148425fd6c45a323c193b_25f7f9b2168a46c6373398041466269a_try-ai-card-imgs-new%20%282%29.avif`,  // Instant Qualification & Routing
  `${CDN}/68b148f9dc50846c43e9e5c9_7df2d50523af5e85da52b955deac91b1_try-ai-card-imgs-new%20%285%29.avif`,  // Multilingual Fluency
  `${CDN}/68b1484369de1354b545fdf3_03cca03de0aec2203b5eb5fb6f04dc7c_try-ai-card-imgs-new%20%281%29.avif`,  // Follow-up on Autopilot
];

function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="ta-section-padding" style={{ background: "#ffffff", padding: "100px 24px" }}>
      <div className="container-site">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(36px, 4vw, 58px)", fontWeight: 300, color: "#000000", margin: 0, lineHeight: 1.1 }}>
            Arya is capable of
          </motion.h2>
        </div>

        {/* 3-col grid — image first, then title + desc */}
        <div className="ta-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
              style={{ display: "flex", flexDirection: "column", overflow: "hidden", background: "#ffffff" }}>

              {/* Illustration — top, fills card width */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden", background: "#f5f0eb", flexShrink: 0 }}>
                <Image
                  src={featureIllustrations[i]}
                  alt={f.title}
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>

              {/* Text content */}
              <div style={{ padding: "24px 4px 8px" }}>
                <h4 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 20, fontWeight: 400, color: "#1a1a1a", margin: "0 0 10px", lineHeight: 1.25 }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.7, margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Video Card ────────────────────────────────────────── */
function VideoCard({ video, index, inView }: { video: { title: string; duration: string; thumbnail: string }; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.05 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: 0, background: "#111" }}>
        <Image src={video.thumbnail} alt={video.title} fill
          style={{ objectFit: "cover", transition: "transform 0.4s ease", transform: hovered ? "scale(1.04)" : "scale(1)" }} unoptimized />
        <div style={{ position: "absolute", inset: 0, background: hovered ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.15)", transition: "background 0.3s ease" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: `translate(-50%, -50%) scale(${hovered ? 1.1 : 1})`, transition: "transform 0.3s ease", width: 52, height: 52, borderRadius: "50%", background: "rgba(217,89,56,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff"><polygon points="5,3 19,12 5,21" /></svg>
        </div>
        {video.duration && (
          <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(0,0,0,0.7)", color: "#ffffff", fontSize: 12, fontWeight: 400, fontFamily: "Plusjakartasans, Arial, sans-serif", padding: "3px 8px", borderRadius: 0 }}>
            {video.duration} mins
          </div>
        )}
      </div>
      <p style={{ fontFamily: "Plusjakartasans, Arial, sans-serif", fontSize: 15, fontWeight: 500, color: "#111111", margin: 0, lineHeight: 1.4 }}>
        {video.title}
      </p>
    </motion.div>
  );
}

/* ─── Use Cases Section ─────────────────────────────────── */
function UseCasesSection() {
  const [active, setActive] = useState("inbound");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const tab = videoCaseTabs.find((t) => t.id === active)!;
  return (
    <section ref={ref} className="ta-section-padding" style={{ background: "#f8f7f7", padding: "100px 24px" }}>
      <div className="container-site">
        <div style={{ marginBottom: 48 }}>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#000000", margin: "0 0 16px", lineHeight: 1.1 }}>
            Transform Customer Interaction with Proven Use Cases
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 16, color: "#555555", maxWidth: 680, margin: 0, lineHeight: 1.7, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
            Efficiently manage all incoming interactions with AI-powered voice agents that schedule appointments and provide 24/7 customer support, ensuring no inquiry is ever missed.
          </motion.p>
        </div>
        <div style={{ display: "flex", gap: 0, marginBottom: 48 }}>
          {videoCaseTabs.map((t) => (
            <button key={t.id} onClick={() => setActive(t.id)} style={{ padding: "18px 40px", fontSize: 16, fontWeight: 400, textTransform: "uppercase", border: "none", borderRadius: 0, cursor: "pointer", background: active === t.id ? "#D95938" : "#e5e5e5", color: active === t.id ? "#F8F7F7" : "#333333", fontFamily: "Plusjakartasans, Arial, sans-serif", transition: "background 0.2s, color 0.2s", height: 59 }}>
              {t.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
            className="ta-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {tab.videos.map((v, i) => (
              <VideoCard key={v.title} video={v} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────── */
function TryAryaTestimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeMobile, setActiveMobile] = useState(0);
  const prev = () => setActiveMobile((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveMobile((a) => (a + 1) % testimonials.length);
  return (
    <section ref={ref} className="ta-section-padding" style={{ background: "#ffffff", padding: "100px 24px" }}>
      <div className="container-site">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 300, color: "#000000", margin: 0, lineHeight: 1.1 }}>
            Let Our Amazing Clients Do The Talking
          </motion.h2>
        </div>
        <div style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="hidden lg:grid">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.08 }}
              style={{ background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: 0, padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              <h4 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 22, fontWeight: 400, color: "#000000", margin: 0, lineHeight: 1.2 }}>{t.result}</h4>
              <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.7, margin: 0, flex: 1, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ paddingTop: 16, borderTop: "1px solid #e5e5e5" }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#111111", margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>{t.name}</p>
                <p style={{ fontSize: 12, color: "#555555", margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="lg:hidden">
          <div style={{ position: "relative", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeMobile}
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{ background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: 0, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
                <h4 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: 22, fontWeight: 400, color: "#000000", margin: 0, lineHeight: 1.2 }}>{testimonials[activeMobile].result}</h4>
                <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.7, margin: 0 }}>&ldquo;{testimonials[activeMobile].quote}&rdquo;</p>
                <div style={{ paddingTop: 16, borderTop: "1px solid #e5e5e5" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#111111", margin: 0 }}>{testimonials[activeMobile].name}</p>
                  <p style={{ fontSize: 12, color: "#555555", margin: 0 }}>{testimonials[activeMobile].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 24 }}>
            <button onClick={prev} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #e5e5e5", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>←</button>
            <div style={{ display: "flex", gap: 8 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveMobile(i)}
                  style={{ width: i === activeMobile ? 20 : 8, height: 8, borderRadius: 0, border: "none", background: i === activeMobile ? "#D95938" : "#e5e5e5", cursor: "pointer", padding: 0, transition: "width 0.2s, background 0.2s" }} />
              ))}
            </div>
            <button onClick={next} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #e5e5e5", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Bottom CTA ────────────────────────────────────────── */
function BottomCta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="ta-section-padding" style={{ background: "#D95938", padding: "100px 24px", textAlign: "center" }}>
      <div className="container-site" style={{ maxWidth: 720 }}>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, color: "#F8F7F7", margin: "0 0 20px", lineHeight: 1.1 }}>
          Ready to Experience Arya?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 16, color: "rgba(248,247,247,0.8)", marginBottom: 40, lineHeight: 1.6, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
          Join hundreds of teams already saving thousands of hours with AI-powered voice calling.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#hero-form" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "16px 32px", fontSize: 16, fontWeight: 400, textTransform: "uppercase", borderRadius: 0, background: "#F8F7F7", color: "#000000", textDecoration: "none", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
            Try Arya
          </a>
          <Link href="https://calendly.com/hello-houseofagents-8n-x/30min" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "16px 32px", fontSize: 16, fontWeight: 400, textTransform: "uppercase", borderRadius: 0, background: "transparent", color: "#F8F7F7", textDecoration: "none", border: "1px solid rgba(248,247,247,0.5)", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
            Book Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────── */
export default function TryAryaPage() {
  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input:focus, select:focus { border-color: #D95938 !important; box-shadow: 0 0 0 2px rgba(217,89,56,0.12); }
      `}</style>

      <Navbar variant="light" />
      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="ta-hero-section" style={{ background: "#ffffff", minHeight: "100vh", paddingTop: 69, overflowX: "hidden", position: "relative" }}>

          <div className="ta-hero-inner" style={{ position: "relative", minHeight: "calc(100vh - 69px)", display: "flex", flexDirection: "column" }}>

            {/* Container — aligns with navbar edges */}
            <div className="container-site" style={{ flex: 1, display: "flex", flexDirection: "column", paddingTop: 0, paddingBottom: 0 }}>

            {/* Main 2-col grid */}
            <div className="ta-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", flex: 1, minHeight: 0, alignItems: "stretch" }}>

              {/* ── Left ── */}
              <div className="ta-hero-left-pad" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 40px 80px 0" }}>

                {/* H1 */}
                <h1 style={{ fontFamily: "Bdogrotesk, Arial, sans-serif", fontSize: "clamp(36px, 4.8vw, 72px)", fontWeight: 400, color: "#000000", lineHeight: 1.04, margin: "0 0 28px", letterSpacing: "-0.01em" }}>
                  The world&apos;s first<br />
                  <span style={{ color: "#D95938" }}>Super Human</span><br />
                  AI Sales Worker.
                </h1>

                {/* Description */}
                <p style={{ fontSize: 16, color: "#555555", lineHeight: 1.75, marginBottom: 12, maxWidth: 500, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                  Calls, qualifies, and closes leads across Voice, WhatsApp &amp; Email — with shared memory, real-time objection handling, and one relentless goal: run your revenue.
                </p>
                <p style={{ fontSize: 15, color: "#666666", lineHeight: 1.6, marginBottom: 40, maxWidth: 480, fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                  Enterprise-grade AI that works 24/7, on autopilot.
                </p>

                {/* CTA */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                  <a href="tel:+919873322457"
                    style={{ display: "inline-flex", alignItems: "center", padding: "14px 24px", fontSize: 15, fontWeight: 400, borderRadius: 0, background: "#D95938", color: "#ffffff", textDecoration: "none", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                    Call Me
                  </a>
                  <a href="#talk-to-arya"
                    style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", fontSize: 15, fontWeight: 400, borderRadius: 0, background: "transparent", border: "1px solid rgba(0,0,0,0.2)", color: "#111111", textDecoration: "none", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>
                    See how Arya works for your team
                  </a>
                </div>
              </div>

              {/* ── Right — floating rounded card ── */}
              <div className="ta-hero-video" style={{ display: "flex", padding: "32px 0" }}>
                <div className="ta-hero-video-card" style={{ position: "relative", flex: 1, minHeight: 480, borderRadius: 0, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08)" }}>

                  {/* Video */}
                  <video autoPlay muted loop playsInline
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}>
                    <source src={ARYA_VIDEO} type="video/mp4" />
                  </video>

                  {/* gradient overlay — stronger at bottom */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 35%, transparent 50%, rgba(0,0,0,0.8) 100%)" }} />

                  {/* Top badges */}
                  <div style={{ position: "absolute", top: 16, left: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", padding: "6px 14px", borderRadius: 0, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", width: "fit-content" }}>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#ffffff", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>Arya the Sales Worker</span>
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 0, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)", width: "fit-content" }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="#facc15"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                      <span style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.9)", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>Autopilot activated</span>
                    </div>
                  </div>

                  {/* Bottom — message notification (like 11x) */}
                  <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, background: "rgba(10,10,10,0.75)", backdropFilter: "blur(20px)", borderRadius: 0, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
                    {/* Avatar */}
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #D95938, #e8845e)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#fff", fontFamily: "Bdogrotesk, Arial, sans-serif" }}>A</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 12, fontWeight: 600, color: "#ffffff", margin: "0 0 2px", fontFamily: "Plusjakartasans, Arial, sans-serif" }}>Arya the Sales Worker</p>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0, fontFamily: "Plusjakartasans, Arial, sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        Hi Rahul, are you still looking to scale your outbound?
                      </p>
                    </div>
                    {/* Green dot */}
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#16a34a", flexShrink: 0, boxShadow: "0 0 0 3px rgba(22,163,74,0.2)" }} />
                  </div>
                </div>
              </div>
            </div>

            </div>{/* /container-site */}

            {/* Logo marquee — light, pinned at bottom */}
            <LogoMarquee />
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────── */}
        <StatsBar />

        {/* ── Demo Calls ────────────────────────────────────── */}
        <DemoCallsSection />

        {/* ── The Problem ───────────────────────────────────── */}
        <TheProblemSection />

        {/* ── Omni-Channel ──────────────────────────────────── */}
        <OmniChannelSection />

        {/* ── How Arya Works ───────────────────────────────── */}
        <HowAryaWorksSection />

        {/* ── Talk to Arya ─────────────────────────────────── */}
        <TalkToAryaSection />

        {/* ── Features ─────────────────────────────────────── */}
        <FeaturesSection />

        {/* ── Testimonials ─────────────────────────────────── */}
        <TryAryaTestimonials />

        {/* ── Bottom CTA ───────────────────────────────────── */}
        <BottomCta />

      </main>
      <Footer />
    </>
  );
}
