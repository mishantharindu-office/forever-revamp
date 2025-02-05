import Image from "next/image";
import React, { useEffect, useState } from "react";
import Item from "../product/Item";
import { useToast } from "@/hooks/use-toast";

function FeaturedSection() {
  const [items, setItems] = useState([]);
  const { toast } = useToast();

  const fetchData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/feature/items?page=0&size=6&groupBy=featured`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setItems(data?.data || []);
      } else {
        toast({
          title: "Failed to fetch Items",
          description: "Could not fetch items. Please try again later.",
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
    <section className="flex flex-col w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52">
      {/* Header Section */}
      <header className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-800 leading-snug">
          Featured Products
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          Discover our carefully curated selection of clean and non-toxic
          products, perfect for everyone.
        </p>
      </header>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Banner Image */}
        <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
          <Image
            src="/image/banner-50.jpg"
            alt="Featured Banner"
            width={690}
            height={1153}
            className="rounded-sm object-cover w-full h-full"
          />
        </div>

        {/* Product Grid */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {itemsArr && itemsArr.length > 0 ? (
            itemsArr.map((item, index) => <Item item={item} key={index} />)
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No products available at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;

const itemsArr = [
  {
    name: "Natural Coconut Cleansing Oil",
    price: "1500.00",
    image_pri: "/image/product-01-05-400x533.jpg",
    image_sec: "/image/product-01-1-1-400x533.jpg",
  },
  {
    name: "Supreme polishing Treatment",
    price: "800.00",
    image_pri: "/image/product-03-4-400x533.jpg",
    image_sec: "/image/product-03-1-1-400x533.jpg",
  },
  {
    name: "Enriched Duo",
    price: "1800.00",
    image_pri: "/image/product-11-1-1-400x533.jpg",
    image_sec: "/image/product-11-3-400x533.jpg",
  },
  {
    name: "Enriched Hand Wash",
    price: "1450.00",
    image_pri: "/image/product-12-3-400x533.jpg",
    image_sec: "/image/product-12-1-1-400x533.jpg",
  },
  {
    name: "Shield Shampoo",
    price: "1300.00",
    image_pri: "/image/product-13-4-400x533.jpg",
    image_sec: "/image/product-13-1-1-400x533.jpg",
  },
  {
    name: "Hideaway Mirror",
    price: "2500.00",
    image_pri: "/image/product-10-3-400x533.jpg",
    image_sec: "/image/product-10-1-1-400x533.jpg",
  },
];
