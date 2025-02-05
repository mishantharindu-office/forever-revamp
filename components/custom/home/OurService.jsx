"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

function OurService() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <Swiper
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
        loop
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="flex items-center justify-center gap-2">
              <div className="h-[200px] w-1/3 flex justify-center items-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={180}
                  height={180}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="w-2/3">
                <p className="text-xl font-semibold text-black font-primary">
                  {service.title}
                </p>
                <p className="text-base text-gray-600 font-primary">
                  {service.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default OurService;

const services = [
  {
    id: 1,
    title: "Fast Shipping",
    description: "Fast Shipping Within 2 Days",
    image: "/image/image-box-19.jpg",
  },
  {
    id: 2,
    title: "Installment Available",
    description: "We accept Koko payments",
    image: "/image/image-box-20.jpg",
  },
  {
    id: 3,
    title: "Flexible Payment",
    description: "Pay with Multiple Credit Cards",
    image: "/image/image-box-21.jpg",
  },
  {
    id: 4,
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
    image: "/image/image-box-22.jpg",
  },
];
