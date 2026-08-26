import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Services } from "@/components/Services";
import { Founder } from "@/components/Founder";
import { SystemSteps } from "@/components/SystemSteps";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { Reviews } from "@/components/Reviews";
import { Audience } from "@/components/Audience";
import { Faq } from "@/components/Faq";
import { QuoteCta } from "@/components/QuoteCta";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Founder />
        <SystemSteps />
        <Process />
        <Stats />
        <Reviews />
        <Audience />
        <Faq />
        <QuoteCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
