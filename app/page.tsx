import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import ProblemBanner from "@/components/ProblemBanner";
import OfferBanner from "@/components/OfferBanner";
import YouGetBanner from "@/components/YouGetBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen md:px-16 md:pl-20 md:py-8">
      <NavBar />
      <section className="flex-grow">
        {" "}
        {/* Flex-grow to fill available space */}
        <HeroBanner />
        <ProblemBanner />
        <OfferBanner />
        <YouGetBanner />
      </section>
      <Footer />
    </main>
  );
}
