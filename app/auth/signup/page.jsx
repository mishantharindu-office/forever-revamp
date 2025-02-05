"use client";
import React from "react";
import Link from "next/link";
import UserAuthForm from "@/components/forms/user-signup-form";

const Signup = () => {
  return (
    <div className="relative h-screen flex-col items-center justify-center lg:max-w-none lg:px-0 my-8">
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Register</h1>
            <p className="text-sm text-muted-foreground">
              Enter your data to create your account
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
              Already have an account?
              <Link href={"/auth/signin"}>
                <span className="underline underline-offset-4 hover:text-primary">
                  {" "}
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
