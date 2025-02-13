"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useToast } from "@/hooks/use-toast";
import { useLanguageStore } from "@/context";

function HeroSection = () => {
    const slides = [
      {
        id: 1,
        image: '/images/slide1.jpg',
        heading: 'Welcome to Our Website',
        paragraph: 'Discover amazing features and services that we offer.',
        buttonText: 'Learn More',
      },
      {
        id: 2,
        image: '/images/slide2.jpg',
        heading: 'Explore Our Solutions',
        paragraph: 'We provide innovative solutions to grow your business.',
        buttonText: 'Get Started',
      },
      {
        id: 3,
        image: '/images/slide3.jpg',
        heading: 'Join Our Community',
        paragraph: 'Be part of a thriving community of professionals.',
        buttonText: 'Join Now',
      },
    ];
  
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex justify-start items-center bg-cover bg-center h-screen"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative mx-auto px-6 lg:px-12 text-white container">
                <h1 className="mb-4 font-bold text-4xl lg:text-6xl">
                  {slide.heading}
                </h1>
                <p className="mb-8 text-lg lg:text-xl">{slide.paragraph}</p>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold text-white">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

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

export default HeroSection