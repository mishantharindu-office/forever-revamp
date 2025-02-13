// components/HeroSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: '/image/bg-slider-18.jpg',
      heading: 'Welcome to Our Website',
      paragraph: 'Discover amazing features and services that we offer.',
      buttonText: 'Learn More',
    },
    {
      id: 2,
      image: '/image/bg-slider-19-scaled.jpg',
      heading: 'Explore Our Solutions',
      paragraph: 'We provide innovative solutions to grow your business.',
      buttonText: 'Get Started',
    },
    {
      id: 3,
      image: '/image/bg-slider-20-scaled.jpg',
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
            className="relative h-screen flex items-center justify-start bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative container mx-auto px-6 lg:px-12 text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {slide.heading}
              </h1>
              <p className="text-lg lg:text-xl mb-8">{slide.paragraph}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;