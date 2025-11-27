'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Sun,
  Moon,
  Menu,
  Filter,
  Search,
  Plus,
  Trash2
} from 'lucide-react';
import Image from 'next/image';

export default function CollaboratorPage() {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const collaborators = [
    {
      id: 1,
      name: 'Afrizal Septian',
      badge: 'Owner',
      badgeColor: 'bg-blue-600 text-white',
      status: 'Active',
      statusColor: 'green',
      role: 'Owner'
    },
    {
      id: 2,
      name: 'Dodo Santoso',
      badge: 'Collaborator',
      badgeColor: 'bg-amber-400 text-gray-900',
      status: 'Active',
      statusColor: 'green',
      role: 'Collaborator'
    },
    {
      id: 3,
      name: 'Kuki Keke',
      badge: 'Collaborator',
      badgeColor: 'bg-amber-400 text-gray-900',
      status: 'Pending',
      statusColor: 'yellow',
      role: 'Pending'
    },
    {
      id: 4,
      name: 'Aji',
      badge: 'Collaborator',
      badgeColor: 'bg-amber-400 text-gray-900',
      status: 'Active',
      statusColor: 'green',
      role: 'Collaborator'
    }
  ];

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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === '/dashboard/collaborator' 
                  ? 'bg-[#5B8FC9] text-white font-medium' 
                  : 'text-white hover:bg-white/10'
              }`}
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

        {/* Logout removed per request */}
      </aside>

      <main className="flex-1 overflow-auto flex flex-col">
        {/* Top Navigation Bar */}
        <header className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-8 py-4`}>
          <div className="flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <Menu className={isDark ? 'text-gray-400' : 'text-gray-600'} size={20} />
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Pages /</span>
              <span className="text-blue-600 font-medium">Collaborator</span>
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
          {/* Page Title and Actions */}
          <div className="mb-8">
            <h1 className={`text-3xl font-bold mb-6 ${isDark ? 'text-blue-400' : 'text-[#3A7AC2]'}`}>
              Collaborator
            </h1>
            
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className={`flex-1 relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm`}>
                <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
                <input
                  type="text"
                  placeholder="Search Collaborator"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              {/* Add Button */}
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium">
                <Plus size={20} />
                Add Collaborator
              </button>
            </div>
          </div>

          {/* Collaborator Table */}
          <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border overflow-hidden`}>
            {/* Table Header */}
            <div className={`grid grid-cols-[2fr_1.5fr_1fr_1fr_0.5fr] gap-4 px-6 py-4 ${
              isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-700'
            } font-semibold text-sm`}>
              <div>Collaborator Name</div>
              <div></div>
              <div>Status</div>
              <div>Role</div>
              <div>Action</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {collaborators.map((collaborator) => (
                <div 
                  key={collaborator.id}
                  className={`grid grid-cols-[2fr_1.5fr_1fr_1fr_0.5fr] gap-4 px-6 py-4 items-center ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  } transition-colors`}
                >
                  {/* Collaborator Name */}
                  <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {collaborator.name}
                  </div>

                  {/* Badge */}
                  <div>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${collaborator.badgeColor}`}>
                      {collaborator.badge}
                    </span>
                  </div>

                  {/* Status */}
                  <div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        collaborator.statusColor === 'green' ? 'bg-green-500' :
                        collaborator.statusColor === 'yellow' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}></div>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {collaborator.status}
                      </span>
                    </div>
                  </div>

                  {/* Role */}
                  <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {collaborator.role}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-center">
                    <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}