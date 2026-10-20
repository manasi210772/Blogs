import Hero from "../landing/Hero";
import Features from "../landing/Features";
import Stories from "../landing/Stories";
import SocialProof from "../landing/SocialProof";
import FAQ from "../landing/FAQ";

// Alternating full-bleed bands of faint terracotta keep the cream from reading as flat white.
const BAND = "border-y border-ink/5 bg-decor/[0.08]";

const Home = () => (
  <>
    <Hero />
    <Features />
    <div className={BAND}>
      <Stories />
    </div>
    <SocialProof />
    <div className={BAND}>
      <FAQ />
    </div>
    {/* Plain background between the last section and the footer. */}
    <div aria-hidden className="h-16 md:h-24" />
  </>
);

export default Home;
