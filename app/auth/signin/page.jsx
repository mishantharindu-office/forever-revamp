"use client";
import { Metadata } from "next";
import Link from "next/link";
import UserAuthForm from "@/components/forms/user-signin-form";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthenticationPage() {
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log(params.get("error"));
    if (params.get("error")) {
      toast({
        title: "Authentication Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      router.replace("/auth/signin"); // Removes the error parameter from URL after displaying the toast
    }
  }, []);

  return (
    <div className="relative h-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password below to sign in to your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <div className="mt-9 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?
              <Link href={"/auth/signup"}>
                <span className="underline underline-offset-4 hover:text-primary">
                  {" "}
                  Create Account
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
