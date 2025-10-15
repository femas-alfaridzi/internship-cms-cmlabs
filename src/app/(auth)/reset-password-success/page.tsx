"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ResetPasswordSuccessPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <Image
              src="/images/pw1.png"
              alt="Success"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-[35px] font-bold text-gray-900 dark:text-white mb-4 leading-snug">
              Your password has been<br />successfully reset
            </h1>
            <p className="text-[15px] font-semibold text-gray-600 dark:text-gray-400 leading-relaxed">
              Password reset completed successfully. Please use your new password to log in
              and keep your account information secure.
            </p>
          </div>

          {/* Login Now Button */}
          <Link
            href="/login"
            className="w-full inline-block bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-full transition duration-200 text-center mb-6"
          >
            Login Now
          </Link>

          {/* Back to Sign In Link */}
          <div>
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
          {/* Logo with Shadow */}
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
            Your password has been successfully updated. You can now log in to your account
            with your new credentials.
          </p>
        </div>
      </div>
    </div>
  );
}
