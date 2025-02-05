"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa";
import { useCartStore } from "@/context";

function cart() {
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const [cart, setCart] = useState();
  const [cartData, setcartData] = useState([]);
  const [updatedCart, setUpdatedCart] = useState([]);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [price, setPrice] = useState({
    total: 0,
    subtotal: 0,
  });
  const setCartRefresh = useCartStore((state) => state.setCartRefresh);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL +
            `/cart/user/items?userId=${session?.user?.userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user?.accessToken}`,
            },
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log("data", data?.data);
          setCart(data?.data);
          setcartData(data?.data?.items);
          const simplifiedCart = data?.data?.items.map((item) => ({
            itemId: item.variantId,
            quantity: item.quantity,
          }));
          setUpdatedCart(simplifiedCart);
          setPrice({
            total: data?.data?.total,
            subtotal: data?.data?.total,
          });
        } else {
          console.log("Error", data);
          toast({
            title: "Failed to fetch cart",
            description: "Could not fetch cart. Please try again later.",
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
    if (session) {
      fetchData();
    } else {
      console.log("localCart");
    }
  }, [session, updateLoading]);

  const updateCart = (id, command) => {
    const updatedCartData = cartData
      .map((item) => {
        if (item.variantId === id) {
          if (command === "increase") {
            return {
              ...item,
              quantity: item.quantity + 1,
              total: item.variantPrice * (item.quantity + 1),
            };
          } else if (command === "decrease" && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              total: item.variantPrice * (item.quantity - 1),
            };
          }
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove item if quantity is zero

    setcartData(updatedCartData);

    const simplifiedCart = updatedCartData.map((item) => ({
      itemId: item.variantId,
      quantity: item.quantity,
    }));
    setUpdatedCart(simplifiedCart);
  };

  const removeItem = (index) => {
    const updatedCartData = [...cartData];
    updatedCartData.splice(index, 1);
    setcartData(updatedCartData);
    const simplifiedCart = updatedCartData.map((item) => ({
      itemId: item.variantId,
      quantity: item.quantity,
    }));
    setUpdatedCart(simplifiedCart);
  };

  const onUpdateCart = async () => {
    setUpdateLoading(true);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/cart/update/${cart?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          body: JSON.stringify(updatedCart),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("updatedCartData", data);

        if (Array.isArray(data?.errors) && data.errors.length > 0) {
          data.errors.forEach((error) => {
            toast({
              title: "Cart Update Failed",
              description:
                error?.message || error?.itemError || "Unknown error occurred.",
              variant: "destructive",
            });
          });
        }

        toast({
          title: "Cart Updated",
          description: "Cart has been updated successfully.",
          variant: "success",
        });

        setCartRefresh();
      } else {
        toast({
          title: "Failed to Update Cart",
          description:
            data?.message || "Could not update cart. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error", error);
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setUpdateLoading(false);
    }
  };

  return (
    <div className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-20 pt-32 px-5 bg-white text-center">
      <div className="container mx-auto p-8">
        {/* Cart Table */}
        <table className="w-full border-collapse border border-gray-200 mb-8">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-center">PRODUCT</th>
              <th className="p-4 text-center">PRICE</th>
              <th className="p-4 text-center">QUANTITY</th>
              <th className="p-4 text-center">SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {/* Cart Item 2 */}
            {cartData?.map((item, index) => (
              <tr
                key={index}
                className={`border-b font-semibold ${
                  item.isOutOfStock ? "text-gray-400 bg-gray-100" : ""
                }`}
              >
                <td className="p-4 flex items-center">
                  <button
                    className="text-red-500 mr-4"
                    onClick={() => {
                      removeItem(index);
                    }}
                  >
                    &times;
                  </button>
                  <Image
                    width={100}
                    height={100}
                    src={
                      item?.images.length > 0
                        ? item?.images[0]?.image
                        : "/default.png"
                    }
                    alt="Product Image"
                    className={`w-24 h-28 mr-4 ${
                      item.isOutOfStock ? "filter blur-sm" : ""
                    }`}
                  />
                  <div className="flex flex-col w-full items-start">
                    {item?.item}
                    <div className="flex gap-2">
                      <span className="text-xs">{item?.variantSKU}</span>
                      {item.limitedStock && (
                        <span className="text-xs text-red-500">
                          Limited Stock
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="p-4 text-center">Rs.{item?.variantPrice}.00</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-start w-2/5">
                    <button
                      disabled={item.isOutOfStock}
                      className="bg-gray-300 text-black font-semibold hover:bg-gray-400 p-2 rounded-sm"
                      onClick={() => updateCart(item.variantId, "decrease")}
                    >
                      <HiMiniMinus className="w-4 h-4" />
                    </button>
                    <span className="mx-4">{item?.quantity}</span>
                    <button
                      disabled={item.isOutOfStock}
                      className="bg-gray-300 text-black font-semibold hover:bg-gray-400 p-2 rounded-sm"
                      onClick={() => updateCart(item.variantId, "increase")}
                    >
                      <HiMiniPlus className="w-4 h-4" />
                    </button>
                  </div>
                </td>
                <td className="p-4">Rs.{item?.total}.00</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon and Update Cart Row */}
        <div className="flex items-end">
          <Button
            disabled={updateLoading}
            className=""
            type="button"
            onClick={onUpdateCart}
            variant="outline"
          >
            {updateLoading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              "Update Cart"
            )}
          </Button>
        </div>

        <div className="flex justify-end items-center">
          {/* Right side - Cart Totals */}
          <div className="w-full lg:w-1/3 mt-10 lg:mt-20 ml-0">
            <div className="shadow-xl p-6">
              <h2 className="text-lg font-bold">Cart totals</h2>
              <div className="flex justify-between items-center mt-4">
                <span>Subtotal</span>
                <span>Rs.{price.subtotal}.00</span>
              </div>
              <div className="flex justify-between items-center mt-4 font-bold">
                <span>Total</span>
                <span>Rs.{price.total}.00</span>
              </div>
              <Button
                className="bg-black text-white w-full mt-6 py-3 font-semibold"
                onClick={() => router.push(`/checkout`)}
              >
                Proceed To Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cart;
