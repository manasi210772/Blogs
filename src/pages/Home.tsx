import { usePageMeta } from "../lib/usePageMeta";
import Hero from "../landing/Hero";
import WhyIWrite from "../landing/WhyIWrite";
import Stories from "../landing/Stories";

// A faint terracotta band behind the stories keeps the cream from reading as flat white.
const BAND = "border-y border-ink/5 bg-decor/[0.08]";

const Home = () => {
  usePageMeta();

  return (
    <>
      <Hero />
      <WhyIWrite />
      <div className={BAND}>
        <Stories />
      </div>
      {/* Plain background between the last section and the footer. */}
      <div aria-hidden className="h-16 md:h-24" />
    </>
  );
};

export default Home;
