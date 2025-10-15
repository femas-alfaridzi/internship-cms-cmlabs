"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function LinkExpiredPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md text-center">
          {/* Expired Icon */}
          <div className="mb-6">
            <Image
              src="/images/ss2.png"
              alt="Expired Link Illustration"
              width={70}
              height={70}
              className="mx-auto"
              priority
            />
          </div>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-[43px] font-bold text-gray-900 dark:text-white mb-4">
              Link Expired
            </h1>
            <p className="text-[16px] font-semibold text-gray-600 dark:text-gray-400 leading-relaxed">
              The password reset link has expired.
              <br />
              Please request a new link to reset your password.
            </p>
          </div>

          {/* Back to Login Button */}
          <Link
            href="/login"
            className="w-full inline-block bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-full transition duration-200 text-center mb-6"
          >
            Back to Login
          </Link>

          {/* Back to Sign In Link */}
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Sign In</span>
          </Link>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center p-12 fixed right-0 top-0 bottom-0">
        <div className="text-center text-white max-w-md">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <Image
                src="/images/logo.png"
                alt="CMS Logo"
                width={186}
                height={186}
                className="w-32 h-32"
                priority
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
