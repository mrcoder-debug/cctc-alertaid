
'use client';

import Link from 'next/link';

interface QuickAction {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export default function QuickActions() {
  const quickActions: QuickAction[] = [
    {
      title: 'Evacuation Centers',
      description: 'Find nearest evacuation sites',
      icon: 'ri-map-pin-line',
      href: '/evacuation',
      color: 'bg-blue-500'
    },
    {
      title: 'Emergency Contacts',
      description: 'Access important hotlines',
      icon: 'ri-phone-line',
      href: '/emergency-contacts',
      color: 'bg-red-500'
    },
    {
      title: 'Safety News',
      description: 'Latest disaster updates',
      icon: 'ri-news-line',
      href: '/safety-news',
      color: 'bg-green-500'
    },
    {
      title: 'Emergency Kit',
      description: 'Prepare your disaster kit',
      icon: 'ri-first-aid-kit-line',
      href: '/emergency-kit',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Quick Actions
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-center">
                <div className={`${action.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${action.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
