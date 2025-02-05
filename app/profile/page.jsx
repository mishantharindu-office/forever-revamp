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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCartStore } from "@/context";

const otpFormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});
const resetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Please confirm your password." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Specify which field to display the error on
  });

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    dob: "",
    image: "",
  });
  const setCartRefresh = useCartStore((state) => state.setCartRefresh);
  const [passwordResetPage, setPasswordResetPage] = useState(false);
  const [otpState, setOtpState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [code, setCode] = useState();
  const otpForm = useForm({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      pin: "",
    },
  });
  const resetPasswordForm = useForm({
    resolver: zodResolver(resetPasswordFormSchema),
  });

  const [orders, setOrders] = useState([]);
  const [userUpdateLoading, setUserUpdateLoading] = useState(false);

  const fetchRecentOrders = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/profile/orders?status=0&page=0&size=5&userId=${session?.user?.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        console.log("recentOrders", data?.data);
        setOrders(data?.data);
      } else {
        console.log("Error", data);
        toast({
          title: "Failed to fetch recent orders",
          description: "Could not fetch userInfo. Please try again later.",
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

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/profile/user?userId=${session?.user?.userId}`,
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
        console.log("user", data?.data);
        setFormData({
          name: data?.data?.name || "",
          email: data?.data?.email || "",
          contactNumber: data?.data?.contactNumber || "",
          dob: data?.data?.dob || "",
          image: data?.data?.image || "",
        });
      } else {
        console.log("Error", data);
        toast({
          title: "Failed to fetch userInfo",
          description: "Could not fetch userInfo. Please try again later.",
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
    fetchUserData();
    fetchRecentOrders();
  }, [session]);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSaveChanges = async () => {
    setUserUpdateLoading(true);
    console.log("formData", formData);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/profile/user/update?userId=${session?.user?.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          body: JSON.stringify({
            name: formData.name,
            contactNumber: formData.contactNumber,
            dob: formData.dob,
            image: formData.image,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "User Updated",
          description: "User info has been updated successfully.",
          variant: "success",
        });
        fetchUserData();
        setUserUpdateLoading(false);
      } else {
        toast({
          title: "Failed to Update User",
          description:
            data?.message || "Could not update user. Please try again later.",
          variant: "destructive",
        });
        setUserUpdateLoading(false);
      }
    } catch (error) {
      console.error("Error", error);
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setUserUpdateLoading(false);
    }
  };

  const sendOTP = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/password/reset/otp`,
        {
          method: "POST",
          body: JSON.stringify({ email: session?.user?.email }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const responseData = await response.json();
      if (responseData.code === 200 || responseData.code === 201) {
        setLoading(false);
        setOtpState(true);
        toast({
          title: "Email sent!",
          description: "OTP has been sent to your email",
          variant: "success",
        });
      } else {
        setLoading(false);
        setOtpState(false);
        toast({
          title: "Email send failed!",
          description: "Could not send OTP. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      setLoading(false);
      toast({
        title: "Network error",
        description: "Could not send OTP. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const onOTPSubmit = async (code) => {
    setOtpLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/otp/verify?otp=${code.pin}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: session?.user?.email,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const responseData = await response.json();

      if (response.status === 200 || response.status === 201) {
        setOtpLoading(false);
        toast({
          title: "OTP Verified Successfully!",
          description:
            "Your one-time password has been successfully verified. You can now reset your password.",
          variant: "success",
        });
        setCode(code.pin);
        setPasswordResetPage(true);
      } else {
        setOtpLoading(false);
        toast({
          title: "Verification Failed!",
          description:
            responseData.message ||
            "The OTP you entered is incorrect. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      setOtpLoading(false);
      toast({
        title: "Network Error",
        description:
          "Unable to verify OTP due to network issues. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setOtpLoading(false);
    }
  };

  const onPasswordSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/password/verify?otp=${code}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: session?.user?.email,
            password: data.password,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const responseData = await response.json();

      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        toast({
          title: "Password Changed Successfully!",
          description:
            "Your password has been updated. Please log in with your new credentials.",
          variant: "success",
        });
        setCartRefresh();
        router.push("/auth/signin");
      } else {
        setLoading(false);
        toast({
          title: "Password Change Failed!",
          description:
            responseData.message ||
            "Unable to update your password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error during password change:", error);
      setLoading(false);
      toast({
        title: "Network Error",
        description:
          "There was a problem updating your password. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative w-full mt-20 h-auto sm:px-5 mx-auto bg-white md:w-full lg:w-4/5 group py-10">
        <div className="h-auto mt-10 flex justify-center px-4 sm:px-6 lg:px-8">
          <div className=" w-full">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-semibold">My Profile</h1>
            </div>
            <Tabs defaultValue="recentOrders" className="w-full h-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recentOrders">Recent Orders</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="Password">Password</TabsTrigger>
                {/* <TabsTrigger value="Address">Address</TabsTrigger> */}
              </TabsList>
              <TabsContent value="recentOrders">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>
                      Here are your recent orders. for more details{" "}
                      <a href="/order" className="underline">
                        click here
                      </a>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Accordion type="single" collapsible className="w-full">
                      {orders?.list?.length > 0 &&
                        orders?.list?.map((order) => (
                          <AccordionItem
                            key={order.trackingNumber}
                            value={order.trackingNumber}
                          >
                            <AccordionTrigger className="w-full flex justify-between items-center">
                              <p>{order.trackingNumber}</p>
                              <p className="text-xs font-primary text-gray-500 no-underline">
                                {new Date(order.orderDate).toLocaleDateString()}
                              </p>
                              <p>Rs.{order.totalAmount.toFixed(2)}</p>
                              <p
                                className={`${
                                  order.status === "Pending"
                                    ? "text-yellow-500"
                                    : order.status === "Shipped"
                                    ? "text-green-500"
                                    : "text-gray-500"
                                }`}
                              >
                                {order.status}
                              </p>
                            </AccordionTrigger>
                            <AccordionContent>
                              {order.items.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center justify-between mb-2"
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="border border-gray-300">
                                      <Image
                                        src={
                                          item.images[0]?.image ||
                                          "/placeholder.jpg"
                                        }
                                        width={100}
                                        height={100}
                                        alt={item.name}
                                      />
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-gray-600 font-primary">
                                        {item.name}
                                      </p>
                                      <p className="text-xs text-gray-500 font-primary">
                                        - {item.variantSKU} x {item.quantity}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-sm font-semibold text-gray-600 font-primary">
                                    Rs.{(item.price * item.quantity).toFixed(2)}
                                  </p>
                                </div>
                              ))}
                              <div className="flex w-full items-end justify-end mt-4">
                                <p className="text-sm font-semibold text-gray-600 font-primary">
                                  Total: Rs.{order.totalAmount.toFixed(2)}
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're
                      done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center">
                    <div className="flex w-full h-full  items-center justify-center">
                      <Image
                        src={session?.user?.image || "/image/user.png"}
                        alt="user"
                        width={100}
                        height={100}
                        className="object-cover w-auto h-full transition-all duration-200 delay-100 hover:scale-105"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          value={session?.user?.email}
                          disabled
                          onChange={(e) => {}}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactNumber">Contact Number</Label>
                        <Input
                          id="contactNumber"
                          value={formData.contactNumber}
                          onChange={(e) =>
                            handleInputChange("contactNumber", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                          id="dob"
                          type="date"
                          value={formData.dob}
                          onChange={(e) =>
                            handleInputChange("dob", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    {/* <Button onClick={handleSaveChanges}>Save changes</Button> */}
                    <Button
                      disabled={userUpdateLoading}
                      className="flex justify-center items-center"
                      type="button"
                      onClick={() => handleSaveChanges()}
                    >
                      {userUpdateLoading ? (
                        <FaSpinner className="animate-spin mr-2" />
                      ) : (
                        ""
                      )}
                      Save changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="Password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged
                      out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {!passwordResetPage ? (
                      <>
                        <Input value={session?.user?.email} disabled />
                        <Button
                          disabled={loading || otpState}
                          className="ml-auto"
                          type="submit"
                          onClick={() => {
                            sendOTP();
                          }}
                        >
                          {loading ? (
                            <FaSpinner className="animate-spin mr-2" />
                          ) : (
                            "Send an OTP"
                          )}
                        </Button>

                        {otpState && (
                          <div className="flex flex-col w-full items-start justify-start">
                            <Form {...otpForm}>
                              <form
                                onSubmit={otpForm.handleSubmit(onOTPSubmit)}
                                className="w-full space-y-6 items-start justify-center flex flex-col"
                              >
                                <FormField
                                  className="flex w-full items-start justify-center"
                                  control={otpForm.control}
                                  name="pin"
                                  render={({ field }) => (
                                    <FormItem className="flex flex-col w-full items-start justify-center mt-4">
                                      <FormLabel>One-Time Password</FormLabel>
                                      <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                          <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                          </InputOTPGroup>
                                        </InputOTP>
                                      </FormControl>
                                      <FormDescription>
                                        Please enter the one-time password sent
                                        to your email.
                                      </FormDescription>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <Button type="submit">
                                  {otpLoading ? (
                                    <FaSpinner className="animate-spin mr-2" />
                                  ) : (
                                    "Submit"
                                  )}
                                </Button>
                              </form>
                            </Form>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <Form {...resetPasswordForm}>
                          <form
                            onSubmit={resetPasswordForm.handleSubmit(
                              onPasswordSubmit
                            )}
                            className="space-y-2 w-full"
                          >
                            <FormField
                              control={resetPasswordForm.control}
                              name="password"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>New Password</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="password"
                                      placeholder="Enter your new password..."
                                      disabled={loading}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={resetPasswordForm.control}
                              name="confirmPassword"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Confirm Password</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="password"
                                      placeholder="Re-enter your password..."
                                      disabled={loading}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <Button
                              disabled={loading}
                              className="ml-auto w-full"
                              type="submit"
                            >
                              {loading ? (
                                <FaSpinner className="animate-spin mr-2" />
                              ) : (
                                "Create New Password"
                              )}
                            </Button>
                          </form>
                        </Form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              {/* <TabsContent value="Address">
                <Card>
                  <CardHeader>
                    <CardTitle>Address</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged
                      out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent> */}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
