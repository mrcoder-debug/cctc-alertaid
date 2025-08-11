
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative bg-gradient-to-br from-red-600 to-red-800 text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.8), rgba(153, 27, 27, 0.8)), url('https://readdy.ai/api/search-image?query=Filipino%20family%20preparing%20emergency%20kit%2C%20disaster%20preparedness%2C%20modern%20home%20setting%2C%20natural%20lighting%2C%20warm%20atmosphere%2C%20emergency%20supplies%20visible%2C%20safety%20equipment%2C%20clean%20organized%20space%2C%20hope%20and%20preparation%20theme&width=1200&height=600&seq=hero-disaster-prep&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Stay Safe, Stay Prepared
          </h1>
          <p className="text-lg md:text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Your trusted companion for disaster preparedness in the Philippines. Get real-time alerts, find evacuation centers, and access emergency contacts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/evacuation"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
            >
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                <i className="ri-map-pin-line"></i>
              </div>
              Find Evacuation Centers
            </Link>
            <Link 
              href="/emergency-contacts"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
            >
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                <i className="ri-phone-line"></i>
              </div>
              Emergency Hotlines
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
