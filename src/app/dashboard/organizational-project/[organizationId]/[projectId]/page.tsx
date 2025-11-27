'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { Sun, Moon, Menu, Filter } from 'lucide-react';
import Image from 'next/image';

export default function ProjectDetailPage() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  
  const params = useParams();
  const organizationId = Array.isArray(params?.organizationId) 
    ? params.organizationId[0] 
    : params?.organizationId;
  const projectId = Array.isArray(params?.projectId) 
    ? params.projectId[0] 
    : params?.projectId;

  // Map organization ID to display name
  let organizationName = organizationId ?? 'CMS';
  if (organizationId === 'cms') organizationName = 'CMS';

  // Map project ID to display name
  let projectName = 'CMS CMSLABS';
  if (projectId === 'cms-cmslabs') projectName = 'CMS CMSLABS';
  else if (projectId === 'cms-pegadaian') projectName = 'CMS Pegadaian';
  else if (projectId === 'cms-polinema') projectName = 'CMS Polinema';

  return (
    <div className={`flex h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <aside className="w-72 bg-[#3A7AC3] text-white p-6 flex flex-col">
        {/* Logo and Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
            <Image 
              src="/images/logo.png" 
              alt="CMS Logo" 
              width={48} 
              height={48}
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-bold">CMS Project</h1>
        </div>

        <div className="h-px bg-white/30 mb-6"></div>

        <nav className="flex-1 space-y-2">
          <Link
            href="/dashboard"
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
              pathname === '/dashboard' ? 'bg-[#5B8FC9] text-white' : 'text-white hover:bg-white/10'
            }`}
          >
            <Image 
              src="/icons/dashboard.png"
              alt="dashboard" 
              width={20} 
              height={20}
              className="brightness-0 invert"
            />
            Dashboard
          </Link>

          <div className="pt-4">
            <p className="text-sm text-blue-100 mb-2 px-4 font-semibold">Organizational</p>
            
            <Link
              href="/dashboard/organizational-project"
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === '/dashboard/organizational-project' || pathname.includes('/organizational-project/') 
                  ? 'bg-[#5B8FC9] text-white font-medium' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Image 
                src="/icons/organizational-project.png"
                alt="org project" 
                width={20} 
                height={20} 
                className="brightness-0 invert"
              />
              Organizational Project
            </Link>

            <Link
              href="/dashboard/collaborator"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all"
            >
              <Image 
                src="/icons/collaborator.png"
                alt="collaborator" 
                width={20} 
                height={20} 
                className="brightness-0 invert"
              />
              Collaborator
            </Link>

            <Link
              href="/dashboard/setting-organization"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all"
            >
              <Image 
                src="/icons/setting-organization.png"
                alt="setting" 
                width={20} 
                height={20} 
                className="brightness-0 invert"
              />
              Setting Organization
            </Link>
          </div>

          <div className="pt-4">
            <p className="text-sm text-blue-100 mb-2 px-4 font-semibold">Personal</p>
            
            <Link
              href="/dashboard/personal-project"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all"
            >
              <Image 
                src="/icons/personal-project.png"
                alt="personal project" 
                width={20} 
                height={20} 
                className="brightness-0 invert"
              />
              Personal Project
            </Link>

            <Link
              href="/dashboard/notification"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all"
            >
              <Image 
                src="/icons/notification.png"
                alt="notification" 
                width={20} 
                height={20} 
                className="brightness-0 invert"
              />
              Notification
            </Link>
          </div>
        </nav>
      </aside>

      <main className="flex-1 overflow-auto flex flex-col">
        {/* Top Navigation Bar */}
        <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-8 py-4`}>
          <div className="flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <Menu className={isDark ? 'text-gray-400' : 'text-gray-600'} size={20} />
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Pages / Organizational Project / {organizationName} /
              </span>
              <span className="text-blue-600 font-medium">{projectName}</span>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                isDark 
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Filter size={18} />
                Filter Data
              </button>
              
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Welcome Back</span>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>User</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
              </div>
              <button 
                onClick={() => setIsDark(!isDark)} 
                className={`p-2 rounded-lg transition-all ${
                  isDark 
                    ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {/* Page Title */}
          <h1 className={`text-3xl font-bold mb-8 ${isDark ? 'text-blue-400' : 'text-[#3A7AC2]'}`}>
            {projectName}
          </h1>

          {/* Project Detail Cards */}
          <div className="space-y-6">
            {/* Information Card */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border transition-colors overflow-hidden`}>
              <div className={`px-6 py-3 ${isDark ? 'bg-blue-700 text-white' : 'bg-[#3A7AC2] text-white'} font-medium`}>
                Information
              </div>
              <div className="p-6">
                <div className="grid grid-cols-[200px_1fr] gap-y-5 gap-x-6">
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Project ID
                  </div>
                  <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    12345
                  </div>

                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Project Name
                  </div>
                  <div className="flex items-center justify-between">
                    <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {projectName}
                    </div>
                    <button className="text-sm text-[#3A7AC2] hover:underline font-medium">
                      Change Name
                    </button>
                  </div>

                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Last Update
                  </div>
                  <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    03 Minutes ago
                  </div>

                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Status Projects
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Progress
                      </span>
                    </div>
                    <button className="text-sm text-[#3A7AC2] hover:underline font-medium">
                      Change Status
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Domain Card */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border transition-colors overflow-hidden`}>
              <div className={`px-6 py-3 ${isDark ? 'bg-yellow-600 text-white' : 'bg-amber-300 text-white'} font-medium`}>
                Custom Domain
              </div>
              <div className="p-6">
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  By default, your site on CMS cmlabs can be reached through a subdomain based on your project name. To make it more, add your own custom domain
                </p>
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    placeholder="Enter Domain" 
                    className={`flex-1 px-4 py-3 rounded-lg border ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <button className="px-6 py-3 bg-[#3A7AC2] text-white rounded-lg hover:bg-[#2F6399] transition-colors font-medium">
                    Custom Domain
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone Card */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border transition-colors overflow-hidden`}>
              <div className={`px-6 py-3 ${isDark ? 'bg-red-600 text-white' : 'bg-red-400 text-white'} font-medium`}>
                Danger Zone
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-red-600 mb-2">Duplicate Projects</h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  You are about to duplicate this project. A new copy will be created with the same content and settings.
                </p>
                <div className="flex items-center gap-3">
                  <button className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                    isDark 
                      ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50' 
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                  }`}>
                    Duplicate
                  </button>
                  <button className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                    Delete Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}