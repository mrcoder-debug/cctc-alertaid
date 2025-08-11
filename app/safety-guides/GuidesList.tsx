'use client';

import { useMemo, useState } from 'react';
import GuideModal from './GuideModal';

interface SafetyGuide {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: number;
  lastUpdated: string;
  coverImage: string;
  steps: {
    title: string;
    content: string;
    icon?: string;
  }[];
  tips: string[];
  source: string;
}

interface GuidesListProps {
  selectedCategory: string;
}

export default function GuidesList({ selectedCategory }: GuidesListProps) {
  const [selectedGuide, setSelectedGuide] = useState<SafetyGuide | null>(null);

  const safetyGuides: SafetyGuide[] = [
    {
      id: '1',
      title: 'Typhoon Preparedness: Complete Family Guide',
      description: 'Comprehensive guide on preparing your family and home for typhoon season, including emergency supplies, evacuation planning, and post-storm safety.',
      category: 'typhoon',
      difficulty: 'beginner',
      readTime: 12,
      lastUpdated: '2024-12-15',
      source: 'PAGASA & NDRRMC',
      coverImage: 'https://readdy.ai/api/search-image?query=Filipino%20family%20preparing%20for%20typhoon%20with%20emergency%20supplies%2C%20boarding%20up%20windows%2C%20securing%20outdoor%20items%2C%20storm%20preparation%20scene%20with%20safety%20equipment%20and%20protective%20measures&width=400&height=250&seq=typhoon_prep1&orientation=landscape',
      steps: [
        {
          title: 'Monitor Weather Updates',
          content: 'Stay tuned to PAGASA weather bulletins and local radio/TV stations for the latest typhoon updates and warnings.',
          icon: 'ri-radio-line'
        },
        {
          title: 'Secure Your Home',
          content: 'Board up windows, secure loose outdoor items, trim tree branches, and check roof for loose tiles or sheets.',
          icon: 'ri-home-line'
        },
        {
          title: 'Prepare Emergency Supplies',
          content: 'Stock up on 3 days worth of food, water, medications, flashlights, batteries, and important documents in waterproof bags.',
          icon: 'ri-flashlight-line'
        },
        {
          title: 'Plan Evacuation Routes',
          content: 'Know your designated evacuation center, plan multiple routes, and keep vehicle fueled and ready.',
          icon: 'ri-route-line'
        },
        {
          title: 'During the Typhoon',
          content: 'Stay indoors, avoid windows, do not go out during the eye of the storm, and listen for official announcements.',
          icon: 'ri-shield-line'
        }
      ],
      tips: [
        'Keep emergency kit in waterproof container',
        'Charge all devices before power outage',
        'Store at least 1 gallon of water per person per day',
        'Have cash on hand as ATMs may not work',
        'Keep first aid kit easily accessible'
      ]
    },
    {
      id: '2',
      title: 'Earthquake Safety: Drop, Cover, and Hold On',
      description: 'Essential earthquake safety procedures for during, before, and after seismic events. Learn the proper response techniques and home safety measures.',
      category: 'earthquake',
      difficulty: 'beginner',
      readTime: 8,
      lastUpdated: '2024-12-14',
      source: 'PHIVOLCS & NDRRMC',
      coverImage: 'https://readdy.ai/api/search-image?query=Earthquake%20safety%20demonstration%20showing%20people%20practicing%20drop%20cover%20hold%20on%20technique%2C%20earthquake%20preparedness%20training%20in%20Philippine%20setting%20with%20safety%20instructors%20and%20participants&width=400&height=250&seq=earthquake_prep1&orientation=landscape',
      steps: [
        {
          title: 'During Shaking: Drop',
          content: 'Immediately drop to hands and knees wherever you are. This protects you from falling.',
          icon: 'ri-arrow-down-line'
        },
        {
          title: 'Take Cover',
          content: 'Take cover under a sturdy desk or table. If none available, cover head and neck with arms.',
          icon: 'ri-shield-check-line'
        },
        {
          title: 'Hold On',
          content: 'Hold on to your shelter and protect your head. Be prepared to move with it.',
          icon: 'ri-hand-heart-line'
        },
        {
          title: 'If Outdoors',
          content: 'Move away from buildings, power lines, and trees. Drop to the ground and protect your head.',
          icon: 'ri-run-line'
        },
        {
          title: 'After Shaking Stops',
          content: 'Check for injuries and hazards. Be prepared for aftershocks. Exit building if damaged.',
          icon: 'ri-search-eye-line'
        }
      ],
      tips: [
        'Never run during an earthquake',
        'Do not stand in doorways',
        'Stay away from glass and heavy objects',
        'Practice earthquake drills regularly',
        'Secure heavy furniture to walls'
      ]
    },
    {
      id: '3',
      title: 'Flood Emergency Response Guide',
      description: 'Complete flood safety guide covering urban and rural flood scenarios, evacuation procedures, and water safety during flood emergencies.',
      category: 'flood',
      difficulty: 'intermediate',
      readTime: 10,
      lastUpdated: '2024-12-13',
      source: 'MMDA & Local LGUs',
      coverImage: 'https://readdy.ai/api/search-image?query=Flood%20emergency%20response%20showing%20rescue%20personnel%20helping%20evacuate%20families%20from%20flooded%20area%2C%20emergency%20boats%20and%20safety%20equipment%2C%20Filipino%20rescue%20workers%20in%20action%20during%20flood%20disaster&width=400&height=250&seq=flood_prep1&orientation=landscape',
      steps: [
        {
          title: 'Monitor Flood Warnings',
          content: 'Stay alert to flood warnings from local authorities and weather services. Know your areas flood risk level.',
          icon: 'ri-alarm-warning-line'
        },
        {
          title: 'Evacuate Early',
          content: 'When advised to evacuate, do so immediately. Dont wait for water levels to rise further.',
          icon: 'ri-run-line'
        },
        {
          title: 'Water Safety Rules',
          content: 'Never walk, swim, or drive through flood waters. Just 6 inches can knock you down.',
          icon: 'ri-forbid-line'
        },
        {
          title: 'Higher Ground',
          content: 'Move to higher ground immediately. If trapped, go to highest floor and signal for help.',
          icon: 'ri-arrow-up-line'
        },
        {
          title: 'After the Flood',
          content: 'Wait for authorities to declare area safe. Avoid flood water and damaged electrical systems.',
          icon: 'ri-checkbox-circle-line'
        }
      ],
      tips: [
        'Turn around, dont drown - avoid flooded roads',
        'Keep emergency kit on upper floors',
        'Have multiple communication methods',
        'Know location of nearest evacuation center',
        'Document property damage with photos'
      ]
    },
    {
      id: '4',
      title: 'Fire Safety and Evacuation Procedures',
      description: 'Comprehensive fire safety guide for homes and buildings, including prevention, detection, escape planning, and firefighting basics.',
      category: 'fire',
      difficulty: 'beginner',
      readTime: 9,
      lastUpdated: '2024-12-12',
      source: 'Bureau of Fire Protection',
      coverImage: 'https://readdy.ai/api/search-image?query=Fire%20safety%20demonstration%20with%20Filipino%20family%20practicing%20escape%20routes%2C%20fire%20extinguisher%20training%2C%20home%20fire%20safety%20equipment%20including%20smoke%20detectors%20and%20fire%20blankets%2C%20professional%20safety%20training%20scene&width=400&height=250&seq=fire_prep1&orientation=landscape',
      steps: [
        {
          title: 'Install Smoke Detectors',
          content: 'Install smoke detectors on every level of your home. Test monthly and change batteries annually.',
          icon: 'ri-alarm-line'
        },
        {
          title: 'Plan Escape Routes',
          content: 'Plan and practice two escape routes from every room. Designate a meeting point outside.',
          icon: 'ri-map-pin-line'
        },
        {
          title: 'If Fire Starts',
          content: 'Alert everyone immediately. If fire is small, use extinguisher. If large, evacuate immediately.',
          icon: 'ri-fire-line'
        },
        {
          title: 'Escape Safely',
          content: 'Crawl low under smoke. Feel doors before opening. Once out, stay out and call 117.',
          icon: 'ri-door-line'
        },
        {
          title: 'If Trapped',
          content: 'Close doors between you and fire. Seal cracks with cloth. Signal for help from window.',
          icon: 'ri-window-line'
        }
      ],
      tips: [
        'Keep fire extinguisher in kitchen and bedrooms',
        'Teach children to stop, drop, and roll',
        'Never use elevator during fire emergency',
        'Keep important documents in fireproof safe',
        'Practice fire drill every 6 months'
      ]
    },
    {
      id: '5',
      title: 'Volcanic Eruption Safety Protocol',
      description: 'Safety measures for volcanic eruptions including ash fall protection, evacuation zones, and health precautions during volcanic activity.',
      category: 'volcano',
      difficulty: 'intermediate',
      readTime: 11,
      lastUpdated: '2024-12-11',
      source: 'PHIVOLCS',
      coverImage: 'https://readdy.ai/api/search-image?query=Volcanic%20eruption%20preparedness%20showing%20people%20wearing%20masks%20and%20protective%20gear%2C%20volcanic%20ash%20safety%20equipment%2C%20emergency%20supplies%20for%20volcano%20evacuation%2C%20Philippine%20volcanic%20safety%20measures&width=400&height=250&seq=volcano_prep1&orientation=landscape',
      steps: [
        {
          title: 'Know Alert Levels',
          content: 'Understand PHIVOLCs 5-level alert system. Be ready to evacuate when Level 4 is declared.',
          icon: 'ri-error-warning-line'
        },
        {
          title: 'Protect from Ash',
          content: 'Wear N95 masks, goggles, and long sleeves. Keep doors and windows closed during ash fall.',
          icon: 'ri-shield-line'
        },
        {
          title: 'Evacuation Preparation',
          content: 'Know your areas danger zone classification. Prepare go-bag with essentials for immediate evacuation.',
          icon: 'ri-luggage-cart-line'
        },
        {
          title: 'During Eruption',
          content: 'Follow evacuation orders immediately. Avoid river valleys and low-lying areas prone to lahars.',
          icon: 'ri-map-pin-range-line'
        },
        {
          title: 'Health Precautions',
          content: 'Avoid outdoor activities during ash fall. Seek medical help if experiencing respiratory problems.',
          icon: 'ri-heart-pulse-line'
        }
      ],
      tips: [
        'Stock N95 masks for whole family',
        'Protect vehicles from ash with covers',
        'Store extra water - ash contaminates supply',
        'Have battery-powered radio for updates',
        'Keep roof clear of ash accumulation'
      ]
    },
    {
      id: '6',
      title: 'Building Your Emergency Kit',
      description: 'Complete checklist and guide for assembling a comprehensive emergency kit for Filipino families, including storage tips and maintenance.',
      category: 'general',
      difficulty: 'beginner',
      readTime: 15,
      lastUpdated: '2024-12-10',
      source: 'Philippine Red Cross',
      coverImage: 'https://readdy.ai/api/search-image?query=Complete%20emergency%20kit%20display%20with%20organized%20supplies%20including%20water%2C%20food%2C%20first%20aid%2C%20flashlight%2C%20radio%2C%20batteries%2C%20and%20documents%2C%20professional%20emergency%20preparedness%20setup%20for%20Filipino%20families&width=400&height=250&seq=kit_prep1&orientation=landscape',
      steps: [
        {
          title: 'Water Storage',
          content: 'Store 1 gallon per person per day for 3 days minimum. Use clean containers and rotate every 6 months.',
          icon: 'ri-drop-line'
        },
        {
          title: 'Food Supplies',
          content: 'Non-perishable food for 3 days. Include canned goods, dried fruits, crackers, and baby food if needed.',
          icon: 'ri-restaurant-line'
        },
        {
          title: 'First Aid Kit',
          content: 'Include bandages, antiseptic, medications, thermometer, and emergency contact information.',
          icon: 'ri-first-aid-kit-line'
        },
        {
          title: 'Tools and Supplies',
          content: 'Flashlight, battery radio, extra batteries, whistle, plastic sheeting, duct tape, matches.',
          icon: 'ri-tools-line'
        },
        {
          title: 'Important Documents',
          content: 'Copies of IDs, insurance papers, bank records, and emergency contact list in waterproof container.',
          icon: 'ri-file-list-line'
        }
      ],
      tips: [
        'Check and rotate supplies every 6 months',
        'Keep kit in easily accessible location',
        'Include comfort items for children',
        'Have smaller kits for car and workplace',
        'Consider special needs of elderly or disabled'
      ]
    }
  ];

  const filteredGuides = useMemo(() => {
    if (selectedCategory === 'all') return safetyGuides;
    return safetyGuides.filter(guide => guide.category === selectedCategory);
  }, [selectedCategory]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'typhoon': return 'ri-typhoon-line';
      case 'earthquake': return 'ri-earthquake-line';
      case 'flood': return 'ri-flood-line';
      case 'fire': return 'ri-fire-line';
      case 'volcano': return 'ri-mountain-line';
      case 'general': return 'ri-shield-check-line';
      default: return 'ri-book-open-line';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-PH', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <div className="space-y-6">
        {filteredGuides.map((guide) => (
          <article 
            key={guide.id} 
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedGuide(guide)}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={guide.coverImage}
                  alt={guide.title}
                  className="w-full h-48 md:h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6 md:w-2/3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`${getCategoryIcon(guide.category)} text-red-600`}></i>
                    </div>
                    <span className="text-sm text-gray-600 capitalize">{guide.category}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty.toUpperCase()}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {guide.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-time-line"></i>
                      </div>
                      <span>{guide.readTime} min read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-calendar-line"></i>
                      </div>
                      <span>Updated {formatDate(guide.lastUpdated)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-building-line"></i>
                      </div>
                      <span>{guide.source}</span>
                    </div>
                  </div>
                  
                  <button className="text-red-600 hover:text-red-700 font-medium whitespace-nowrap">
                    Read Guide →
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
              <i className="ri-book-open-line text-2xl text-gray-400"></i>
            </div>
            <p className="text-gray-500">No safety guides found for the selected category.</p>
          </div>
        )}
      </div>

      {selectedGuide && (
        <GuideModal 
          guide={selectedGuide} 
          onClose={() => setSelectedGuide(null)} 
        />
      )}
    </>
  );
}