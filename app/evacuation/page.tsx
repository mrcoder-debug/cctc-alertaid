'use client';

import { useState, useEffect } from 'react';
import AppHeader from '../../components/AppHeader';
import BottomNavigation from '../../components/BottomNavigation';
import EvacuationList from './EvacuationList';
import LocationPermission from './LocationPermission';

export default function EvacuationPage() {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [locationError, setLocationError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by this browser');
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setLocationError('');
        setIsLoading(false);
      },
      (error) => {
        setLocationError('Unable to retrieve your location. Please enable location services.');
        setIsLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      
      <main className="pb-20 md:pb-8">
        <div className="bg-red-600 text-white py-6">
          <div className="px-4 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-map-pin-line text-2xl"></i>
              </div>
              <h1 className="text-2xl font-bold">Evacuation Centers</h1>
            </div>
            <p className="text-red-100">Find the nearest evacuation centers in your area</p>
          </div>
        </div>

        {!userLocation ? (
          <LocationPermission 
            onRequestLocation={requestLocation}
            isLoading={isLoading}
            error={locationError}
          />
        ) : (
          <EvacuationList userLocation={userLocation} />
        )}
      </main>

      <BottomNavigation />
    </div>
  );
}