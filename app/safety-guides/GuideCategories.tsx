'use client';

interface GuideCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GuideCategories({ selectedCategory, onCategoryChange }: GuideCategoriesProps) {
  const categories = [
    { value: 'all', label: 'All Guides', icon: 'ri-book-open-line' },
    { value: 'typhoon', label: 'Typhoon', icon: 'ri-typhoon-line' },
    { value: 'earthquake', label: 'Earthquake', icon: 'ri-earthquake-line' },
    { value: 'flood', label: 'Flood', icon: 'ri-flood-line' },
    { value: 'fire', label: 'Fire Safety', icon: 'ri-fire-line' },
    { value: 'volcano', label: 'Volcanic Eruption', icon: 'ri-mountain-line' },
    { value: 'general', label: 'General Preparedness', icon: 'ri-shield-check-line' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Browse by Disaster Type</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${
              selectedCategory === category.value
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={`${category.icon}`}></i>
            </div>
            <span>{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}