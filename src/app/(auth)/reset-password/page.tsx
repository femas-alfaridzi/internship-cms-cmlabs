"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import apiClient from "@/lib/axios";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // Token dari email link
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormData>();

  const newPassword = watch("newPassword");

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      setIsLoading(true);
      setError("");

      if (!token) {
        setError(
          "Invalid or missing reset token. Please request a new reset link."
        );
        return;
      }

      await apiClient.post("/auth/reset-password", {
        token: token,
        newPassword: data.newPassword,
      });

      // Redirect to login with success message
      router.push("/login?reset-password-success");
    } catch (err: any) {
  const errorMessage = err.response?.data?.message || "";
  
  // Jika link expired, redirect ke halaman link-expired
  if (errorMessage.includes("expired") || errorMessage.includes("invalid token")) {
    router.push("/link-expired");
    return;
  }
  
  setError(
    err.response?.data?.message ||
      "Failed to reset password. The link may have expired."
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
              Set new password
            </h1>
            <p className="text-[16px] font-semibold text-gray-600 dark:text-gray-400 leading-relaxed">
              Enter your new password below to complete the reset process.
              Ensure it's strong and secure
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-error/10 border border-error/20 text-error px-4 py-2 rounded-lg mb-6">
              {error}
            </div>
          )}
          {/* Token Missing Warning */}
          {!token && (
            <div className="bg-warning/10 border border-warning/20 text-warning px-4 py-2 rounded-lg mb-6">
              Invalid or missing reset token. Please request a new password
              reset link from forgot password page.
            </div>
          )}

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* New Password Input */}
            <div>
              <label className="block text-[16px] font-bold text-gray-900 dark:text-white mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter your password . . ."
                  className={`
                    w-full px-4 py-2 pr-12
                    border rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                    transition duration-200
                    dark:bg-gray-800 dark:text-white dark:border-gray-700
                    ${errors.newPassword ? "border-error" : "border-gray-300"}
                  `}
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                      message:
                        "Password must contain uppercase, lowercase, and number",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.newPassword ? (
                <p className="mt-1 text-sm text-error">
                  {errors.newPassword.message}
                </p>
              ) : (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Must be at least 8 character
                </p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-[16px] font-bold text-gray-900 dark:text-white mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your password . . ."
                  className={`
                    w-full px-4 py-2 pr-12
                    border rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                    transition duration-200
                    dark:bg-gray-800 dark:text-white dark:border-gray-700
                    ${
                      errors.confirmPassword
                        ? "border-error"
                        : "border-gray-300"
                    }
                  `}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-error">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !token}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-full transition duration-200 disabled:opacity-50"
            >
              {isLoading ? "Resetting..." : "Reset password"}
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

          <p className="text-[16px] font-bold leading-relaxed">
            Enter your registered email address and we'll send you a link to
            reset your password.
          </p>
        </div>
      </div>
    </div>
  );
}
