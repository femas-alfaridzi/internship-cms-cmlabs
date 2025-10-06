"use client";

import { useState, useId } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import apiClient from "@/lib/axios";
import { SunIcon, MoonIcon, Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface RegisterFormData {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  country: string;
  password: string;
  agreeToTerms: boolean;
}

export default function RegisterPage() {
  const router = useRouter();
  const switchId = useId();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      setError("");
      setSuccess("");

      const response = await apiClient.post("/auth/register", {
        fullName: data.fullName,
        email: data.email,
        company: data.company,
        jobTitle: data.jobTitle,
        country: data.country,
        password: data.password,
      });

      setSuccess("Registration successful! Redirecting to login...");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    alert("Google OAuth akan diintegrasikan nanti");
  };

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`min-h-screen flex ${isDarkMode ? "dark" : ""}`}>
      {/* Left Side - Illustration - FIXED POSITION */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center p-12 fixed left-0 top-0 bottom-0">
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
            Join the CMS platform today and experience a simple yet powerful way
            to manage your content.
          </p>
        </div>
      </div>

      {/* Right Side - Form - SCROLLABLE */}
      <div className="w-full lg:w-1/2 lg:ml-auto flex items-center justify-center px-6 py-12 bg-white dark:bg-gray-900 min-h-screen">
        <div className="w-full max-w-md">
          {/* Title with Dark Mode Toggle */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-[43px] font-bold text-gray-900 dark:text-white">
                Sign Up
              </h1>

              {/* Dark Mode Toggle */}
              <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
                <Switch
                  id={switchId}
                  checked={isDarkMode}
                  onCheckedChange={toggleDarkMode}
                  className="peer data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
                ></Switch>

                <span className="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full peer-data-[state=unchecked]:rtl:-translate-x-full">
                  <MoonIcon
                    size={16}
                    className="text-foreground"
                    aria-hidden="true"
                  />
                </span>

                <span className="pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=unchecked]:invisible peer-data-[state=checked]:rtl:translate-x-full">
                  <SunIcon
                    size={16}
                    className="text-background"
                    aria-hidden="true"
                  />
                </span>
              </div>

              <Label htmlFor={switchId} className="sr-only">
                Toggle dark mode
              </Label>
            </div>
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

          {/* Register Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <label className="block text-[16px] font-bold text-gray-900 dark:text-white mb-2">
                Fullname
              </label>
              <input
                type="text"
                placeholder="Masukan Username . . ."
                className={`
                  w-full px-4 py-2 
                  border rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                  transition duration-200
                  dark:bg-gray-800 dark:text-white dark:border-gray-700
                  ${errors.fullName ? "border-error" : "border-gray-300"}
                `}
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-error">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-[16px] font-bold text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukan Email . . ."
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

            {/* Company Input */}
            <div>
              <label className="block text-[16px] font-bold text-gray-900 dark:text-white mb-2">
                Company
              </label>
              <input
                type="text"
                placeholder="Masukan Company . . ."
                className={`
                  w-full px-4 py-2 
                  border rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                  transition duration-200
                  dark:bg-gray-800 dark:text-white dark:border-gray-700
                  ${errors.company ? "border-error" : "border-gray-300"}
                `}
                {...register("company", {
                  required: "Company is required",
                })}
              />
              {errors.company && (
                <p className="mt-1 text-sm text-error">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Job Title Input */}
            <div>
              <label className="block text-[16px] font-bold text-gray-900 dark:text-white mb-2">
                Job
              </label>
              <input
                type="text"
                placeholder="Job tittle / Role"
                className={`
                  w-full px-4 py-2 
                  border rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                  transition duration-200
                  dark:bg-gray-800 dark:text-white dark:border-gray-700
                  ${errors.jobTitle ? "border-error" : "border-gray-300"}
                `}
                {...register("jobTitle", {
                  required: "Job title is required",
                })}
              />
              {errors.jobTitle && (
                <p className="mt-1 text-sm text-error">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>

            {/* Country Select */}
            <div>
              <label className="block text-[16px] font-bold text-gray-900 dark:text-white mb-2">
                Country
              </label>
              <div className="relative">
                <select
                  className={`
        w-full px-4 py-2 pr-10
        border rounded-lg 
        appearance-none
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        transition duration-200
        dark:bg-gray-800 dark:text-white dark:border-gray-700
        bg-white
        ${errors.country ? "border-error" : "border-gray-300"}
      `}
                  {...register("country", {
                    required: "Country is required",
                  })}
                >
                  <option value="">Country</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Other">Other</option>
                </select>

                {/* Custom Arrow Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-5 w-5 text-gray-400 dark:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {errors.country && (
                <p className="mt-1 text-sm text-error">
                  {errors.country.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-[16px] font-bold text-gray-900 dark:text-white mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`
                    w-full px-4 py-2 pr-12
                    border rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                    transition duration-200
                    dark:bg-gray-800 dark:text-white dark:border-gray-700
                    ${errors.password ? "border-error" : "border-gray-300"}
                  `}
                  {...register("password", {
                    required: "Password is required",
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-error">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                {...register("agreeToTerms", {
                  required: "You must agree to the terms and conditions",
                })}
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-bold text-gray-700 dark:text-gray-300"
              >
                I agree to CMS{" "}
                <Link
                  href="/terms"
                  className="text-primary hover:text-primary/80"
                >
                  Terms of service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-primary hover:text-primary/80"
                >
                  Privacy policy
                </Link>
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-error -mt-2">
                {errors.agreeToTerms.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-full transition duration-200 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-900 text-gray-500">
                Or
              </span>
            </div>
          </div>

          {/* Google Signup */}
          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Continue with Google
            </span>
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
            <span className="font-bold">Already have an account?</span>{" "}
            <Link
              href="/login"
              className="text-primary hover:text-primary/80 font-bold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
