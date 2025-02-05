"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FaFacebookF, FaGoogle, FaSpinner } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";

// Define schema using zod
const formSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    contactNumber: z
      .string()
      .min(10, { message: "Enter a valid contact number" }),
    email: z.string().email({ message: "Enter a valid email address" }),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "Passwords do not match",
      });
    }
  });

export default function UserAuthForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [loadingButton, setLoadingButton] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    console.log("object", data);
    setLoadingButton("signUp");
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/auth/signup",
        {
          method: "POST",
          body: JSON.stringify({
            name: `${data.firstname} ${data.lastName}`,
            email: data.email,
            password: data.password,
            contactNumber: data.contactNumber,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const responseData = await res.json();
      console.log(responseData);
      if (res.status === 201 || res.status === 200) {
        toast({
          title: "Account created!",
          description: "We've created your account for you.",
          variant: "success",
        });
        const signInRes = await signIn("credentials", {
          email: responseData?.data?.email,
          password: data.password,
          redirect: false,
        });

        if (!signInRes?.error) {
          toast({
            title: "Welcome!",
            description:
              "You are now logged in. Redirecting to the homepage...",
            variant: "success",
          });
          router.push("/");
          console.log("User logged in successfully", signInRes);
        } else {
          toast({
            title: "Account created!",
            description: "Sign in to continue.",
            variant: "success",
          });
          setError(signInRes?.error);
          router.push("/auth/signin");
          console.log("User login failed", signInRes);
        }
        setLoadingButton(null);
      } else {
        toast({
          title: "Sign-up failed",
          description: "An error occurred. Please try again.",
          variant: "destructive",
        });
        console.log("signup failed", responseData);
        setError("Sign-up failed");
      }
    } catch (error) {
      toast({
        title: "Somthing went wrong!",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      });
      setError("An error occurred. Please try again.");
      console.error("Error in sign-up:", error);
    } finally {
      setLoadingButton(null);
    }
  };

  const handleSocialSignIn = async (provider) => {
    setLoadingButton(provider);
    try {
      const res = await signIn(provider, { callbackUrl });
      if (!res?.error) {
        toast({
          title: "Welcome!",
          description: "You have successfully logged in.",
          variant: "success",
        });
        router.push("/");
        console.log("User logged in successfully", res);
      } else {
        toast({
          title: "Login Failed! 😟",
          description:
            "Unable to log in. Please check your credentials and try again.",
          variant: "destructive",
        });
        setError(res?.error);
        router.push("/auth/signin");
        console.log("User login failed", res);
      }
    } catch (error) {
      setError(`Error during ${provider} sign-in. Please try again.`);
      console.error(`Error in ${provider} sign-in:`, error);
      toast({
        title: "Login Failed! 😟",
        description:
          "Unable to log in. Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingButton(null);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          <div className="flex gap-2 w-full">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="First name..."
                      disabled={!!loadingButton}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex items-end w-full">
                  {/* <FormLabel>LastName</FormLabel> */}
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Last name..."
                      disabled={!!loadingButton}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    disabled={!!loadingButton}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your contact number..."
                    disabled={!!loadingButton}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password..."
                    disabled={!!loadingButton}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Re-enter your password..."
                    disabled={!!loadingButton}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={!!loadingButton}
            className="ml-auto w-full mt-4"
            type="submit"
          >
            {loadingButton === "signUp" ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              "Sign Up"
            )}
          </Button>

          <div className="flex w-full items-center justify-center py-2">
            <p className="text-sm text-muted-foreground">or continue with</p>
          </div>

          <Button
            disabled={!!loadingButton}
            className="ml-auto w-full flex justify-center items-center"
            type="button"
            onClick={() => handleSocialSignIn("google")}
          >
            {loadingButton === "google" ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              <FaGoogle className="mr-2" />
            )}
            Google
          </Button>

          <Button
            disabled={!!loadingButton}
            className="ml-auto w-full flex justify-center items-center"
            type="button"
            onClick={() => handleSocialSignIn("facebook")}
          >
            {loadingButton === "facebook" ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              <FaFacebookF className="mr-2" />
            )}
            Facebook
          </Button>
        </form>
      </Form>
    </>
  );
}
