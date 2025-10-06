"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import apiClient from "@/lib/axios";
import { ArrowLeft } from "lucide-react";

interface ForgotPasswordFormData {
  email: string;
}

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      setIsLoading(true);
      setError("");
      setSuccess("");

      const response = await apiClient.post("/auth/forgot-password", {
        email: data.email,
      });

      setSuccess("Redirecting to check email...");
      setTimeout(() => {
        router.push(`/check-email?email=${data.email}`);
      }, 1500);

    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Failed to send reset link. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md">
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-[43px] font-bold text-gray-900 dark:text-white mb-2">
              Forgot Password
            </h1>
            <p className="text-[16px] font-semibold text-gray-600 dark:text-gray-400 leading-relaxed">
              Enter your registered email address and we'll send you a link to
              reset your password.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-error/10 border border-error/20 text-error px-4 py-2 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-success/10 border border-success/20 text-success px-4 py-2 rounded-lg mb-6">
              {success}
            </div>
          )}

          {/* Forgot Password Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-[16px] font-bold text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address . . ."
                className={`
                  w-full px-4 py-2 
                  border rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                  transition duration-200
                  dark:bg-gray-800 dark:text-white dark:border-gray-700
                  ${errors.email ? "border-error" : "border-gray-300"}
                `}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-error">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-full transition duration-200 disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Reset password"}
            </button>
          </form>

          {/* Back to Sign In Link */}
          <div className="mt-6">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back to sign in</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration - FIXED */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center p-12 fixed right-0 top-0 bottom-0">
        <div className="text-center text-white max-w-md">
          {/* Logo dengan Shadow Effect */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <Image
                src="/images/logo.png"
                alt="CMS Logo"
                width={186}
                height={186}
                className="w-32 h-32"
              />
            </div>
          </div>

          <p className="text-[16px] font-semibold leading-relaxed">
            Enter your registered email address and we'll send you a link to
            reset your password.
          </p>
        </div>
      </div>
    </div>
  );
}
