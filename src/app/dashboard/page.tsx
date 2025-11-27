'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sun,
  Moon,
  Menu,
  SlidersHorizontal
} from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  const [isDark, setIsDark] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const pathname = usePathname();

  const statsCards = [
    {
      title: 'Personal Project',
      value: '0',
      icon: '/icons/personal-project.png'
    },
    {
      title: 'Organization Project',
      value: '0',
      icon: '/icons/organization-project.png'
    },
    {
      title: 'Organization',
      value: '0',
      icon: '/icons/organization.png'
    },
    {
      title: 'Collaborator',
      value: '0',
      icon: '/icons/collaborator-project.png'
    },
  ];

  const recentActivity = [
    { name: 'Nama User', email: 'Email User', status: 'active', retained: '5 min ago', role: 'Collaborator' },
    { name: 'Nama User', email: 'Email User', status: 'active', retained: '5 min ago', role: 'Owner' },
    { name: 'Nama User', email: 'Email User', status: 'pending', retained: '5 min ago', role: 'Collaborator' },
    { name: 'Nama User', email: 'Email User', status: 'active', retained: '5 min ago', role: 'Pending' },
    { name: 'Nama User', email: 'Email User', status: 'active', retained: '5 min ago', role: 'Collaborator' },
  ];

  const organizations = [
    { name: 'Nama Organization', time: '03 minutes ago', color: 'bg-blue-100 dark:bg-blue-900/30' },
    { name: 'Nama Organization', time: '03 minutes ago', color: 'bg-green-100 dark:bg-green-900/30' },
    { name: 'Nama Organization', time: '03 minutes ago', color: 'bg-red-100 dark:bg-red-900/30' },
    { name: 'Nama Organization', time: '03 minutes ago', color: 'bg-purple-100 dark:bg-purple-900/30' },
  ];

  const projectData = [
    { step: 'Step 1', value1: 5, value2: 3 },
    { step: 'Step 2', value1: 4, value2: 7 },
    { step: 'Step 3', value1: 6, value2: 4 },
    { step: 'Step 4', value1: 9, value2: 10 },
    { step: 'Step 5', value1: 2, value2: 5 },
    { step: 'Step 6', value1: 7, value2: 2.5 },
    { step: 'Step 7', value1: 6, value2: 4 },
    { step: 'Step 8', value1: 8, value2: 2 },
    { step: 'Step 9', value1: 3, value2: 7 },
  ];

  const deadlineData = [
    {
      label: 'Upcoming',
      value: 45,
      color: 'from-emerald-400 to-green-600',
      iconType: 'trending'
    },
    {
      label: 'Overdue',
      value: 12,
      color: 'from-rose-400 to-red-600',
      iconType: 'overdue'
    },
    {
      label: 'On Track',
      value: 33,
      color: 'from-blue-400 to-indigo-600',
      iconType: 'ontrack'
    },
  ];

  const total = deadlineData.reduce((sum, item) => sum + item.value, 0);

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

        <div className="h-px bg-white mb-6"></div>

        <nav className="flex-1 space-y-2">
          <Link
            href="/dashboard"
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${pathname === '/dashboard' ? 'bg-[#5B8FC9] text-white' : 'text-white hover:bg-white/10'
              }`}
            onClick={() => setActiveMenu('dashboard')}
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
            <p className="text-sm text-blue-100 mb-2 px-4">Organizational</p>

            <Link
              href="/dashboard/organizational-project"
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${pathname === '/dashboard/organizational-project' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setActiveMenu('org-project')}
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

            {/* Project menu item removed as requested */}

            <Link
              href="/dashboard/collaborator"
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${pathname === '/dashboard/collaborator' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setActiveMenu('collaborator')}
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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${pathname === '/dashboard/setting-organization' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setActiveMenu('setting-org')}
            >
              <Image
                src="/icons/setting-organization.png"
                alt="settings"
                width={20}
                height={20}
                className="brightness-0 invert"
              />
              Setting Organization
            </Link>
          </div>

          <div className="pt-4">
            <p className="text-sm text-blue-100 mb-2 px-4">Personal</p>

            <Link
              href="/dashboard/personal-project"
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${pathname === '/dashboard/personal-project' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setActiveMenu('personal-project')}
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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${pathname === '/dashboard/notification' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setActiveMenu('notification')}
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

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-8 py-4 flex items-center justify-between transition-colors`}>
          <div className="flex items-center gap-4">
            <Menu className={isDark ? 'text-gray-300' : 'text-gray-600'} />
            <div className="text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Pages / </span>
              <span className="text-blue-600 font-medium">Dashboard</span>  
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className={`flex items-center gap-2 px-4 py-2 border ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-lg transition-colors`}>
              <SlidersHorizontal size={18} />
              Filter Data
            </button>
            <div className="flex items-center gap-3">
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Welcome Back</span>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>User</span>
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
                </div>
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg transition-all ${isDark
                    ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, idx) => (
              <div key={idx} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-6 shadow-sm border transition-colors`}>
                <div className="flex items-start justify-between mb-4">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={32}
                    height={32}
                    className={isDark ? 'opacity-80' : 'opacity-90'}
                  />
                </div>
                <h3 className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-2`}>{card.title}</h3>
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{card.value}</p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Project Deadlines with SVG Icons */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-6 shadow-sm border transition-colors`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Project Deadlines</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                  {total} Total
                </div>
              </div>

              <div className="space-y-4">
                {deadlineData.map((item, idx) => {
                  const percentage = (item.value / total) * 100;

                  // Icon components
                  const DeadlineIcon = () => {
                    if (item.iconType === 'trending') {
                      return (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                          <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                      );
                    } else if (item.iconType === 'overdue') {
                      return (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                          <line x1="9" y1="14" x2="15" y2="20"></line>
                          <line x1="15" y1="14" x2="9" y2="20"></line>
                        </svg>
                      );
                    } else {
                      return (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                          <polyline points="9 16 11 18 15 14"></polyline>
                        </svg>
                      );
                    }
                  };

                  return (
                    <div key={idx} className="group cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-lg`}>
                            <DeadlineIcon />
                          </div>
                          <span className={`font-medium text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                            {item.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.value}
                          </span>
                          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            ({percentage.toFixed(1)}%)
                          </span>
                        </div>
                      </div>
                      <div className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                          style={{
                            width: `${percentage}%`,
                            animation: `slideIn 1s ease-out ${idx * 0.2}s forwards`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary Card */}
              <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20' : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-xs mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Completion Rate</p>
                    <p className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {((deadlineData[0].value + deadlineData[2].value) / total * 100).toFixed(1)}%
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${isDark ? 'bg-blue-500/20' : 'bg-blue-200'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={isDark ? 'text-blue-400' : 'text-blue-600'}>
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <style>{`
                @keyframes slideIn {
                  from {
                    width: 0%;
                  }
                }
                @keyframes shimmer {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                  animation: shimmer 2s infinite;
                }
              `}</style>
            </div>

            {/* Area Chart */}
            <div className={`col-span-2 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-6 shadow-sm border transition-colors relative overflow-hidden`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Project Progress</h3>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-green-600"></div>
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-600"></div>
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>In Progress</span>
                  </div>
                </div>
              </div>

              <div className="h-64 relative">
                {/* Grid background */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center">
                      <span className={`text-xs w-8 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        {10 - i * 2}
                      </span>
                      <div className={`flex-1 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} border-dashed ml-2`}></div>
                    </div>
                  ))}
                </div>

                {/* Area chart */}
                <svg viewBox="0 0 900 240" className="w-full h-full relative z-10" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Green area (Completed) */}
                  <path
                    d={`M 0 ${240 - (projectData[0].value1 / 10) * 240} ${projectData.map((d, i) =>
                      `L ${(i * 100) + 50} ${240 - (d.value1 / 10) * 240}`
                    ).join(' ')} L 850 240 L 0 240 Z`}
                    fill="url(#greenGradient)"
                    className="transition-all duration-1000"
                    style={{ animation: 'fadeIn 1.5s ease-out forwards' }}
                  />
                  <path
                    d={`M 0 ${240 - (projectData[0].value1 / 10) * 240} ${projectData.map((d, i) =>
                      `L ${(i * 100) + 50} ${240 - (d.value1 / 10) * 240}`
                    ).join(' ')}`}
                    stroke="#10b981"
                    strokeWidth="3"
                    fill="none"
                    filter="url(#glow)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-1000"
                  />

                  {/* Orange area (In Progress) */}
                  <path
                    d={`M 0 ${240 - (projectData[0].value2 / 10) * 240} ${projectData.map((d, i) =>
                      `L ${(i * 100) + 50} ${240 - (d.value2 / 10) * 240}`
                    ).join(' ')} L 850 240 L 0 240 Z`}
                    fill="url(#orangeGradient)"
                    className="transition-all duration-1000"
                    style={{ animation: 'fadeIn 1.5s ease-out 0.3s forwards' }}
                  />
                  <path
                    d={`M 0 ${240 - (projectData[0].value2 / 10) * 240} ${projectData.map((d, i) =>
                      `L ${(i * 100) + 50} ${240 - (d.value2 / 10) * 240}`
                    ).join(' ')}`}
                    stroke="#f59e0b"
                    strokeWidth="3"
                    fill="none"
                    filter="url(#glow)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-1000"
                  />

                  {/* Data points */}
                  {projectData.map((d, i) => (
                    <g key={i}>
                      <circle
                        cx={(i * 100) + 50}
                        cy={240 - (d.value1 / 10) * 240}
                        r="5"
                        fill="#10b981"
                        className="cursor-pointer hover:r-7 transition-all"
                        style={{ animation: `popIn 0.5s ease-out ${i * 0.1 + 1}s forwards`, opacity: 0 }}
                      />
                      <circle
                        cx={(i * 100) + 50}
                        cy={240 - (d.value2 / 10) * 240}
                        r="5"
                        fill="#f59e0b"
                        className="cursor-pointer hover:r-7 transition-all"
                        style={{ animation: `popIn 0.5s ease-out ${i * 0.1 + 1.3}s forwards`, opacity: 0 }}
                      />
                    </g>
                  ))}
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-10 -mb-6">
                  {projectData.map((item, idx) => (
                    <span key={idx} className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {item.step}
                    </span>
                  ))}
                </div>
              </div>

              <style>{`
                @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                @keyframes popIn {
                  0% { opacity: 0; transform: scale(0); }
                  50% { transform: scale(1.2); }
                  100% { opacity: 1; transform: scale(1); }
                }
              `}</style>
            </div>
          </div>

          {/* Bottom Tables */}
          <div className="grid grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className={`col-span-2 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-6 shadow-sm border transition-colors`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Recently Activity</h3>
                <button className="text-blue-600 text-sm hover:underline">Show More</button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className={`text-left text-sm ${isDark ? 'text-gray-400 border-gray-700' : 'text-gray-600 border-gray-200'} border-b`}>
                    <th className="pb-3 font-medium">Collaborator</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Retained</th>
                    <th className="pb-3 font-medium">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((activity, idx) => (
                    <tr key={idx} className={`${isDark ? 'border-gray-700' : 'border-gray-200'} border-b last:border-b-0`}>
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                          <div>
                            <p className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{activity.name}</p>
                            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{activity.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${activity.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                          {activity.status}
                        </span>
                      </td>
                      <td className={`py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{activity.retained}</td>
                      <td className={`py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{activity.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* List Organization */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-xl p-6 shadow-sm border transition-colors`}>
              <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>List Organization</h3>
              <div className="space-y-3">
                {organizations.map((org, idx) => (
                  <div key={idx} className={`${org.color} rounded-lg p-4 transition-colors`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/50"></div>
                      <div>
                        <p className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{org.name}</p>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{org.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}