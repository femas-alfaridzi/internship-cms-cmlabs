'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Sun,
  Moon,
  Menu,
  SlidersHorizontal,
  Search,
  Plus,
  Trash2,
  MoreVertical
} from 'lucide-react';
import Image from 'next/image';

export default function OrganizationalProjectPage() {
  const [isDark, setIsDark] = useState(false);
  const [activeMenu, setActiveMenu] = useState('org-project');
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const organizations = [
    {
      id: 'cms',
      name: 'CMS Alpha',
      collaborators: [
        { avatar: '/avatars/user1.png' },
        { avatar: '/avatars/user2.png' },
        { avatar: '/avatars/user3.png' },
      ],
      extraCount: 1,
      status: 'Owner',
      statusColor: 'green'
    },
    {
      id: 'cms',
      name: 'CMS Beta',
      collaborators: [
        { avatar: '/avatars/user1.png' },
        { avatar: '/avatars/user2.png' },
      ],
      extraCount: 2,
      status: 'Collaborator',
      statusColor: 'yellow'
    },
    {
      id: 'cms',
      name: 'CMS Gamma',
      collaborators: [
        { avatar: '/avatars/user2.png' },
        { avatar: '/avatars/user3.png' },
      ],
      extraCount: 1,
      status: 'Owner',
      statusColor: 'green'
    },
    {
      id: 'cms',
      name: 'CMS Delta',
      collaborators: [
        { avatar: '/avatars/user1.png' },
      ],
      extraCount: 0,
      status: 'Owner',
      statusColor: 'green'
    },
    {
      id: 'cms',
      name: 'CMS Epsilon',
      collaborators: [
        { avatar: '/avatars/user3.png' },
      ],
      extraCount: 3,
      status: 'Collaborator',
      statusColor: 'yellow'
    },
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
          <h1 className="text-xl font-bold"><span className="text-[#3A7AC2]">CMS</span> Project</h1>
        </div>

        <div className="h-px bg-white mb-6"></div>

        <nav className="flex-1 space-y-2">
          <Link
            href="/dashboard"
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
              pathname === '/dashboard' ? 'bg-[#5B8FC9] text-white' : 'text-white hover:bg-white/10'
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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === '/dashboard/organizational-project' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
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
            
            <Link
              href="/dashboard/collaborator"
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === '/dashboard/collaborator' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === '/dashboard/setting-organization' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === '/dashboard/personal-project' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
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
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === '/dashboard/notification' ? 'bg-[#5B8FC9] text-white font-medium' : 'text-white hover:bg-white/10'
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
              <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Organizational Project</span>
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
            <h1 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-[#3A7AC2]'}`}>
              Organizational Project
            </h1>
            
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className={`flex-1 relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm`}>
                <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
                <input
                  type="text"
                  placeholder="Search Organizational Project"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              {/* Create Button */}
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium">
                <Plus size={20} />
                Create Organization
              </button>

              {/* View Toggle */}
              <button className={`p-3 rounded-lg border ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' 
                  : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
              } transition-colors`}>
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Organizations Table */}
          <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-sm border transition-colors overflow-hidden`}>
            <table className="w-full">
              <thead>
                <tr className={`${isDark ? 'bg-gray-750 border-gray-700' : 'bg-gray-50 border-gray-200'} border-b`}>
                  <th className={`text-left px-6 py-4 font-semibold text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Organizational
                  </th>
                  <th className={`text-left px-6 py-4 font-semibold text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Collaborator
                  </th>
                  <th className={`text-left px-6 py-4 font-semibold text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Status
                  </th>
                  <th className={`text-left px-6 py-4 font-semibold text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {organizations.map((org, idx) => (
                  <tr 
                    key={idx} 
                    className={`${isDark ? 'border-gray-700 hover:bg-gray-750' : 'border-gray-200 hover:bg-gray-50'} border-b last:border-b-0 transition-colors`}
                  >
                    {/* Organization Name */}
                    <td className="px-6 py-4">
                      {org.name.startsWith('CMS ') ? (
                        <span className="font-medium">
                          <span className={isDark ? 'text-white' : 'text-[#3A7AC2]'}>CMS</span>
                          <span className={`${isDark ? 'text-white' : 'text-[#3A7AC2]'} ml-1`}>{org.name.slice(4)}</span>
                        </span>
                      ) : (
                        <span className={`font-medium ${isDark ? 'text-white' : 'text-[#3A7AC2]'}`}>{org.name}</span>
                      )}
                    </td>

                    {/* Collaborators */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {org.collaborators.map((collab, cidx) => (
                            <div 
                              key={cidx} 
                              className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white dark:border-gray-800"
                            ></div>
                          ))}
                        </div>
                        <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          +{org.extraCount}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                        org.statusColor === 'green'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          org.statusColor === 'green' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        {org.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className={`p-2 rounded-lg transition-colors ${
                          isDark 
                            ? 'text-red-400 hover:bg-red-900/30' 
                            : 'text-red-600 hover:bg-red-50'
                        }`}>
                          <Trash2 size={18} />
                        </button>
                        <Link
                          href={`/dashboard/organizational-project/${org.id}`}
                          className={`p-2 rounded-lg transition-colors ${
                            isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <MoreVertical size={18} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}