'use client';

interface KitCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  items: string[];
  tips: string[];
}

export default function KitCategories() {
  const categories: KitCategory[] = [
    {
      id: '1',
      name: 'Water & Food',
      description: 'Essential sustenance for survival',
      icon: 'ri-drop-line',
      color: 'bg-blue-500',
      items: [
        'Water (1 gallon per person per day for 3 days)',
        'Non-perishable food (canned goods, dried fruits, nuts)',
        'Manual can opener',
        'Paper plates, cups, plastic utensils',
        'Water purification tablets'
      ],
      tips: [
        'Store water in clean containers',
        'Rotate food supplies every 6 months',
        'Consider dietary restrictions and allergies'
      ]
    },
    {
      id: '2',
      name: 'Medical Supplies',
      description: 'First aid and medical essentials',
      icon: 'ri-first-aid-kit-line',
      color: 'bg-red-500',
      items: [
        'First aid kit with bandages, gauze, tape',
        'Prescription medications (7-day supply)',
        'Over-the-counter medications',
        'Thermometer',
        'Medical alert tags/bracelets'
      ],
      tips: [
        'Check expiration dates regularly',
        'Include medications for all family members',
        'Keep emergency contact info for doctors'
      ]
    },
    {
      id: '3',
      name: 'Tools & Equipment',
      description: 'Essential tools for emergency situations',
      icon: 'ri-tools-line',
      color: 'bg-orange-500',
      items: [
        'Flashlights and extra batteries',
        'Battery-powered or hand crank radio',
        'Multi-tool or Swiss Army knife',
        'Duct tape and plastic sheeting',
        'Waterproof matches',
        'Emergency whistle'
      ],
      tips: [
        'Test equipment regularly',
        'Keep tools in waterproof containers',
        'Learn how to use all equipment'
      ]
    },
    {
      id: '4',
      name: 'Communication',
      description: 'Stay connected during emergencies',
      icon: 'ri-smartphone-line',
      color: 'bg-green-500',
      items: [
        'Cell phone with charger and backup battery',
        'Two-way radios',
        'Emergency contact list',
        'Local emergency service numbers',
        'Portable charger/power bank'
      ],
      tips: [
        'Keep devices charged',
        'Store contacts in multiple locations',
        'Learn alternative communication methods'
      ]
    },
    {
      id: '5',
      name: 'Important Documents',
      description: 'Copies of vital records and identification',
      icon: 'ri-file-text-line',
      color: 'bg-purple-500',
      items: [
        'Identification documents (passport, driver\'s license)',
        'Insurance policies and contracts',
        'Bank account records',
        'Birth certificates and marriage certificates',
        'Cash and credit cards'
      ],
      tips: [
        'Store in waterproof containers',
        'Keep digital copies in cloud storage',
        'Include small bills and coins'
      ]
    },
    {
      id: '6',
      name: 'Personal Care',
      description: 'Hygiene and comfort items',
      icon: 'ri-user-line',
      color: 'bg-pink-500',
      items: [
        'Change of clothing and shoes',
        'Personal hygiene items',
        'Blankets and sleeping bags',
        'Baby supplies (if needed)',
        'Pet supplies (if needed)'
      ],
      tips: [
        'Pack seasonal appropriate clothing',
        'Include comfort items for children',
        'Consider special needs of family members'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Emergency Kit Categories</h2>
        <p className="text-gray-600">
          Organize your emergency supplies by category to ensure you have everything needed for disaster preparedness.
        </p>
      </div>

      <div className="grid gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className={`${category.color} rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-checkbox-line text-red-600"></i>
                    </div>
                    <span>Essential Items</span>
                  </h4>
                  <div className="space-y-2">
                    {category.items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center space-x-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-lightbulb-line text-yellow-600"></i>
                    </div>
                    <span>Pro Tips</span>
                  </h4>
                  <div className="space-y-2">
                    {category.tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
            <i className="ri-information-line text-blue-600"></i>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Storage Tips</h3>
            <div className="space-y-1 text-sm text-blue-700">
              <p>• Store your emergency kit in a cool, dry place</p>
              <p>• Keep kits in easy-to-carry containers</p>
              <p>• Review and update supplies every 6 months</p>
              <p>• Consider having kits for home, work, and vehicles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}