'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Sun, Moon } from 'lucide-react';
import Image from 'next/image';

export default function NotificationPage() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  return (
    <div className={`flex h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <aside className="w-72 bg-[#3A7AC3] text-white p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
            <Image src="/images/logo.png" alt="CMS Logo" width={48} height={48} className="object-contain" />
          </div>
          <h1 className="text-xl font-bold">CMS Project</h1>
        </div>

        <div className="h-px bg-white mb-6"></div>

        <nav className="flex-1 space-y-2">
          <Link href="/dashboard" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === '/dashboard' ? 'bg-[#5B8FC9]' : 'hover:bg-white/10'}`}>
            <Image src="/icons/dashboard.png" alt="dashboard" width={20} height={20} className="brightness-0 invert" />
            Dashboard
          </Link>

          <div className="pt-4">
            <p className="text-sm text-blue-100 mb-2 px-4">Organizational</p>
            <Link href="/dashboard/organizational-project" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === '/dashboard/organizational-project' ? 'bg-[#5B8FC9]' : 'hover:bg-white/10'}`}>
              <Image src="/icons/organizational-project.png" alt="org project" width={20} height={20} className="brightness-0 invert" />
              Organizational Project
            </Link>
            <Link href="/dashboard/collaborator" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === '/dashboard/collaborator' ? 'bg-[#5B8FC9]' : 'hover:bg-white/10'}`}>
              <Image src="/icons/collaborator.png" alt="collaborator" width={20} height={20} className="brightness-0 invert" />
              Collaborator
            </Link>
            <Link href="/dashboard/setting-organization" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === '/dashboard/setting-organization' ? 'bg-[#5B8FC9]' : 'hover:bg-white/10'}`}>
              <Image src="/icons/setting-organization.png" alt="settings" width={20} height={20} className="brightness-0 invert" />
              Setting Organization
            </Link>
          </div>

          <div className="pt-4">
            <p className="text-sm text-blue-100 mb-2 px-4">Personal</p>
            <Link href="/dashboard/personal-project" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === '/dashboard/personal-project' ? 'bg-[#5B8FC9]' : 'hover:bg-white/10'}`}>
              <Image src="/icons/personal-project.png" alt="personal project" width={20} height={20} className="brightness-0 invert" />
              Personal Project
            </Link>
            <Link href="/dashboard/notification" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${pathname === '/dashboard/notification' ? 'bg-[#5B8FC9]' : 'hover:bg-white/10'}`}>
              <Image src="/icons/notification.png" alt="notification" width={20} height={20} className="brightness-0 invert" />
              Notification
            </Link>
          </div>
        </nav>
      </aside>

      <main className="flex-1 overflow-auto p-8">
        <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-8 py-4 flex items-center justify-between transition-colors`}>
          <div className="flex items-center gap-4">
            <Menu className={isDark ? 'text-gray-300' : 'text-gray-600'} />
            <div className="text-sm"><span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Pages / </span><span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Notification</span></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Welcome Back</span>
              <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-lg ${isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Notification</h1>
          <p className="text-sm text-gray-600">This is a placeholder page for Notification. Replace with real content as needed.</p>
        </div>
      </main>
    </div>
  );
}
