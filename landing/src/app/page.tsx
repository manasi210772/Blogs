import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stories from "@/components/Stories";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Alternating full-bleed bands of faint terracotta keep the cream from reading as flat white.
const BAND = "border-y border-ink/5 bg-accent/[0.08]";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <div className={BAND}>
          <Stories />
        </div>
        <SocialProof />
        <div className={BAND}>
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
