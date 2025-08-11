
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      icon: 'ri-home-line',
      activeIcon: 'ri-home-fill',
      label: 'Home'
    },
    {
      href: '/evacuation',
      icon: 'ri-map-pin-line',
      activeIcon: 'ri-map-pin-fill',
      label: 'Evacuation'
    },
    {
      href: '/emergency-contacts',
      icon: 'ri-phone-line',
      activeIcon: 'ri-phone-fill',
      label: 'Emergency'
    },
    // {
    //   href: '/safety-news',
    //   icon: 'ri-news-line',
    //   activeIcon: 'ri-news-fill',
    //   label: 'News'
    // },
    {
      href: '/safety-guides',
      icon: 'ri-book-open-line',
      activeIcon: 'ri-book-open-fill',
      label: 'Guides'
    },
    {
      href: '/emergency-kit',
      icon: 'ri-briefcase-line',
      activeIcon: 'ri-briefcase-fill',
      label: 'Kit'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? 'text-red-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center mb-1">
                <i className={`${isActive ? item.activeIcon : item.icon} text-lg`}></i>
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
