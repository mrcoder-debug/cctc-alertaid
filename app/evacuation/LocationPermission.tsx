'use client';

interface LocationPermissionProps {
  onRequestLocation: () => void;
  isLoading: boolean;
  error: string;
}

export default function LocationPermission({ onRequestLocation, isLoading, error }: LocationPermissionProps) {
  return (
    <div className="px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-6 text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
          <i className="ri-map-pin-2-line text-3xl text-blue-600"></i>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Enable Location Access</h2>
        <p className="text-gray-600 mb-6">
          We need your location to find the nearest evacuation centers and calculate distances accurately.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <button
          onClick={onRequestLocation}
          disabled={isLoading}
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isLoading ? (
            <span className="flex items-center space-x-2">
              <i className="ri-loader-4-line animate-spin"></i>
              <span>Getting Location...</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <i className="ri-map-pin-line"></i>
              <span>Get My Location</span>
            </span>
          )}
        </button>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-information-line text-blue-600"></i>
            </div>
            <div className="text-left">
              <p className="text-blue-800 text-sm font-medium mb-1">Privacy Notice</p>
              <p className="text-blue-700 text-xs">
                Your location is only used to find nearby evacuation centers and is not stored or shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}