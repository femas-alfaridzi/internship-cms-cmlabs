"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground transition-smooth px-6">
      {/* Logo Section */}
      <div className="mb-8 text-center animate-fadeIn">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl mb-4">
          <Image
            src="/images/logo.png"
            alt="CMS Logo"
            width={100}
            height={100}
            className="mx-auto animate-spin-slow"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-gradient">
          CMS cmlabs
        </h1>
        <p className="text-gray-600 dark:text-gray-400 font-semibold mt-2">
          Project PBL 2025 - Mohon maaag Landing Page masih dalam tahap design oleh ui/ux ✅
        </p>
      </div>

      {/* Color Showcase */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow">
          Primary
        </div>
        <div className="bg-secondary text-white px-6 py-3 rounded-xl font-semibold shadow">
          Secondary
        </div>
        <div className="bg-accent text-white px-6 py-3 rounded-xl font-semibold shadow">
          Accent
        </div>
        <div className="bg-success text-white px-6 py-3 rounded-xl font-semibold shadow">
          Success
        </div>
        <div className="bg-warning text-black px-6 py-3 rounded-xl font-semibold shadow">
          Warning
        </div>
        <div className="bg-error text-white px-6 py-3 rounded-xl font-semibold shadow">
          Error
        </div>
      </div>

      {/* Button Examples */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/login"
          className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-full transition-smooth shadow"
        >
          Go to Login
        </Link>
        <Link
          href="/register"
          className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-6 rounded-full transition-smooth shadow"
        >
          Register
        </Link>
        <button className="bg-accent hover:bg-accent/90 text-white font-bold py-2 px-6 rounded-full transition-smooth shadow">
          Learn More
        </button>
      </div>

      
    </main>
  );
}
