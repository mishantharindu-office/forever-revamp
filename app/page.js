"use client";
import BestSellingSection from "@/components/custom/home/BestSellingSection";
import FeaturedSection from "@/components/custom/home/FeaturedSection";
import HeroSection from "@/components/custom/home/HeroSection";
import OfferInfoSection from "@/components/custom/home/OfferInfoSection";
import OurService from "@/components/custom/home/OurService";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <main className="flex flex-col items-center min-h-screen">
      <HeroSection />
      <FeaturedSection />
      <BestSellingSection />
      <OurService />
      <OfferInfoSection />
    </main>
  );
}
