"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import apiClient from "@/lib/axios";
import { ArrowLeft } from "lucide-react";

export default function CheckEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "useremail@gmail.com";
  const [isResending, setIsResending] = useState(false);
  const [resendStatus, setResendStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleResendEmail = async () => {
    try {
      setIsResending(true);
      setResendStatus(null);

      await apiClient.post("/auth/resend-reset-link", {
        email: email,
      });

      setResendStatus({ 
        type: 'success', 
        message: "Reset link has been resent to your email!" 
      });
    } catch (err: any) {
      setResendStatus({ 
        type: 'error', 
        message: "Failed to resend. Please try again." 
      });
    } finally {
      setIsResending(false);
    }
  };

  const handleOpenGmail = () => {
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md">
          {/* Email Icon */}
          <div className="mb-4 flex justify-center">
            <div className="w-22 h-22 flex items-center justify-center">
              <Image
                src="/images/icon2.png"
                alt="Email Icon"
                width={70}
                height={70}
                className="w-26 h-26"
              />
            </div>
          </div>

          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-[43px] font-bold text-gray-900 dark:text-white mb-4">
              Check your Email
            </h1>
            <p className="text-[16px] font-semibold text-gray-600 dark:text-gray-400 leading-relaxed">
              We sent a password reset to your email{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                ({email})
              </span>{" "}
              which valid for 24 hours after receives the email. Please check
              your email
            </p>
          </div>

          {/* Resend Message */}
          {resendStatus && (
            <div className={`
              px-4 py-2 rounded-lg mb-6 text-center border
              ${resendStatus.type === 'success' 
                ? 'bg-primary/10 border-primary/20 text-primary' 
                : 'bg-destructive/10 border-destructive/20 text-destructive'
              }
            `}>
              {resendStatus.message}
            </div>
          )}

          {/* Open Gmail Button */}
          <button
            onClick={handleOpenGmail}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-full transition duration-200 mb-4"
          >
            Open Gmail
          </button>

          {/* Resend Link */}
          <p className="text-center text-[16px] text-gray-600 dark:text-gray-400 mb-6">
            <span className="font-bold">Don't receive the email ?</span>{" "}
            <button
              onClick={handleResendEmail}
              disabled={isResending}
              className="text-primary hover:text-primary/80 font-bold disabled:opacity-50"
            >
              {isResending ? "Sending..." : "Click here to resend !"}
            </button>
          </p>

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
            We sent a password reset link to your email. Please check your inbox
            and follow the instructions to reset your password.
          </p>
        </div>
      </div>
    </div>
  );
}