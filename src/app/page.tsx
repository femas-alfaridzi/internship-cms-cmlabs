"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, Code } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="h-screen bg-gradient-to-br from-[#133E87] via-[#608BC1] to-[#CBDCEB] overflow-hidden flex flex-col relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#133E87]/30 via-transparent to-[#608BC1]/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#CBDCEB]/20 via-transparent to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#608BC1]/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#CBDCEB]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-lg p-1.5 shadow-lg">
            <img
              src="/images/logo.png"
              alt="CMS Logo"
              width="32"
              height="32"
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-white">CMS cmlabs</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-white/90 hover:text-white transition-colors font-medium text-sm"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-white text-[#133E87] hover:bg-white/90 px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
              <Sparkles size={12} />
              <span>PBL 2025 Project</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Build Your Content
              <span className="block bg-gradient-to-r from-[#CBDCEB] to-white bg-clip-text text-transparent">
                Management System
              </span>
            </h2>
            
            <p className="text-white/90 text-sm leading-relaxed">
              Platform CMS modern yang dirancang khusus untuk memudahkan pengelolaan konten website Anda. 
              Dengan fitur lengkap dan antarmuka yang intuitif.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/20 hover:bg-white/15 transition-all">
                <div className="bg-white/20 rounded p-1 w-fit mb-1.5">
                  <Zap className="text-white" size={14} />
                </div>
                <h3 className="text-white font-semibold text-xs mb-0.5">Fast & Efficient</h3>
                <p className="text-white/70 text-[10px]">Lightning fast performance</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/20 hover:bg-white/15 transition-all">
                <div className="bg-white/20 rounded p-1 w-fit mb-1.5">
                  <Shield className="text-white" size={14} />
                </div>
                <h3 className="text-white font-semibold text-xs mb-0.5">Secure</h3>
                <p className="text-white/70 text-[10px]">Enterprise-level security</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/20 hover:bg-white/15 transition-all">
                <div className="bg-white/20 rounded p-1 w-fit mb-1.5">
                  <Code className="text-white" size={14} />
                </div>
                <h3 className="text-white font-semibold text-xs mb-0.5">Developer Friendly</h3>
                <p className="text-white/70 text-[10px]">Full API documentation</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/20 hover:bg-white/15 transition-all">
                <div className="bg-white/20 rounded p-1 w-fit mb-1.5">
                  <Sparkles className="text-white" size={14} />
                </div>
                <h3 className="text-white font-semibold text-xs mb-0.5">Modern UI</h3>
                <p className="text-white/70 text-[10px]">Beautiful & responsive</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Link
                href="/dashboard"
                className="group bg-white text-[#133E87] hover:bg-white/95 px-5 py-2.5 rounded-full font-bold text-xs transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-1.5"
              >
                View Dashboard
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
              
              <Link
                href="/register"
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-5 py-2.5 rounded-full font-bold text-xs transition-all border border-white/30 hover:scale-105"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-5 pt-3 border-t border-white/20">
              <div>
                <div className="text-xl font-bold text-white">1000+</div>
                <div className="text-white/70 text-[10px]">Active Users</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">50+</div>
                <div className="text-white/70 text-[10px]">Projects</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">99.9%</div>
                <div className="text-white/70 text-[10px]">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#608BC1]/40 to-[#CBDCEB]/40 blur-3xl rounded-3xl"></div>
              
              {/* Landing Page Image */}
              <div className="relative rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/landing-page.png"
                  alt="CMS Dashboard Preview"
                  width="800"
                  height="600"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-3 -left-3 bg-white rounded-xl shadow-lg p-2 animate-float">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 bg-gradient-to-br from-[#133E87] to-[#608BC1] rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-800">Active</div>
                    <div className="text-[10px] text-gray-500">All systems go</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg p-2 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 bg-gradient-to-br from-[#608BC1] to-[#CBDCEB] rounded-lg flex items-center justify-center text-white text-xs font-bold">
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
      <section className="relative z-10 container mx-auto px-6 pb-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
          <p className="text-white/70 text-center text-[10px] mb-2">Powered by</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-white font-bold text-sm">cmlabs</div>
            <div className="text-white font-bold text-sm">Polinema</div>
            <div className="text-white font-bold text-sm">PBL 2025</div>
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
      `}</style>
    </main>
  );
}