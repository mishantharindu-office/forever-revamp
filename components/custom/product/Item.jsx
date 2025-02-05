"use client";
import { Button } from "@/components/ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Item({ item }) {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push(`/product/product2?itemId=${item.id}`);
  };

  const handleAddToCart = () => {
    console.log(`Add to cart: ${item.id}`);
  };

  return (
    <div className="cursor-pointer group hover:shadow-lg rounded-lg bg-white transition-transform duration-300 ease-in-out hover:scale-105 p-4 ">
      {/* Image Container */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden rounded-lg group"
        onClick={handleBuyNow}
      >
        {/* Primary Image */}
        <Image
          alt="Primary product image"
          src={item.image_pri ?? "/image/product-01-05-400x533.jpg"}
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
          width={400}
          height={533}
        />
        {/* Secondary Image */}
        <Image
          alt="Secondary product image"
          src={item.image_sec ?? "/image/product-10-1-1-400x533.jpg"}
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
          width={400}
          height={533}
        />

        {/* Add to Cart Button */}
        {/* <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering parent click
            console.log(`Added ${item.name} to cart`);
          }}
          className="absolute items-center w-full justify-center bottom-0 left-1/2  transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white text-black transition-opacity duration-300 ease-in-out"
        >
          Add to Cart
        </button> */}
      </div>

      {/* Product Details */}
      <div className="mt-4 text-center flex flex-col justify-between">
        <p className="font-semibold font-primary">Rs. {item?.price}</p>
        <p
          className="text-sm font-primary text-gray-700 hover:text-blue-600"
          onClick={handleBuyNow}
        >
          {item?.name}
        </p>
        <div className="flex items-center justify-center gap-1 mt-2">
          {Array.from({ length: 5 }, (_, index) => (
            <StarFilledIcon
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 ${
                index < item?.rating ? "text-green-800" : "text-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="mt-2 text-sm text-gray-500 space-y-2 text-center">
          {/* <p>Pay securely with PayHere</p> */}
          <p className="text-xs text-gray-400">
            Pay with installments available for eligible cards.
          </p>
        </div>
      </div>
      {/* Payment Options */}
    </div>
  );
}

export default Item;
