/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

function aboutus() {
  const teamMembers = [
    {
      name: "Slava Fedutik",
      role: "Founder, Chief Creative",
      image: "/images/our-team-mt-01.jpg", // Replace with your image path
      socials: [
        { name: "twitter", icon: "fab fa-twitter", link: "#" },
        { name: "facebook", icon: "fab fa-facebook", link: "#" },
        { name: "instagram", icon: "fab fa-instagram", link: "#" },
        { name: "youtube", icon: "fab fa-youtube", link: "#" },
      ],
    },
    {
      name: "Jennifer C.",
      role: "Founder, CEO",
      image: "/images/our-team-mt-02.jpg", // Replace with your image path
      socials: [
        { name: "twitter", icon: "fab fa-twitter", link: "#" },
        { name: "facebook", icon: "fab fa-facebook", link: "#" },
        { name: "instagram", icon: "fab fa-instagram", link: "#" },
        { name: "youtube", icon: "fab fa-youtube", link: "#" },
      ],
    },
    {
      name: "Valeriia Nadopta",
      role: "Founder, COO",
      image: "/images/our-team-mt-03.jpg", // Replace with your image path
      socials: [
        { name: "twitter", icon: "fab fa-twitter", link: "#" },
        { name: "facebook", icon: "fab fa-facebook", link: "#" },
        { name: "instagram", icon: "fab fa-instagram", link: "#" },
        { name: "youtube", icon: "fab fa-youtube", link: "#" },
      ],
    },
  ];

  return (
    <>
      {/* Section 01 - Intro Section with background image */}
      <section className="relative bg-gray-100 h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/bg-about-mt-01.jpg" // Replace with your image path
            alt="About Glowing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Overlay */}
        <div className="relative z-10 container w-3/5 max-md:w-full mx-auto h-full flex items-center">
          <div className="w-2/4 md:w-1/2 max-md:w-full px-6 md:px-12">
            <p className="text-sm mb-6 uppercase tracking-widest text-black">
              Introducing
            </p>
            <h1 className="text-6xl max-md:text-5xl font-semibold text-black mt-2">
              About Glowing
            </h1>
          </div>
        </div>
      </section>

      {/* Section 02 - Mission Statement */}
      <section className="relative bg-white py-20 px-5">
        <div className="container mx-auto text-center">
          {/* Icon */}
          <img
            src="/images/image-box-mt-11.jpg" // Replace with a small icon image
            alt="Leaf Icon"
            className="mx-auto mb-6 w-[150px]"
          />
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-black">
            We strive to live with compassion, kindness, and empathy
          </h2>
          {/* Description */}
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-base">
            A lot of so-called stretch denim pants out there are just glorified
            sweatpants — they get baggy and lose their shape. Not cool. Our
            tightly knitted fabric holds its form after repeated wear. Plus,
            Aldays dress up or down, no prob. So you can wear them all day. Get
            it?
          </p>
        </div>
      </section>

      {/* Section - Image and Text Side by Side */}
      <section className="py-10 bg-white relative w-full md:w-full lg:w-3/5 h-auto mx-auto group">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/banner-mt-11.jpg" // Replace with your image path
              alt="Healthy Glow"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Text */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 px-14 max-md:px-6">
            <h2 className="text-3xl md:text-3xl font-semibold text-black mb-6">
              Give your skin a healthy glow everyone
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Luxe, lightweight, and made with the perfect blend of cashmere and
              cotton, our Sonoma Pillows and Throws are inspired by the basics
              we turn to season after season. Get to know the cozy essentials
              that will elevate your space in an instant.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Image and Text Side by Side */}
      <section className="py-10 bg-white relative w-full md:w-full lg:w-3/5 h-auto mx-auto group">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 px-14 max-md:px-6">
            <h2 className="text-3xl md:text-3xl font-semibold text-black mb-6">
              Give your skin a healthy glow everyone
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Luxe, lightweight, and made with the perfect blend of cashmere and
              cotton, our Sonoma Pillows and Throws are inspired by the basics
              we turn to season after season. Get to know the cozy essentials
              that will elevate your space in an instant.
            </p>
          </div>

          {/* Right Column - Text */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="/images/banner-mt-12.jpg" // Replace with your image path
              alt="Healthy Glow"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section - Client Logo */}
      <section className="relative w-full h-auto mx-auto bg-gray-100">
        <div className="container w-full sm:w-full md:w-3/5 mx-auto text-center py-20 px-10">
          {/* Quote */}
          <p className="text-xl md:text-2xl md:max-w-3xl mx-auto font-semibold text-gray-700 mb-10 ">
            “ Millions of combinations, meaning you get a totally unique piece
            of furniture exactly the way you want it.”
          </p>

          {/* Logos */}
          <div className="flex justify-center items-center flex-wrap w-full">
            <div className="flex-1 flex justify-center max-md:flex-auto">
              <img
                src="/images/clinet-logo-mt-01.png" // Replace with actual logo path
                alt="Logo 1"
                className="object-contain h-auto w-full max-w-[150px] lg:max-w-[200px] p-3"
              />
            </div>
            <div className="flex-1 flex justify-center max-md:flex-auto">
              <img
                src="/images/clinet-logo-mt-02.png" // Replace with actual logo path
                alt="Logo 2"
                className="object-contain h-auto w-full max-w-[150px] lg:max-w-[200px] p-3"
              />
            </div>
            <div className="flex-1 flex justify-center max-md:flex-auto">
              <img
                src="/images/clinet-logo-mt-03.png" // Replace with actual logo path
                alt="Logo 3"
                className="object-contain h-auto w-full max-w-[150px] lg:max-w-[200px] p-3"
              />
            </div>
            <div className="flex-1 flex justify-center max-md:flex-auto">
              <img
                src="/images/clinet-logo-mt-04.png" // Replace with actual logo path
                alt="Logo 4"
                className="object-contain h-auto w-full max-w-[150px] lg:max-w-[200px] p-3"
              />
            </div>
            <div className="flex-1 flex justify-center max-md:flex-auto">
              <img
                src="/images/clinet-logo-mt-05.png" // Replace with actual logo path
                alt="Logo 5"
                className="object-contain h-auto w-full max-w-[150px] lg:max-w-[200px] p-3"
              />
            </div>
            <div className="flex-1 flex justify-center max-md:flex-auto">
              <img
                src="/images/clinet-logo-mt-06.png" // Replace with actual logo path
                alt="Logo 5"
                className="object-contain h-auto w-full max-w-[150px] lg:max-w-[200px] p-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section - Team Member Card */}

      <section className="relative w-full md:w-full lg:w-3/5 h-auto mx-auto py-20 bg-white text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold max-w-2xl mx-auto mb-14 ">
          We pride ourselves on having a team of highly skilled professionals
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative overflow-hidden bg-white max-md:m-10" >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Social Icons (Hidden by default, appear on hover) */}
              <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-70 py-2 flex justify-center space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {member.socials.map((social, idx) => (
                  <a href={social.link} key={idx} className="text-white">
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>

              {/* Member Info */}
              <div className="py-4 text-left">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm font-normal py-2">- {member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default aboutus;
