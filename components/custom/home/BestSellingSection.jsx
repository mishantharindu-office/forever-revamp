import Image from "next/image";
import React, { useEffect, useState } from "react";
import Item from "../product/Item";
import { useToast } from "@/hooks/use-toast";

function BestSellingSection() {
  const [items, setItems] = useState([]);
  const { toast } = useToast();

  const fetchData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/feature/items?page=0&size=6&groupBy=CUSTOMER_FAVORITE`,
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
      <header className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-800 leading-snug">
          Customer Favorite Beauty Essentials
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          Made using clean, non-toxic ingredients, our products are designed for
          everyone.
        </p>
      </header>

      {/* <div className="grid items-center justify-center w-full grid-cols-1 gap-3 sm:grid-cols-12 ">
        <div className="grid flex-1 w-full grid-cols-1 col-span-12 gap-3 sm:col-span-7 sm:grid-cols-3">
          {items &&
            items.map((item, index) => {
              return <Item item={item} key={index} />;
            })}
        </div>
        <div className=" w-full  h-[960px] object-center flex-none overflow-hidden col-span-12 sm:col-span-5">
          <Image
            src={"/image/banner-28.jpg"}
            width={690}
            height={1153}
            className="object-cover w-auto h-full transition-all duration-200 delay-100 hover:scale-105"
            alt="image"
          ></Image>
        </div>
      </div> */}

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {itemsArr && itemsArr.length > 0 ? (
            itemsArr.map((item, index) => <Item item={item} key={index} />)
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No products available at the moment.
            </p>
          )}
        </div>
        <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
          <Image
            src="/image/banner-28.jpg"
            alt="Featured Banner"
            width={690}
            height={1153}
            className="rounded-sm object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default BestSellingSection;

const itemsArr = [
  {
    name: "Natural Coconut Cleansing Oil",
    price: "Rs.1500.00",
    image_pri: "/image/product-01-05-400x533.jpg",
    image_sec: "/image/product-01-1-1-400x533.jpg",
  },
  {
    name: "Supreme polishing Treatment",
    price: "Rs.800.00",
    image_pri: "/image/product-03-4-400x533.jpg",
    image_sec: "/image/product-03-1-1-400x533.jpg",
  },
  {
    name: "Enriched Duo",
    price: "Rs.1800.00",
    image_pri: "/image/product-11-1-1-400x533.jpg",
    image_sec: "/image/product-11-3-400x533.jpg",
  },
  {
    name: "Enriched Hand Wash",
    price: "Rs.1450.00",
    image_pri: "/image/product-12-3-400x533.jpg",
    image_sec: "/image/product-12-1-1-400x533.jpg",
  },
  {
    name: "Shield Shampoo",
    price: "Rs.1300.00",
    image_pri: "/image/product-13-4-400x533.jpg",
    image_sec: "/image/product-13-1-1-400x533.jpg",
  },
  {
    name: "Hideaway Mirror",
    price: "Rs.2500.00",
    image_pri: "/image/product-10-3-400x533.jpg",
    image_sec: "/image/product-10-1-1-400x533.jpg",
  },
];
