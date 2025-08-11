
'use client';

import { useState, useEffect } from 'react';

interface WeatherAlert {
  id: string;
  type: 'typhoon' | 'flood' | 'earthquake' | 'landslide';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
  location: string;
}

export default function WeatherAlert() {
  const [alerts, setAlerts] = useState<WeatherAlert[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mockAlerts: WeatherAlert[] = [
      {
        id: '1',
        type: 'typhoon',
        title: 'Typhoon Alert - Signal No. 2',
        description: 'Tropical Cyclone Wind Signal No. 2 is raised over Cebu City and nearby provinces.',
        severity: 'high',
        timestamp: new Date().toISOString(),
        location: 'Cebu City'
      }
    ];
    setAlerts(mockAlerts);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 border-red-500 text-red-800';
      case 'medium': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      default: return 'bg-blue-100 border-blue-500 text-blue-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'typhoon': return 'ri-typhoon-line';
      case 'flood': return 'ri-flood-line';
      case 'earthquake': return 'ri-earthquake-line';
      case 'landslide': return 'ri-landscape-line';
      default: return 'ri-alert-line';
    }
  };

  if (!isVisible || alerts.length === 0) return null;

  return (
    <div className="px-4 py-4">
      <div className="max-w-4xl mx-auto">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border-l-4 p-4 rounded-lg mb-4 ${getSeverityColor(alert.severity)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`${getTypeIcon(alert.type)} text-xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1">{alert.title}</h3>
                  <p className="text-sm mb-2">{alert.description}</p>
                  <div className="flex items-center text-xs space-x-4">
                    <span className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-map-pin-line"></i>
                      </div>
                      {alert.location}
                    </span>
                    <span className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-time-line"></i>
                      </div>
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
