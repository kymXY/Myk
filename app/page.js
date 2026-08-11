import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SubscribeSection from "@/components/SubscribeSection";
import GiftSection from "@/components/GiftSection";
import ShopGrid from "@/components/ShopGrid";
import StorySection from "@/components/StorySection";
import WhereToFind from "@/components/WhereToFind";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SubscribeSection />
      <ShopGrid />
      <GiftSection />
      <StorySection />
      <WhereToFind />
      <Newsletter />
      <Footer />
    </main>
  );
}
