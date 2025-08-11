
'use client';

import AppHeader from '../components/AppHeader';
import BottomNavigation from '../components/BottomNavigation';
import HeroSection from './components/HeroSection';
import QuickActions from './components/QuickActions';
import WeatherAlert from './components/WeatherAlert';
import SafetyTips from './components/SafetyTips';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      
      <main className="pb-20 md:pb-8">
        <HeroSection />
        <WeatherAlert />
        <QuickActions />
        <SafetyTips />
      </main>

      <BottomNavigation />
    </div>
  );
}
