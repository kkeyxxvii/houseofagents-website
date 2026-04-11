"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const BASE = "https://cdn.prod.website-files.com/67c5741832d4da33d634d681";

const ICONS = {
  phoneFwd: `${BASE}/686e035b682f4e13a990446c_phone-forwarded.svg`,
  mails: `${BASE}/686df61830a34cac6dadd36b_mails.svg`,
  fileText: `${BASE}/686df618fc505bee8bcb7b35_file-text-1.svg`,
  fileSearch: `${BASE}/686e035b8e8aa8e61574b82c_file-search.svg`,
  fileUser: `${BASE}/686e035b8b40370d314e0d96_file-user.svg`,
  mailCheck: `${BASE}/686e035b697ba6ddd6bcc579_mail-check.svg`,
  briefcase: `${BASE}/686df61814971956ffa271b5_briefcase.svg`,
  usersRound: `${BASE}/686df6186b9780317ff01d74_users-round.svg`,
};

const tabs = [
  {
    id: "sales",
    label: "Sales",
    description:
      "Cora and Arya AI revolutionises voice-led sales by qualifying leads, automating outreach, and scaling sales ops pipeline.",
    details: [
      {
        agent: "Cora",
        color: "#bf4a28",
        tasks: [
          "Maps ideal prospects from verified data sources",
          "Extracts buying signals for targeted outreach",
          "Generates personalized research briefs per account",
        ],
        icons: [ICONS.fileSearch, ICONS.fileUser, ICONS.mailCheck],
      },
      {
        agent: "Arya",
        color: "#D95938",
        tasks: [
          "Human-like calling on auto-pilot to leads and qualify intent",
          "Books meetings autonomously by integrating with CRM and eMail",
          "Re-engages cold leads via voice to revive pipeline",
        ],
        icons: [ICONS.phoneFwd, ICONS.mails, ICONS.fileText],
      },
    ],
    metrics: [
      { value: "10K+", label: "AI calls daily" },
      { value: "8s", label: "Lead response time" },
      { value: "72%", label: "Qualification lift" },
    ],
  },
  {
    id: "recruitment",
    label: "Hiring",
    description:
      "Redefine how recruitment gets done. With Cora and Arya, your hiring team becomes a 24/7 engine of talent discovery, engagement and shortlisting.",
    details: [
      {
        agent: "Cora",
        color: "#bf4a28",
        tasks: [
          "Filters top talent based on role-specific criteria or your CRM/ATS Data",
          "Summarizes candidate profiles for fast screening",
          "Cora finds contact details & email IDs of candidates",
        ],
        icons: [ICONS.fileSearch, ICONS.fileUser, ICONS.mailCheck],
      },
      {
        agent: "Arya",
        color: "#D95938",
        tasks: [
          "Conducts intro calls to qualify potential candidates",
          "Schedules interviews directly with calendars",
          "Handles FAQs to improve candidate experience",
        ],
        icons: [ICONS.phoneFwd, ICONS.briefcase, ICONS.usersRound],
      },
    ],
    metrics: [
      { value: "24/7", label: "Talent engagement" },
      { value: "Days", label: "Onboarding timeline" },
      { value: "Global", label: "Multilingual outreach" },
    ],
  },
  {
    id: "audit",
    label: "Audit",
    comingSoon: true,
    description: "AI-powered audit workflows are coming soon.",
    details: [] as { agent: string; color: string; tasks: string[]; icons: string[] }[],
    metrics: [] as { value: string; label: string }[],
  },
  {
    id: "compliance",
    label: "Compliance",
    comingSoon: true,
    description: "Compliance automation is coming soon.",
    details: [] as { agent: string; color: string; tasks: string[]; icons: string[] }[],
    metrics: [] as { value: string; label: string }[],
  },
];

export default function UseCaseTabs() {
  const [active, setActive] = useState("sales");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const currentTab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
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
            Powerful AI Agents that Supercharge Operations
          </motion.h3>
        </div>

        {/* Tab selector */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 0, marginBottom: 40 }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => !tab.comingSoon && setActive(tab.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "18.5px 30px",
                fontSize: 16,
                fontWeight: 400,
                textTransform: "uppercase" as const,
                letterSpacing: "normal",
                borderRadius: 0,
                border: "none",
                cursor: tab.comingSoon ? "default" : "pointer",
                background: active === tab.id && !tab.comingSoon
                  ? "#D95938"
                  : "rgb(236,236,236)",
                color: active === tab.id && !tab.comingSoon
                  ? "#F8F7F7"
                  : "rgb(90,48,25)",
                height: 59,
              }}
            >
              {tab.label}
              {tab.comingSoon && (
                <span style={{ fontSize: 10, opacity: 0.7 }}>Coming Soon</span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-border p-8 lg:p-12"
          >
            <div className="flex flex-col lg:flex-row gap-10 mb-10">
              <div className="flex-1">
                <p className="text-lg lg:text-xl text-ink font-medium leading-relaxed max-w-3xl">
                  {currentTab.description}
                </p>
              </div>
              <div className="lg:w-72 xl:w-80 shrink-0">
                <Image
                  src="https://cdn.prod.website-files.com/67c5741832d4da33d634d681/686df543d5f05d9ad265ed48_Version%20(1).avif"
                  alt="AI agent workflow illustration"
                  width={320}
                  height={240}
                  className="w-full rounded-2xl object-cover"
                  unoptimized
                />
              </div>
            </div>

            {currentTab.details.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {currentTab.details.map((detail) => (
                  <div key={detail.agent} className="space-y-4">
                    <h3 className="text-base font-bold text-ink">
                      What {detail.agent} Does
                    </h3>
                    <ul className="space-y-3">
                      {detail.tasks.map((task, ti) => (
                        <li key={task} className="flex items-start gap-2.5">
                          <Image
                            src={detail.icons[ti]}
                            alt=""
                            width={16}
                            height={16}
                            className="shrink-0 mt-0.5 w-4 h-4"
                            unoptimized
                          />
                          <span className="text-sm text-muted leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Metrics */}
            {currentTab.metrics.length > 0 && (
              <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
                {currentTab.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-3xl font-extrabold text-ink">{m.value}</p>
                    <p className="text-sm text-muted mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
