
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home', icon: 'ri-home-line' },
    { href: '/evacuation', label: 'Evacuation Centers', icon: 'ri-map-pin-line' },
    { href: '/emergency-contacts', label: 'Emergency Contacts', icon: 'ri-phone-line' },
    // { href: '/safety-news/', label: 'Safety News', icon: 'ri-news-line' },
    { href: '/safety-guides', label: 'Safety Guides', icon: 'ri-book-open-line' },
    { href: '/emergency-kit', label: 'Emergency Kit', icon: 'ri-briefcase-line' }
  ];

  return (
    <header className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <i className="ri-shield-check-fill text-red-600 text-xl"></i>
            </div>
            <span className="text-xl font-bold font-['Arial']">AlertAid</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link 
              href="/emergency-contacts" 
              className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap hidden sm:block"
            >
              🆘 Emergency: 911
            </Link>
            
            <button
              onClick={toggleMenu}
              className="w-10 h-10 flex items-center justify-center hover:bg-red-700 rounded-lg transition-colors"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 pb-2">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 hover:bg-red-700 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
