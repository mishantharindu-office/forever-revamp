"use client";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaCcAmex,
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
} from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaXTwitter } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";
import { useLanguageStore } from "@/context";

function CopyRightSection() {
  const [languages, setLanguages] = useState([]);
  const { selectedLanguage, setLanguage } = useLanguageStore();
  const { toast } = useToast();

  const fetchData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/language/front/all`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setLanguages(data?.data || []);
      } else {
        toast({
          title: "Failed to fetch Languages",
          description: "Could not fetch languages. Please try again later.",
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
  }, []);

  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-3 bg-footer sm:py-20 sm:px-8 md:px-12 lg:px-20 xl:px-52">
      {/* Left Section */}
      <div className="flex sm:flex-col lg:flex-row gap-8 sm:gap-2 md:gap-2 items-center justify-between px-4">
        <p className="font-semibold text-gray-600 font-primary">
          <span>© Glowing 2022</span>
        </p>
        <div className="flex gap-5">
          <FaFacebookF className="w-6 h-6 text-primary" />
          <FaYoutube className="w-6 h-6 text-primary" />
          <FaInstagram className="w-6 h-6 text-primary" />
          <FaXTwitter className="w-6 h-6 text-primary" />
        </div>
      </div>

      {/* Center Section */}
      <div className="flex items-center justify-center">
        <p className="text-4xl font-semibold text-center uppercase text-primary font-primary">
          Glowing
        </p>
      </div>

      {/* Right Section */}
      <div className="flex sm:flex-col lg:flex-row gap-8 sm:gap-2 md:gap-2 items-center justify-between">
        <Select
          value={selectedLanguage}
          onValueChange={(value) => setLanguage(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {languages.map((language) => (
                <SelectItem key={language.id} value={language.language}>
                  {language.language}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex items-center justify-center gap-5">
          <FaCcAmex className="w-6 h-6 text-primary" />
          <FaCcVisa className="w-6 h-6 text-primary" />
          <FaCcMastercard className="w-6 h-6 text-primary" />
          <FaCcApplePay className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}

export default CopyRightSection;
