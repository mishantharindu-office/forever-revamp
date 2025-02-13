"use client";

import Image from "next/image";
import { FaShoppingBag, FaRegHeart } from "react-icons/fa";

const products = [
    {
        id: 1,
        name: "FAIR & BEAUTY FAIRNESS CREAM",
        category: "Face Cream",
        rating: 5,
        reviews: 0,
        weight: "25g",
        price: 260,
        image: "/assets/image/fair-and-beauty-1.jpg",  // Update with actual paths
    },
    {
        id: 2,
        name: "VENIVEL 5 MINUTES CLEAN UP",
        category: "Packs & Scrub",
        rating: 5,
        reviews: 0,
        weight: "60g",
        price: 630,
        image: "/assets/image/22-venivel-5-minute-cleanup.png",
    },
    {
        id: 3,
        name: "ALOE LAVENDER MOISTURISING CREAM",
        category: "Face Cream",
        rating: 5,
        reviews: 0,
        weight: "60g",
        price: 430,
        image: "/assets/image/Aloe-Moisturizing-Cream-main.jpg",
    },
    {
        id: 4,
        name: "CUCUMBER CLEANSER",
        category: "Cleanser & Toner",
        rating: 5,
        reviews: 0,
        weight: "100g",
        price: 420,
        image: "/assets/image/26-Cucumber-Cleansing-Milk.png",
    },
];

function RelatedProducts() {
    return (
        <section className="mx-auto py-10 w-10/12">
            {/* Section Title */}
            <h2 className="mb-10 pb-7 font-['Recoleta'] font-bold text-green-900 text-md text-primary text-4xl text-center">
                Related Products
            </h2>

            {/* Product Grid */}
            <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <div key={product.id} className="relative flex flex-col justify-start content-center bg-mint hover:shadow-md fill-current md:max-w-[250px] min-h-9 text-mint transition-all duration-200 delay-200 cursor-pointer">
                        {/* Product Image */}
                        <div className="">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={250}
                                height={350}
                                className="bg-cover max-w-full max-h-none"
                            />
                        </div>

                        <div className="mt-2 pl-2">
                            {/* Product Name */}
                            <h3 className="font-bold text-green-900 text-lg">
                                {product.name}
                            </h3>

                            {/* Category */}
                            <p className="mb-2 text-gray-600 text-sm">{product.category}</p>
                        </div>



                        <div className="flex flex-col justify-end pb-2 pl-2 h-full">
                            {/* Rating */}
                            <div className="flex justify-start items-center mb-2">
                                <span className="mr-1 font-bold text-sm">{product.rating}/0</span>
                                {Array(5).fill(0).map((_, i) => (
                                    <span key={i} className="text-gray-400 text-lg">★</span>
                                ))}
                            </div>

                            {/* Product Weight */}
                            <p className="mb-2 text-gray-600 text-sm">From {product.weight}</p>

                            {/* Price */}
                            <p className="mb-4 font-bold text-green-900 text-xl">
                                Rs.{product.price}.00
                            </p>

                            {/* Add to Bag & Wishlist Buttons */}
                            <div className="flex items-center">
                                <button className="flex items-center bg-green-900 hover:bg-green-800 px-4 py-2 rounded-none font-medium text-white text-sm transition">
                                    <FaShoppingBag className="mr-2" /> Add To Bag
                                </button>
                                <button className="ml-4 text-primary hover:text-pink-600 transition-all duration-100 delay-100 cursor-pointer">
                                    <FaRegHeart />
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default RelatedProducts;
