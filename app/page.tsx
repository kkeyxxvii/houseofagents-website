import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgentsSection from "@/components/AgentsSection";
import UseCaseTabs from "@/components/UseCaseTabs";
import FeaturesGrid from "@/components/FeaturesGrid";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

function CollabBanner() {
  return (
    <section style={{ background: "#000000", padding: "clamp(64px, 10vw, 128px) 0" }}>
      <div className="container-site" style={{ textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 58px)",
            fontWeight: 300,
            lineHeight: "1.2",
            color: "#ffffff",
            margin: 0,
          }}
        >
          Collaborative AI Agents that co-pilot with your team to automate workflows
          and don&apos;t stop until goals are met.
        </h2>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AgentsSection />
        <CollabBanner />
        <UseCaseTabs />
        <FeaturesGrid />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
