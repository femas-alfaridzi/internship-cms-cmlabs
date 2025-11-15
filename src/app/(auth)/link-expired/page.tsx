"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, Code } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="h-screen bg-gradient-to-br from-[#3A7AC3] via-[#5B8FC9] to-[#7FA8D1] overflow-hidden flex flex-col">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            <Image
              src="/images/logo.png"
              alt="CMS Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">CMS cmlabs</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-white/90 hover:text-white transition-colors font-medium"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-white text-[#3A7AC3] hover:bg-white/90 px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-medium">
              <Sparkles size={14} />
              <span>PBL 2025 Project</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Build Your Content
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Management System
              </span>
            </h2>
            
            <p className="text-white/90 text-base leading-relaxed">
              Platform CMS modern yang dirancang khusus untuk memudahkan pengelolaan konten website Anda. 
              Dengan fitur lengkap dan antarmuka yang intuitif.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="bg-white/20 rounded-lg p-1.5 w-fit mb-2">
                  <Zap className="text-white" size={16} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-0.5">Fast & Efficient</h3>
                <p className="text-white/70 text-xs">Lightning fast performance</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="bg-white/20 rounded-lg p-1.5 w-fit mb-2">
                  <Shield className="text-white" size={16} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-0.5">Secure</h3>
                <p className="text-white/70 text-xs">Enterprise-level security</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="bg-white/20 rounded-lg p-1.5 w-fit mb-2">
                  <Code className="text-white" size={16} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-0.5">Developer Friendly</h3>
                <p className="text-white/70 text-xs">Full API documentation</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="bg-white/20 rounded-lg p-1.5 w-fit mb-2">
                  <Sparkles className="text-white" size={16} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-0.5">Modern UI</h3>
                <p className="text-white/70 text-xs">Beautiful & responsive</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                href="/dashboard"
                className="group bg-white text-[#3A7AC3] hover:bg-white/95 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
              >
                View Dashboard
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              
              <Link
                href="/register"
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-3 rounded-full font-bold text-sm transition-all border border-white/30 hover:scale-105"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-white/70 text-xs">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-white/70 text-xs">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-white/70 text-xs">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Landing Page Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 blur-3xl rounded-3xl"></div>
              
              {/* Landing Page Image */}
              <div className="relative rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/landing-page.png"
                  alt="CMS Dashboard Preview"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-3 -left-3 bg-white rounded-xl shadow-lg p-2 animate-float">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Active</div>
                    <div className="text-[10px] text-gray-500">All systems go</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg p-2 animate-float delay-1000">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    📊
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Analytics</div>
                    <div className="text-[10px] text-gray-500">Real-time data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="relative z-10 container mx-auto px-6 py-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <p className="text-white/70 text-center text-xs mb-3">Powered by</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-white font-bold text-base">cmlabs</div>
            <div className="text-white font-bold text-base">Polinema</div>
            <div className="text-white font-bold text-base">PBL 2025</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </main>
  );
}