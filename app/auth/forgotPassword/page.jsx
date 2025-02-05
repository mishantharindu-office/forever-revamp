"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ForgotPasswordForm from "@/components/forms/forgot-password-form";

export default function ForgotPassword() {
  const { toast } = useToast();
  const router = useRouter();
  const [passwordResetPage, setPasswordResetPage] = useState(false);

  return (
    <div className="relative h-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {passwordResetPage ? "Reset Password" : "Forget Password"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {passwordResetPage
                ? "Enter your new password"
                : "Enter your email and get a OTP to reset your password"}
            </p>
          </div>
          <ForgotPasswordForm
            setPasswordResetPage={setPasswordResetPage}
            passwordResetPage={passwordResetPage}
          />
        </div>
      </div>
    </div>
  );
}
