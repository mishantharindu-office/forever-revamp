"use client";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import { FaArrowLeft, FaFacebookF, FaGoogle, FaSpinner } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

// Define schema using zod
const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
});
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

export default function ForgotPasswordForm({
  passwordResetPage,
  setPasswordResetPage,
}) {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpState, setOtpState] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const otpForm = useForm({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      pin: "",
    },
  });
  const resetPasswordForm = useForm({
    resolver: zodResolver(resetPasswordFormSchema),
  });

  const onSubmit = async (formData) => {
    console.log("data", formData);
    setEmail(formData.email);
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/password/reset/otp`,
        {
          method: "POST",
          body: JSON.stringify({ email: formData.email }),
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
    console.log("code", code, "email", email);
    setOtpLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/otp/verify?otp=${code.pin}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
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
    console.log("code", code, "email", email, "data ", data);
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/password/verify?otp=${code}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
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

  console.log("code", code);
  console.log("email", email);

  return (
    <>
      {!passwordResetPage ? (
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
                        disabled={loading || otpState}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading || otpState}
                className="ml-auto w-full"
                type="submit"
              >
                {loading ? (
                  <FaSpinner className="animate-spin mr-2" />
                ) : (
                  "Send an OTP"
                )}
              </Button>
            </form>
          </Form>
          {otpState && (
            <div className="flex flex-col items-center justify-center">
              <Form {...otpForm}>
                <form
                  onSubmit={otpForm.handleSubmit(onOTPSubmit)}
                  className="w-full space-y-6 items-center justify-center flex flex-col"
                >
                  <FormField
                    className="flex w-full items-center justify-center"
                    control={otpForm.control}
                    name="pin"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-full items-center justify-center">
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
                          Please enter the one-time password sent to your email.
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
          <Button
            type="button"
            variant="outline"
            onclick={() => setPasswordResetPage(false)}
            className="items-center justify-center w-fit"
          >
            <FaArrowLeft className="mr-2" />
          </Button>
          <Form {...resetPasswordForm}>
            <form
              onSubmit={resetPasswordForm.handleSubmit(onPasswordSubmit)}
              className="space-y-4 w-full"
            >
              {/* New Password Field */}
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

              {/* Confirm Password Field */}
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
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  "Create New Password"
                )}
              </Button>
            </form>
          </Form>
        </>
      )}
    </>
  );
}
