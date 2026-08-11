import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SubscribeSection from "@/components/SubscribeSection";
import GiftSection from "@/components/GiftSection";
import ShopGrid from "@/components/ShopGrid";
import StorySection from "@/components/StorySection";
import WhereToFind from "@/components/WhereToFind";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Reveal>
        <SubscribeSection />
      </Reveal>
      <Reveal>
        <ShopGrid />
      </Reveal>
      <Reveal>
        <GiftSection />
      </Reveal>
      <Reveal>
        <StorySection />
      </Reveal>
      <Reveal>
        <WhereToFind />
      </Reveal>
      <Reveal>
        <Newsletter />
      </Reveal>
      <Footer />
    </main>
  );
}
