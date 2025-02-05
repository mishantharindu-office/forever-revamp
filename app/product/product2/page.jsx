"use client";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { truncateParagraph } from "@/lib/utils";
import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useCartStore, useLanguageStore } from "@/context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { set } from "react-hook-form";

function Product2() {
  const { data: session } = useSession();
  const { toast } = useToast();
  const { selectedLanguage } = useLanguageStore();
  const setCartRefresh = useCartStore((state) => state.setCartRefresh);
  const cartRefresh = useCartStore((state) => state.cartRefresh);
  const [data, setData] = useState();

  const searchParams = useSearchParams();
  const itemId = searchParams.get("itemId")?.toString();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [filteredColors, setFilteredColors] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [wishListItem, setWishListItem] = useState(true);

  const addItem = useCartStore((state) => state.addItem);

  const [reviews, setReviews] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);

  const [mainImage, setMainImage] = useState("/images/mt-product-11-3.jpg");
  const thumbnails = [
    "/images/mt-product-11-3.jpg",
    "/images/mt-product-11-1.jpg",
    "/images/mt-product-11-2.jpg",
  ];

  /* let { dataArr, isPlaceholderData } = useQuery({
    placeholderData: (prev) => prev,
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/api/v1/item/7`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiU1VQRVJfQURNSU4iLCJzdWIiOiJzdXBlcl9hZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3Mjg1NDQ4MDEsImV4cCI6MTcyODYzMTIwMX0.0KH9T_uQ2WYIOymNt_ouNQU3bWUaPZt3WctVo9-_Z7w`,
        },
      });
      const data = await res.json();
      return data?.data;
    },
  }); */

  const fetchData = async () => {
    try {
      await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/item/front?itemId=${itemId}&language=${selectedLanguage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.status === 200) return res.json();
        })
        .then((data) => {
          setData(data?.data);

          const defaultVariant = data?.data?.variants?.[0];

          if (defaultVariant) {
            setSelectedVariant(defaultVariant);

            const defaultSize = defaultVariant.variantOptions.find(
              (option) => option.name === "size"
            )?.value;
            setSelectedSize(defaultSize);

            const defaultColor = defaultVariant.variantOptions.find(
              (option) => option.name === "color"
            )?.value;
            setSelectedColor(defaultColor);

            const colorSet = new Set();
            data?.data?.variants.forEach((variant) => {
              const sizeOption = variant.variantOptions.find(
                (option) => option.name === "size"
              )?.value;

              if (sizeOption === defaultSize) {
                const colorOption = variant.variantOptions.find(
                  (option) => option.name === "color"
                );
                if (colorOption) {
                  colorSet.add(colorOption.value);
                }
              }
            });
            const colorsArray = Array.from(colorSet);
            setFilteredColors(colorsArray);

            console.log("Single Item Data:", data?.data);
            console.log("Variant:", defaultVariant);
          }
        });
    } catch (error) {
      console.log("Error", error);
      toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  /* useEffect(() => {
    fetchData();
  }, []); */

  const onWishList = async () => {
    console.log("itemId", itemId);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/item/wishlist/add/${itemId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (response.status === 200 || response.status === 201) {
        toast({
          title: "Added to wishlist",
          description: "Item has been added to your wishlist",
          variant: "success",
        });
      } else {
        toast({
          title: "Failed to add to wishlist",
          description: responseData?.message
            ? responseData?.message
            : "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log("Error", error);
      toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const onCart = async () => {
    console.log("selectedVariant", selectedVariant?.id);
    if (session) {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/cart/add/item",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user?.accessToken}`,
            },
            body: JSON.stringify({
              itemId: selectedVariant?.id,
              quantity: quantity,
            }),
          }
        );
        const data = await response.json();
        if (response.status === 200 || response.status === 201) {
          toast({
            title: "Item added to cart!",
            description: "Item has been added to your cart",
            variant: "success",
          });
          setCartRefresh();
        } else {
          console.log("Error", data);
          toast({
            title: "Failed to add cart",
            description: data?.message ? data?.message : "Something went wrong",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.log("Error", error);
        toast({
          title: "Network error",
          description: "Could not connect to server. Please try again later.",
          variant: "destructive",
        });
      }
    } else {
      addItem({
        item: selectedVariant,
        quantity: quantity,
      });
      toast({
        title: "Item added to cart!",
        description: "Item has been added to your cart",
        variant: "success",
      });
    }
  };

  const fetchReviewData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/item/review/front/all?itemId=${itemId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setReviews(data?.data || []);
      } else {
        console.log("Failed to fetch review data");
        /* toast({
            title: "Failed to fetch Languages",
            description: "Could not fetch languages. Please try again later.",
            variant: "destructive",
          }); */
      }
    } catch (error) {
      console.error("Error fetching review data:", error);
      /* toast({
          title: "Network error",
          description: "Could not connect to server. Please try again later.",
          variant: "destructive",
        }); */
    }
  };

  /* useEffect(() => {
    fetchReviewData();
  }, []); */

  const fetchRelatedItems = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/feature/items?page=0&size=6&groupBy=related`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setRelatedItems(data?.data || []);
      } else {
        console.log("Failed to fetch related items");
        /* toast({
            title: "Failed to fetch Items",
            description: "Could not fetch items. Please try again later.",
            variant: "destructive",
          }); */
      }
    } catch (error) {
      console.error("Error fetching related items:", error);
      /* toast({
          title: "Network error",
          description: "Could not connect to server. Please try again later.",
          variant: "destructive",
        }); */
    }
  };

  useEffect(() => {
    fetchData();
    fetchReviewData();
    fetchRelatedItems();
  }, [selectedLanguage]);

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedVariant(
      data.variants.find((variant) =>
        variant.variantOptions.some(
          (option) => option.name === "size" && option.value === size
        )
      )
    );
    setSelectedSize(size);
    const matchingVariants = data.variants.filter((variant) =>
      variant.variantOptions.some(
        (option) => option.name === "size" && option.value === size
      )
    );
    const colorSet = new Set();
    matchingVariants.forEach((variant) => {
      const colorOption = variant.variantOptions.find(
        (option) => option.name === "color"
      );
      if (colorOption) {
        colorSet.add(colorOption.value);
      }
    });
    const colorsArray = Array.from(colorSet);
    setFilteredColors(colorsArray);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);

    const matchingVariant = data.variants.find(
      (variant) =>
        variant.variantOptions.some(
          (option) => option.name === "size" && option.value === selectedSize
        ) &&
        variant.variantOptions.some(
          (option) => option.name === "color" && option.value === color
        )
    );

    if (matchingVariant) {
      setSelectedVariant(matchingVariant);
    } else {
      setSelectedVariant(null);
    }
  };

  function formatDate(isoDateString) {
    const date = new Date(isoDateString); // Parse the ISO date string
    const options = { year: "numeric", month: "long", day: "numeric" }; // Formatting options
    return new Intl.DateTimeFormat("en-US", options).format(date); // Format the date
  }

  //console.log("selectedVariant", selectedVariant?.id);
  //console.log("selectedColor", selectedColor);
  //console.log("filteredColors", filteredColors);
  //console.log("reviews", reviews);
  //console.log("item", data);
  //console.log("language", selectedLanguage);

  return (
    <>
      {/* Product Images */}
      <section className="relative w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52 h-auto pb-10 pt-40 bg-white text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:gap-12">
          {/* inset-inline-start: Main product image and thumbnails */}
          <div className="flex flex-row md:flex-col items-start max-h-[720px]">
            {/* Main Image */}
            <div className="w-full h-full max-h-[600px] overflow-hidden">
              <img
                src={mainImage}
                alt="Main Product Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex flex-col md:flex-row md:mt-4 md:space-x-4">
              {thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-[100px] h-[134px] object-cover border border-gray-300 cursor-pointer ${
                    mainImage === thumbnail ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(thumbnail)}
                />
              ))}
            </div>
          </div>

          {/* inset-inline-end: Product details */}
          <div className="flex flex-col text-left">
            <div className="text-xl text-black mt-2 font-medium">
              {selectedVariant?.isDiscounted ? (
                <>
                  Rs.{" "}
                  {(
                    selectedVariant.price -
                    (selectedVariant.price * selectedVariant.discount) / 100
                  ).toFixed(2)}{" "}
                  <span className="line-through text-gray-500 ml-2">
                    Rs. {selectedVariant.price}.00
                  </span>
                </>
              ) : (
                <>Rs. {selectedVariant?.price}</>
              )}

              {/* Discount Label */}
              {selectedVariant?.isDiscounted && (
                <span className="text-white text-sm font-semibold bg-green-900 rounded px-4 py-1 ml-5 items-center">
                  {selectedVariant?.discount}%
                </span>
              )}
            </div>

            <h1 className="text-3xl font-semibold mt-3">{data?.name}</h1>

            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }).map((_, index) =>
                index < data?.rating ? (
                  <StarFilledIcon
                    key={index}
                    className="w-4 h-4 text-green-800"
                  />
                ) : (
                  <StarFilledIcon
                    key={index}
                    className="w-4 h-4 text-gray-300"
                  />
                )
              )}
              <p className="text-gray-500 ml-2">
                | ({data?.ratingCount}{" "}
                {data?.ratingCount === 1
                  ? "customer review"
                  : "customer reviews"}
                )
              </p>
            </div>

            {/* Product Description */}
            <p className="text-gray-500 mt-4">
              {truncateParagraph(data?.description, 100)}
            </p>

            {/* Product Variable  */}
            <div className="space-y-4 my-5">
              {/* Size Selection */}
              <div className="flex items-center justify-between">
                <label
                  htmlFor="size"
                  className="text-base font-medium w-1/5 flex items-center"
                >
                  Size
                </label>
                <select
                  id="size"
                  value={
                    selectedSize ||
                    data?.variants?.[0]?.variantOptions?.find(
                      (option) => option.name === "size"
                    )?.value ||
                    ""
                  } // Default to the first variant's size
                  onChange={handleSizeChange}
                  className="border border-gray-100 px-4 py-2 w-4/5"
                  disabled={!data?.variants?.length}
                >
                  <option value="" disabled>
                    {data?.variants?.length > 0
                      ? "Choose a size"
                      : "No sizes available"}
                  </option>
                  {[
                    ...new Set(
                      data?.variants
                        ?.map(
                          (variant) =>
                            variant.variantOptions.find(
                              (option) => option.name === "size"
                            )?.value
                        )
                        .filter(Boolean)
                    ),
                  ].map((sizeOption, index) => (
                    <option key={index} value={sizeOption}>
                      {sizeOption}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Selection */}
              <div className="flex items-center">
                <label
                  htmlFor="color"
                  className="text-base font-medium w-1/5 flex items-center"
                >
                  Color
                </label>
                <select
                  id="color"
                  value={selectedColor || ""}
                  onChange={handleColorChange}
                  className="border border-gray-100 px-4 py-2 w-4/5"
                  disabled={filteredColors.length === 0}
                >
                  <option value="" disabled>
                    {filteredColors.length > 0
                      ? "Choose a color"
                      : "No colors available"}
                  </option>
                  {filteredColors.map((color, index) => (
                    <option key={index} value={color}>
                      {color.toString().toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6">
              <p className="text-black font-medium mb-4">Quantity</p>
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center justify-start w-2/5">
                  <button
                    className="bg-gray-300 text-black font-semibold hover:bg-gray-400 p-2 rounded-sm"
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  >
                    <HiMiniMinus className="w-4 h-4" />
                  </button>
                  <span className="text-center bg-gray-100 text-lg font-semibold flex px-2 mx-1 w-10 items-center justify-center">
                    {quantity}
                  </span>
                  <button
                    className="bg-gray-300 text-black font-semibold hover:bg-gray-400 p-2 rounded-sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <HiMiniPlus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  className="p-2 rounded-sm bg-black text-white text-lg font-semibold hover:bg-gray-800 w-3/5"
                  onClick={() => {
                    onCart();
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Wishlist and Sharing Options */}
            <div className="flex items-center mt-4">
              <button
                disabled={!session}
                className="text-gray-500 hover:text-black flex items-center space-x-2"
                onClick={() => {
                  onWishList();
                }}
              >
                <StarFilledIcon
                  className={`w-4 h-4 ${
                    wishListItem ? "text-red-500" : "text-gray-500"
                  }`}
                />{" "}
                <span>Add to wishlist</span>
              </button>
              <span className="mx-4">|</span>
              <button className="text-gray-500 hover:text-black">Share</button>
            </div>

            {/* Product Info: SKU, Category, Tags */}
            <div className="mt-8 text-gray-600">
              <span className="block mb-2">
                <label className="inline-block min-w-[100px] text-black text-sm font-medium">
                  SKU:{" "}
                </label>
                <span className="text-sm font-normal text-gray-500">
                  {selectedVariant?.variantSKU || "N/A"}
                </span>
              </span>
              <span className="block mb-2">
                <label className="inline-block min-w-[100px] text-black text-sm font-medium">
                  Category:{" "}
                </label>
                <span className="text-sm font-normal text-gray-500">
                  {data?.categories.length > 0
                    ? data.categories.map((cat) => cat.subCategory).join(", ")
                    : "N/A"}
                </span>
              </span>
              <span className="block mb-2">
                <label className="inline-block min-w-[100px] text-black text-sm font-medium">
                  Tags:{" "}
                </label>
                <span className="text-sm font-normal text-gray-500">
                  Coffee Bean, Eye Cream, Healthy
                </span>
              </span>
            </div>

            {/* Social Sharing Buttons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-black">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <i className="fab fa-tumblr"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52 py-10 bg-white">
        {/* Product Description */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </div>

        {/* Additional Information */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Additional Information
          </h2>
          {data?.properties?.map((property, index) => (
            <p key={index} className="text-gray-600">
              {property.propertyName}: {property.value}
            </p>
          ))}
        </div>

        {/* Reviews Section */}
        <div className="border-b-2 border-gray-200">
          {/* <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Reviews
          </h2> */}
          <div className="mb-12 border-gray-200">
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
                375: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
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
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="flex items-start space-x-4">
                    <img
                      className="w-16 h-16 rounded-full"
                      src="/images/banner-mt-01.jpg"
                      alt="Reviewer"
                    />
                    <div>
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`${
                              index < review.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            } text-base`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="font-medium text-gray-800">{review.user}</p>
                      <p className="text-sm text-gray-500">
                        {formatDate(review.createdAt)}
                      </p>
                      <p className="mt-2 text-gray-600">{review.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Add a Review */}
          {/* <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Add a Review
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Your Rating *
                </label>
                <div className="flex space-x-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      className="text-yellow-500 text-2xl hover:scale-110 transition-transform duration-200"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Your Review *
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  rows="5"
                  placeholder="Write your review here..."
                  required
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label className="block text-gray-800 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="block text-gray-800 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </section>

      {/* Related Product */}
      <section className="relative w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52 h-auto pb-10 pt-10 bg-white text-center">
        <h2 className="text-4xl text-black font-bold my-5">Related products</h2>
        <div className="my-12">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-7">
            {/* Card 1 */}
            <div className="relative pb-5 text-center">
              <img
                src="/images/product-03.jpg"
                alt="Autumn Skincare"
                className="w-full h-[350px] object-cover"
              />

              {/* Discount */}
              <div className="absolute w-[60px] top-3 left-3 py-1 px-4 bg-green-900 rounded">
                <span className="text-white text-sm font-semibold">3%</span>
              </div>

              <div className="relative py-2 mb-5 text-black text-center">
                {/* Prices */}
                <div className="mb-2">
                  <span className="text-gray-500 line-through mr-2">
                    $25.00
                  </span>
                  <span className="text-black font-bold">$23.00</span>
                </div>
                {/* Product deatils */}
                <p className="font-normal text-base">
                  Supreme Polishing Treatment
                </p>
                <div className="text-green-900">★★★★★</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative pb-5 text-center">
              <img
                src="/images/product-04.jpg"
                alt="Autumn Skincare"
                className="w-full h-[350px] object-cover"
              />

              <div className="relative py-2 mb-5 text-black">
                {/* Prices */}
                <div className="mb-2">
                  <span className="text-black font-bold mr-2">$25.00</span>
                  <span className="text-black font-bold">$23.00</span>
                </div>
                <p className="font-normal text-base">
                  Supreme Polishing Treatment
                </p>
                <div className="text-green-900">★★★★★</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative pb-5 text-center">
              <img
                src="/images/product-13.jpg"
                alt="Autumn Skincare"
                className="w-full h-[350px] object-cover"
              />
              <div className="relative py-2 mb-5 text-black">
                <h3 className="text-base font-semibold">$45.00</h3>
                <p className="font-normal text-base">
                  Supreme Polishing Treatment
                </p>
                <div className="text-green-900">★★★★★</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative pb-5 text-center">
              <img
                src="/images/product-16.jpg"
                alt="Autumn Skincare"
                className="w-full h-[350px] object-cover"
              />
              <div className="relative py-2 mb-5 text-black">
                <h3 className="text-base font-semibold">$45.00</h3>
                <p className="font-normal text-base">
                  Supreme Polishing Treatment
                </p>
                <div className="text-green-900">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product2;
