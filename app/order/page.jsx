"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

const Order = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const [status, setStatus] = useState(0);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [setselectedOrder, setSetselectedOrder] = useState();

  const fetchOrdersData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/profile/orders?status=${status}&page=${page}&size=${size}&userId=${session?.user?.userId}`,
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
        console.log("userOrders", data?.data);
        setOrders(data?.data?.list);
      } else {
        console.log("Error", data);
        toast({
          title: "Failed to fetch orders",
          description: "Could not fetch orders. Please try again later.",
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

  useEffect(() => {
    fetchOrdersData();
  }, [session, status]);

  const handleCancelOrder = async (id) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/profile/orders/cancel?orderId=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Order Cancelled",
          description: "Order has been cancelled successfully.",
          variant: "success",
        });
        fetchOrdersData();
      } else {
        toast({
          title: "Failed to Cancel Order",
          description:
            data?.message || "Could not cancel order. Please try again later.",
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
    }
  };

  const statusColors = {
    Pending: "text-yellow-500",
    Accepted: "text-green-500",
    Cancelled: "text-red-500",
    Shipped: "text-blue-500",
  };

  function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  return (
    <>
      <section className="relative w-full mt-20 h-auto sm:px-5 mx-auto bg-white md:w-full lg:w-4/5 group py-10">
        <div className="h-auto mt-10 flex justify-center px-4 sm:px-6 lg:px-8">
          <div className=" w-full">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-semibold">My Orders</h1>
            </div>
            <Tabs defaultValue="recentOrders" className="w-full h-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger
                  value="recentOrders"
                  onClick={() => {
                    setSize(5);
                    setPage(0);
                    setStatus(0);
                  }}
                >
                  Recent Orders
                </TabsTrigger>
                <TabsTrigger
                  value="pending"
                  onClick={() => {
                    setSize(10);
                    setStatus(6);
                  }}
                >
                  Pending
                </TabsTrigger>
                <TabsTrigger
                  value="processing"
                  onClick={() => {
                    setSize(10);
                    setStatus(7);
                  }}
                >
                  Processing
                </TabsTrigger>
                <TabsTrigger
                  value="shipped"
                  onClick={() => {
                    setSize(10);
                    setStatus(8);
                  }}
                >
                  Shipped
                </TabsTrigger>
              </TabsList>
              <TabsContent value="recentOrders">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>
                      Here are your recent orders.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Accordion type="single" collapsible className="w-full">
                      {orders.length > 0 &&
                        orders.map((order, index) => (
                          <AccordionItem
                            key={index}
                            value={order?.trackingNumber}
                          >
                            <AccordionTrigger className="w-full flex justify-between items-center">
                              <p className="">{order?.trackingNumber}</p>
                              <p className="text-xs font-primary text-gray-500 no-underline">
                                {formatDate(order.createdAt)}
                              </p>
                              <p className="">Rs.{order?.totalAmount}.00</p>
                              <p
                                className={` ${
                                  statusColors[order.status] || "text-gray-500"
                                }`}
                              >
                                {order.status}
                              </p>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2">
                              {order.items.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center justify-center gap-2">
                                    <div className="border border-gray-300">
                                      <Image
                                        src={item?.images[0]?.image}
                                        width={100}
                                        height={100}
                                        alt="Image"
                                      />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-600 font-primary ml-3">
                                      {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500 font-primary">
                                      - {item.variantSKU} x {item.quantity}
                                    </p>
                                  </div>
                                  <p className="text-sm font-semibold text-gray-600 font-primary">
                                    Rs.{item.price * item.quantity}.00
                                  </p>
                                </div>
                              ))}
                              <div className="flex w-full items-end justify-end">
                                <p className="text-sm font-semibold text-gray-600 font-primary">
                                  Total: Rs.{order?.totalAmount}.00
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="pending">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending</CardTitle>
                    <CardDescription>
                      Here are your pending orders. You can cancel them here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Accordion type="single" collapsible className="w-full">
                      {orders.length > 0 &&
                        orders.map((order, index) => (
                          <AccordionItem
                            key={index}
                            value={order?.trackingNumber}
                          >
                            <AccordionTrigger className="w-full flex justify-between items-center">
                              <p className="">{order?.trackingNumber}</p>
                              <p className="text-xs font-primary text-gray-500 no-underline">
                                {formatDate(order.createdAt)}
                              </p>
                              <p className="">Rs.{order?.totalAmount}.00</p>
                              <p
                                className={` ${
                                  statusColors[order.status] || "text-gray-500"
                                }`}
                              >
                                {order.status}
                              </p>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2">
                              {order.items.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center justify-center gap-2">
                                    <div className="border border-gray-300">
                                      <Image
                                        src={item?.images[0]?.image}
                                        width={100}
                                        height={100}
                                        alt="Image"
                                      />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-600 font-primary ml-3">
                                      {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500 font-primary">
                                      - {item.variantSKU} x {item.quantity}
                                    </p>
                                  </div>
                                  <p className="text-sm font-semibold text-gray-600 font-primary">
                                    Rs.{item.price * item.quantity}.00
                                  </p>
                                </div>
                              ))}
                              <div className="flex w-full items-center justify-between">
                                <Dialog>
                                  <DialogTrigger>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="hover:bg-red-500 hover:text-white border-red-500"
                                    >
                                      Cancel Order
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>
                                        Are you absolutely sure?
                                      </DialogTitle>
                                      <DialogDescription>
                                        This action cannot be undone. This will
                                        permanently cancel the order.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter className="sm:justify-start">
                                      <div className=" flex w-full items-center justify-between">
                                        <DialogClose asChild>
                                          <Button variant="default" size="sm">
                                            Close
                                          </Button>
                                        </DialogClose>
                                        <Button
                                          variant="destructive"
                                          size="sm"
                                          onClick={() =>
                                            handleCancelOrder(order?._id)
                                          }
                                        >
                                          Confirm
                                        </Button>
                                      </div>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                                <p className="text-sm font-semibold text-gray-600 font-primary">
                                  Total: Rs.{order?.totalAmount}.00
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="processing">
                <Card>
                  <CardHeader>
                    <CardTitle>Processing</CardTitle>
                    <CardDescription>
                      Here are your processing orders. Check your order status.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Accordion type="single" collapsible className="w-full">
                      {orders.length > 0 &&
                        orders.map((order, index) => (
                          <AccordionItem
                            key={index}
                            value={order?.trackingNumber}
                          >
                            <AccordionTrigger className="w-full flex justify-between items-center">
                              <p className="">{order?.trackingNumber}</p>
                              <p className="text-xs font-primary text-gray-500 no-underline">
                                {formatDate(order.createdAt)}
                              </p>
                              <p className="">Rs.{order?.totalAmount}.00</p>
                              <p className="text-green-500">{order.status}</p>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2">
                              {order.items.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center justify-center gap-2">
                                    <div className="border border-gray-300">
                                      <Image
                                        src={item?.images[0]?.image}
                                        width={100}
                                        height={100}
                                        alt="Image"
                                      />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-600 font-primary ml-3">
                                      {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500 font-primary">
                                      - {item.variantSKU} x {item.quantity}
                                    </p>
                                  </div>
                                  <p className="text-sm font-semibold text-gray-600 font-primary">
                                    Rs.{item.price * item.quantity}.00
                                  </p>
                                </div>
                              ))}
                              <div className="flex w-full items-end justify-end">
                                <p className="text-sm font-semibold text-gray-600 font-primary">
                                  Total: Rs.{order?.totalAmount}.00
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="shipped">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipped Orders</CardTitle>
                    <CardDescription>
                      Here are your shipped orders. You can track them here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Accordion type="single" collapsible className="w-full">
                      {orders.length > 0 &&
                        orders.map((order, index) => (
                          <AccordionItem
                            key={index}
                            value={order?.trackingNumber}
                          >
                            <AccordionTrigger className="w-full flex justify-between items-center">
                              <p className="">{order?.trackingNumber}</p>
                              <p className="text-xs font-primary text-gray-500 no-underline">
                                {formatDate(order.createdAt)}
                              </p>
                              <p className="">Rs.{order?.totalAmount}.00</p>
                              <p className="text-gray-500">{order.status}</p>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-2">
                              {order.items.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center justify-center gap-2">
                                    <div className="border border-gray-300">
                                      <Image
                                        src={item?.images[0]?.image}
                                        width={100}
                                        height={100}
                                        alt="Image"
                                      />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-600 font-primary ml-3">
                                      {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500 font-primary">
                                      - {item.variantSKU} x {item.quantity}
                                    </p>
                                  </div>
                                  <p className="text-sm font-semibold text-gray-600 font-primary">
                                    Rs.{item.price * item.quantity}.00
                                  </p>
                                </div>
                              ))}
                              <div className="flex w-full items-end justify-end">
                                <p className="text-sm font-semibold text-gray-600 font-primary">
                                  Total: Rs.{order?.totalAmount}.00
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
