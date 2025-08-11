'use client';

import { useState } from 'react';
import AppHeader from '../../components/AppHeader';
import BottomNavigation from '../../components/BottomNavigation';
import KitCategories from './KitCategories';
import KitChecklist from './KitChecklist';
import FamilyPlan from './FamilyPlan';

type TabType = 'checklist' | 'categories' | 'plan';

export default function EmergencyKitPage() {
  const [activeTab, setActiveTab] = useState<TabType>('checklist');

  const tabs = [
    { id: 'checklist', label: 'Kit Checklist', icon: 'ri-checkbox-line' },
    { id: 'categories', label: 'Categories', icon: 'ri-grid-line' },
    { id: 'plan', label: 'Family Plan', icon: 'ri-team-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      
      <main className="pb-20 md:pb-8">
        <div className="bg-red-600 text-white py-6">
          <div className="px-4 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-first-aid-kit-line text-2xl"></i>
              </div>
              <h1 className="text-2xl font-bold">Emergency Kit</h1>
            </div>
            <p className="text-red-100">Prepare your disaster emergency supplies and family plan</p>
          </div>
        </div>

        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-1 mb-6">
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-red-600 text-white'
                        : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className={tab.icon}></i>
                    </div>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'checklist' && <KitChecklist />}
            {activeTab === 'categories' && <KitCategories />}
            {activeTab === 'plan' && <FamilyPlan />}
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}