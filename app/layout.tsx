import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House of Agents — AI Workforce for Sales",
  description:
    "AI Workforce – Unlock Productivity with Chat, Voice & Video Agents! House of Agents brings human-like AI agents to sales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
