"use client";
// import HeroSection from "@/components/forever/custom/home/HeroSection";
import BestSellingSection from "@/components/custom/home/BestSellingSection";
import FeaturedSection from "@/components/custom/home/FeaturedSection";
import HeroSection from "@/components/custom/home/HeroSection";
import OfferInfoSection from "@/components/custom/home/OfferInfoSection";
import OurService from "@/components/custom/home/OurService";
import BrowseOurProducts from "@/components/forever/custom/home/BrowseOurProducts";
import DontMiss from "@/components/forever/custom/home/DontMiss";
import HeroSlider from "@/components/forever/custom/home/HeroSlider ";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* <HeroSection />
      <FeaturedSection />
      <BestSellingSection />
      <OurService />
      <OfferInfoSection /> */}

      {/* Forever Section */}
      {/* <HeroSlider />
      <HeroSection /> */}
      <DontMiss />
      <BrowseOurProducts />
      


    </main>
  );
}
