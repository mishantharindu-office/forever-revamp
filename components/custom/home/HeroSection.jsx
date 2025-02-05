"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useToast } from "@/hooks/use-toast";
import { useLanguageStore } from "@/context";

function HeroSection() {
  const [sliders, setSliders] = useState([]);
  const { selectedLanguage } = useLanguageStore();
  const { toast } = useToast();

  const fetchData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/customization/hero/front?language=${selectedLanguage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSliders(data?.data || []);
      } else {
        toast({
          title: "Failed to fetch Sliders",
          description: "Could not fetch sliders. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedLanguage]);

  return (
    <div className="relative w-full min-h-screen">
      <Swiper
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
        loop
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Pagination, Autoplay]}
        effect={"fade"}
        navigation={true}
        className="h-full mySwiper"
      >
        {sliders &&
          sliders.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-screen">
                {/* Image container */}
                <div className="w-full h-full">
                  <Image
                    src={data.image}
                    alt="Innovate"
                    width={5000}
                    height={5000}
                    className="object-cover h-full "
                  />
                </div>

                {/* Text content positioned on top of the image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center w-full px-4 py-4 text-white md:w-3/4 lg:w-1/2">
                  <h1 className="mb-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl text-green-950 font-handwrite">
                    {data?.title}
                  </h1>
                  <h1 className="mb-4 text-2xl font-semibold text-center text-black sm:text-3xl md:text-4xl lg:text-6xl w-full lg:w-[450px]">
                    {data?.subTitle}
                  </h1>
                  <p className="max-w-lg text-base text-center text-gray-500 sm:text-lg md:text-xl font-primary">
                    {data?.description}
                  </p>
                  {data.hasButton && (
                    <button
                      className="px-4 py-2 mt-6 text-sm font-semibold text-white transition-all duration-150 delay-75 bg-black rounded-md hover:bg-green-800 sm:px-6 sm:py-2 md:px-8"
                      onClick={() => (window.location.href = data?.buttonLink)}
                    >
                      {data?.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Custom pagination */}
      <div className="absolute z-50 flex items-center justify-center w-full mt-4 bottom-16">
        <div>
          <div className="flex swiper-custom-pagination" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

const slideData = [
  {
    id: 1,
    image: "/image/bg-slider-18.jpg",
    designText: "Made For you",
    mainText: "Beauty Inspired by Real Life",
    subText:
      "Made using clean, non-toxic ingredients, our products are designed for everyone.",
    btnText: "Shop Now",
  },
  {
    id: 2,
    image: "/image/bg-slider-20-scaled.jpg",
    designText: "Made For you 2",
    mainText: "Beauty Inspired by Real Life 2",
    subText:
      "Made using clean, non-toxic ingredients, our products are designed for everyone. 2",
    btnText: "Shop Now",
  },
  {
    id: 3,
    image: "/image/bg-slider-19-scaled.jpg",
    designText: "Made For you 3",
    mainText: "Beauty Inspired by Real Life 3",
    subText:
      "Made using clean, non-toxic ingredients, our products are designed for everyone. 3",
    btnText: "Shop Now",
  },
];
