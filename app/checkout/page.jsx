"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartStore } from "@/context";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";

function checkout() {
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const [cart, setCart] = useState();
  const setCartRefresh = useCartStore((state) => state.setCartRefresh);
  const [couponToggle, setCouponToggle] = useState(false);
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Sri Lanka",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "Colombo",
    zipCode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });

  const [price, setPrice] = useState({
    total: 0,
    subtotal: 0,
  });

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
  }, [session]);

  const handleDiscount = async (code) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/couponcode/redeem?code=${code}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const discount = data?.data?.discount;
        const discountedTotal =
          price.subtotal - (price.subtotal * discount) / 100;
        setPrice((prevPrice) => ({
          ...prevPrice,
          total: discountedTotal,
        }));
        setDiscount(discount);
        setIsDiscounted(true);
        toast({
          title: "Coupon applied",
          description: "Coupon applied successfully",
          variant: "success",
        });
        if (price.subtotal > 0) {
          setPrice({
            ...price,
            total: price.subtotal - price.subtotal * (discount / 100),
          });
        }
      } else {
        toast({
          title: "Coupon not applied",
          description: "Coupon not applied. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Discount Error", error);
      toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const placeOrder = async () => {
    setLoading(true);
    const payload = {
      userId: session?.user?.userId,
      token: session && `Bearer ${session?.user?.accessToken}`,
      name: formData.firstName + " " + formData.lastName,
      companyName: formData.companyName,
      country: formData.country,
      streetAddress: formData.streetAddress,
      apartment: formData.apartment,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      phone: formData.phone,
      email: formData.email,
      notes: formData.orderNotes,
      cartId: cart?.id,
      items: cart?.items.map((item) => ({
        itemId: item.variantId,
        quantity: item.quantity,
      })),
      paymentMethod: paymentMethod,
      shippingMethod: "Home Delivery",
      billingAddress: formData.streetAddress,
      shippingAddress: formData.streetAddress,
      couponCode: couponCode,
      currency: "LKR",
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date().toISOString(),
      tax: 0,
      discount: discount,
      totalAmount: price.total,
      invoice: {
        invoiceDate: new Date().toISOString(),
        paymentDate: new Date().toISOString(),
        paymentMethod: paymentMethod,
        billingAddress: formData.streetAddress,
        mailTo: formData.email,
      },
    };
    try {
      const orderResponse = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/order/make/complete`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      if (orderResponse.ok) {
        const data = await orderResponse.json();
        console.log("Order placed successfully", data);
        if (paymentMethod === "PAYHERE") {
          payHerePayment(data?.data?.orderId, data?.data?.totalAmount);
        }
        toast({
          title: "Your order has been placed",
          description: "Complete your payment!",
          variant: "success",
        });
        setLoading(false);
        setCartRefresh();
        router.push("/");
      } else {
        console.error("Failed to place order", orderResponse);
        toast({
          title: "Order not placed",
          description: "Order not placed. Please try again later.",
          variant: "destructive",
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("Network error while placing order", error);
      toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const payHerePayment = async (id, total) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/order/auth/calculateHash?orderId=${id}&amount=${total}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        console.log("auth/calculateHashdata", data?.data);
        payhere.startPayment({
          sandbox: true,
          merchant_id: "1220944",
          return_url: "/",
          cancel_url: "/checkout",
          notify_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order/payment/notify/response`,
          order_id: data?.data?.orderId,
          items: cart?.items.map((item) => item.item + " " + item.variantSKU),
          amount: data?.data.amount,
          currency: "LKR",
          hash: data?.data.hash,
          first_name: formData?.firstName,
          last_name: formData?.lastName,
          email: formData?.email,
          phone: formData?.phone,
          address: formData?.streetAddress,
          city: formData?.city,
          country: formData?.country,
        });
      } else {
        console.log("Error", data);
        toast({
          title: "Payment Failed",
          description: "Payment Failed. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("PaymentError", error);
      toast({
        title: "Network error",
        description: "Could not connect to server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative w-full md:w-full lg:w-3/4 h-auto mx-auto pb-20 pt-32 lg:px-5 bg-white text-left">
      <div className="min-h-screen bg-white pb-12">
        <div className="container mx-auto px-4 xl:px-20">
          <h1 className="text-3xl font-semibold mb-8 text-center p-10">
            Checkout
          </h1>
          <p className="text-base font-normal py-5">
            Have a coupon?{" "}
            <span
              className="font-semibold underline"
              onClick={() => setCouponToggle(!couponToggle)}
            >
              Click here
            </span>{" "}
            to enter your code
          </p>
          {couponToggle && (
            <div className="flex items-start pb-4">
              <Input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon code"
                className="p-2 border border-gray-300 bg-gray-100 text-black mr-2"
              />
              <Button
                className="bg-black text-white font-semibold px-10 py-2"
                onClick={() => handleDiscount(couponCode)}
              >
                Apply Coupon
              </Button>
            </div>
          )}
          {/* Billing Details and Order Summary */}
          <div className="flex justify-between xl:space-x-10">
            {/* Billing Details Form */}
            <div className="relative w-full lg:w-3/5 pr-10">
              <h2 className="text-2xl font-medium mb-5">Billing details</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-100 p-2 h-[45px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-100 p-2 h-[45px] "
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    Company Name (optional)
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-100 p-2 h-[45px] "
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    Country / Region *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-100 p-2 h-[45px] font-normal"
                  >
                    <option>United States (US)</option>
                    {/* Add more country options */}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className="mt-1 mb-5 block w-full bg-gray-100 p-2 h-[45px] "
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-100 p-2 h-[45px] "
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    Town / City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-100 p-2 h-[45px] "
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    State *
                  </label>
                  <select className="mt-1 block w-full bg-gray-100 p-2 h-[45px] ">
                    <option>California</option>
                    {/* Add more state options if needed */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-100 p-2 h-[45px] "
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    Phone *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-100 p-2 h-[45px] "
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-gray-100 p-2 h-[45px] "
                  />
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-2xl font-medium mb-5">
                    Additional Information
                  </h2>
                  <label className="block text-sm font-normal text-gray-700 uppercase mb-4">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    className="mt-1 block w-full bg-gray-100 p-2 h-[150px] "
                    rows="4"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="relative w-full lg:w-2/5 ">
              <div className="p-6 py-8 shadow-lg">
                <h2 className="text-lg font-medium mb-4">Your order</h2>
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="text-sm font-medium text-gray-700 pb-4">
                        Product
                      </th>
                      <th className="text-sm font-medium text-gray-700 pb-4 text-right">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.items.length > 0 &&
                      cart?.items.map((item, index) => (
                        <tr
                          key={index}
                          className={`${
                            item.isOutOfStock ? "line-through" : ""
                          }`}
                        >
                          <td className="text-gray-700 py-2">
                            {item.item}-{item.variantSKU} × {item.quantity}
                          </td>
                          <td className="text-gray-700 py-2 text-right">
                            Rs.{item.variantPrice * item.quantity}.00
                          </td>
                        </tr>
                      ))}
                    {isDiscounted && (
                      <tr className="border border-gray-200 border-l-0 border-r-0">
                        <td className="font-medium text-gray-900 py-3">
                          Discount
                        </td>
                        <td className="font-medium text-gray-900 text-right">
                          {discount}%
                        </td>
                      </tr>
                    )}
                    <tr className="border border-gray-200 border-l-0 border-r-0 border-t-0">
                      <td className="font-medium text-gray-900 pt-4 pb-5 text-lg">
                        Total
                      </td>
                      <td className="font-medium text-lg text-gray-900 pt-4 pb-5 text-right">
                        Rs.{price.total}.00
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex flex-col mt-4 gap-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="payhere"
                      name="paymentMethod"
                      value="PAYHERE"
                      onChange={() => setPaymentMethod("PAYHERE")}
                      className="form-radio"
                    />
                    <label
                      htmlFor="payhere"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Pay Here
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="COD"
                      onChange={() => setPaymentMethod("COD")}
                      className="form-radio"
                    />
                    <label
                      htmlFor="cod"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-base font-normal text-gray-500">
                    Sorry, it seems that there are no available payment methods
                    for your state. Please contact us if you require assistance
                    or wish to make alternate arrangements.
                  </p>
                </div>

                <button
                  disabled={loading}
                  className="w-full py-3 mt-6 bg-black text-white text-lg font-semibold hover:bg-gray-800 items-center justify-center flex"
                  onClick={placeOrder}
                >
                  {loading ? (
                    <FaSpinner className="animate-spin mr-2" />
                  ) : (
                    "Place Order"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkout;
