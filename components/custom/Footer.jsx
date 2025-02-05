"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";

function FooterSection() {
  const { toast } = useToast();

  const [email, setEmail] = useState("");

  const handleSubscribe = async (email) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        toast({
          title: "Newsletter Subscribed Successfully!",
          description: "You have successfully subscribed to our newsletter.",
          variant: "success",
        });
        setEmail("");
      } else {
        toast({
          title: "Failed to subscribe to newsletter",
          description: responseData?.message || "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-4 lg:gap-8 w-full py-8 pb-0 lg:pb-8 bg-footer px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52">
      {/* Company Info */}
      <div className="mb-6 sm:mb-0">
        <p className="mb-3 text-lg sm:text-xl font-bold text-black font-primary">
          Company
        </p>
        <p className="mb-2 text-sm sm:text-base text-gray-600 font-primary leading-relaxed">
          Find a location nearest you. See Our Stores
        </p>
        <p className="mb-2 text-sm sm:text-base text-gray-600 font-primary leading-relaxed">
          +391 (0)35 2568 4593
        </p>
        <p className="text-sm sm:text-base text-gray-600 font-primary leading-relaxed">
          hello@domain.com
        </p>
      </div>

      {/* Useful Links */}
      <div className="mb-6 sm:mb-0">
        <ul>
          <li className="mb-3 text-lg sm:text-xl font-bold text-black font-primary">
            Useful Links
          </li>
          {[
            "New Products",
            "Best Sellers",
            "Bundle & Save",
            "Online Gift Card",
          ].map((link, index) => (
            <li
              key={index}
              className="mb-2 text-sm sm:text-base text-gray-600 font-primary leading-relaxed"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Information Links */}
      <div className="mb-6 sm:mb-0">
        <ul>
          <li className="mb-3 text-lg sm:text-xl font-bold text-black font-primary">
            Information
          </li>
          {[
            "Shipping Policy",
            "Return Policy",
            "Privacy Policy",
            "Terms of Service",
          ].map((info, index) => (
            <li
              key={index}
              className="mb-2 text-sm sm:text-base text-gray-600 font-primary leading-relaxed"
            >
              {info}
            </li>
          ))}
        </ul>
      </div>

      {/* Email Subscription */}
      <div className="flex flex-col w-full h-fit col-span-3 lg:col-span-1">
        <p className="mb-4 text-xl sm:text-2xl font-bold text-black font-primary">
          Good Emails.
        </p>
        <p className="mb-4 text-sm sm:text-base text-gray-600 font-primary leading-relaxed">
          Enter your email below to be the first to know about new collections
          and product launches.
        </p>
        <div>
          <div className="flex flex-row bg-white border border-black rounded-md">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full lg:h-12 px-4 text-sm sm:text-base m-0 rounded-none bg-background focus:ring-0 focus:outline-none"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
            <button
              className="w-full sm:w-2/5 px-1 text-xs sm:text-sm font-semibold text-white bg-black hover:bg-gray-800"
              onClick={() => handleSubscribe(email)}
              disabled={!email} // Disable button if email is empty
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
