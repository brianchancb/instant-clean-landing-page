import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import ProblemBanner from "@/components/ProblemBanner";
import OfferBanner from "@/components/OfferBanner";
import YouGetBanner from "@/components/YouGetBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroBanner />
      <ProblemBanner />
      <OfferBanner />
      <YouGetBanner />
      <Footer />
    </main>
  );
}
