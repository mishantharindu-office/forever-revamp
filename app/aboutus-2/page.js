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
  ];

  return (
    <>
      {/* Section 01 - Image and Text Side by Side */}
      <section className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-20 pt-5  px-5 bg-white text-center">
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

            <div className="md:flex pt-5">

              {/* <!-- Left Container (3/4 width) --> */}
              <div className="w-1/2 max-md:w-full p-4 pl-0">
                {/* <!-- Left content goes here --> */}
                <div className="container">
                  {/* <!-- Address Section --> */}
                  <div className="">
                    <div className="mb-3 text-left">
                      <h3 className="text-lg font-semibold">Address</h3>
                    </div>
                    <p className="text-gray-600 font-light leading-7 text-sm">
                      Send us a text & an ambassador will respond when available.
                    </p>
                    <a href="#" className="text-black text-sm font-normal mt-3 inline-block">1-814-251-9966</a>
                  </div>
                </div>
              </div>

              {/* <!-- Right Container (1/4 width) --> */}
              <div className="w-1/2 max-md:w-full p-4 pl-10">
                {/* <!-- Right content goes here --> */}
                <div className="container">
                  {/* <!-- Contact Section --> */}
                  <div className="flex justify-center md:justify-start items-center mb-3">
                    <h3 className="text-lg font-semibold">Hour of operation</h3>
                  </div>
                  <p className="text-black text-sm font-light leading-7">
                    Mon - Fri: <span className="text-gray-600 font-light text-left pl-7">08:30 - 20:00</span><br />
                    Sat & Sun: <span className="text-gray-600 font-light pl-7">09:30 - 21:30</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Section 02 - Heading Statement */}
      <section className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-20 pt-5  px-5 bg-white text-center">
        <div className="container mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-black">
            We strive to live with compassion, kindness and empathy
          </h2>
          {/* Description */}
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-sm leading-7">
            lot of so-called stretch denim pants out there are just glorified sweatpants – they get baggy and lose their shape. Not cool.
            Our tightly knitted fabric holds its form after repeated wear. Plus, Aldays dress up or down, no prob. So you can wear them all day. Get it?
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-center my-16">

          {/* <!-- Service 01 Section --> */}
          <div className="md:pr-16 text-center">
            {/* Icon */}
            <img
              src="/images/image-box-mt-01.jpg" // Replace with a small icon image
              alt="Leaf Icon"
              className="mx-auto mb-6 w-[120px]"
            />
            <div className="flex justify-center md:justify-center items-center mb-3">
              <h3 className="ml-2 text-lg font-semibold">Guaranteed PURE</h3>
            </div>
            <p className="text-gray-600 font-light text-sm leading-7">
              All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients
            </p>
          </div>

          {/* <!-- Service 02 Section --> */}
          <div className="md:pr-16 text-center">
            {/* Icon */}
            <img
              src="/images/image-box-mt-02.jpg" // Replace with a small icon image
              alt="Leaf Icon"
              className="mx-auto mb-6 w-[120px]"
            />
            <div className="flex justify-center md:justify-center items-center mb-3">
              <h3 className="ml-2 text-lg font-semibold">Guaranteed PURE</h3>
            </div>
            <p className="text-gray-600 font-light text-sm leading-7">
              All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients
            </p>
          </div>

          {/* <!-- Service 03 Section --> */}
          <div className="md:pr-16 text-center">
            {/* Icon */}
            <img
              src="/images/image-box-mt-03.jpg" // Replace with a small icon image
              alt="Leaf Icon"
              className="mx-auto mb-6 w-[120px]"
            />
            <div className="flex justify-center md:justify-center items-center mb-3">
              <h3 className="ml-2 text-lg font-semibold">Guaranteed PURE</h3>
            </div>
            <p className="text-gray-600 font-light text-sm leading-7">
              All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients
            </p>
          </div>

        </div>

      </section>

      {/* Section 03 - Image and Image Side by Side */}
      <section className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-20 pt-5  px-5 bg-white text-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-10">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/banner-mt-13.jpg" // Replace with your image path
              alt="Healthy Glow"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Text */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/banner-mt-14.jpg" // Replace with your image path
              alt="Healthy Glow"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 04 - Team Member Card */}
      <section className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-20 pt-5  px-5 bg-white text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold max-w-2xl mx-auto">
          We pride ourselves on having a team of highly skilled professionals
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed text-center py-5  mb-14 max-w-[75%] m-auto" >
          Not cool. Our tightly knitted fabric holds its form after repeated wear. Plus, Aldays dress up or down, 
          no prob. <br/>So you can wear them all day. Get it?
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
