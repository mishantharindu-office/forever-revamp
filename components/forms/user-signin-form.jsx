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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FaFacebookF, FaGoogle, FaSpinner } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

// Define schema using zod
const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string(),
});

export default function UserAuthForm() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loadingButton, setLoadingButton] = useState(null);
  const [error, setError] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setLoadingButton("signIn");
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (!res?.error) {
      toast({
        title: "Welcome back!",
        description: "You are now logged in. Redirecting to the homepage...",
        variant: "success",
      });
      console.log("User logged in successfully", res);
      router.push("/");
    } else {
      toast({
        title: "Login Failed!",
        description:
          "Unable to log in. Please check your credentials and try again.",
        variant: "destructive",
      });
      console.error("User login failed", res);
      setError(res?.error);
      router.push("/auth/signin");
    }
    setLoadingButton(null);
  };

  const handleSocialSignIn = async (provider) => {
    try {
      setLoadingButton(provider);
      const res = await signIn(provider, { callbackUrl: "/" });
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
          title: "Login Failed!",
          description:
            "Unable to log in. Please check your credentials and try again.",
          variant: "destructive",
        });
        setError(res?.error);
        router.push("/auth/signin");
        console.log("User login failed", res);
      }
      setLoadingButton(null);
    } catch (error) {
      console.error(`Exception in ${provider} sign-in:`, error);
      toast({
        title: "Login Failed!",
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
          <Button
            disabled={!!loadingButton}
            className="ml-auto w-full"
            type="submit"
          >
            {loadingButton === "signIn" ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              "Sign In"
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
          <div className="flex items-center justify-center mt-0 pt-0">
            <p className="text-muted-foreground">
              <Link href={"/auth/forgotPassword"}>
                <span className="underline underline-offset-4 hover:text-primary text-xs">
                  {" "}
                  Forgot Password?
                </span>
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </>
  );
}
