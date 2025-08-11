'use client';

import { useState } from 'react';
import AppHeader from '../../components/AppHeader';
import BottomNavigation from '../../components/BottomNavigation';
import GuideCategories from './GuideCategories';
import GuidesList from './GuidesList';

export default function SafetyGuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      
      <main className="pb-20 md:pb-8">
        <div className="bg-red-600 text-white py-6">
          <div className="px-4 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-book-open-line text-2xl"></i>
              </div>
              <h1 className="text-2xl font-bold">Safety Guides & Brochures</h1>
            </div>
            <p className="text-red-100">Complete disaster preparedness guides for Filipino families</p>
          </div>
        </div>

        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <GuideCategories 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            <GuidesList selectedCategory={selectedCategory} />
          </div>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
}