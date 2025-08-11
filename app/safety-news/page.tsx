'use client';

import { useState } from 'react';
import AppHeader from '../../components/AppHeader';
import BottomNavigation from '../../components/BottomNavigation';
import NewsList from './NewsList';
import NewsFilters from './NewsFilters';


export default function SafetyNewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      
      <main className="pb-20 md:pb-8">
        <div className="bg-red-600 text-white py-6">
          <div className="px-4 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-news-line text-2xl"></i>
              </div>
              <h1 className="text-2xl font-bold">Safety News</h1>
            </div>
            <p className="text-red-100">Latest disaster updates and safety information</p>
          </div>
        </div>

        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <NewsFilters 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            <NewsList selectedCategory={selectedCategory} />
          </div>
        </div>

        
      </main>

      <BottomNavigation />
    </div>
  );
}