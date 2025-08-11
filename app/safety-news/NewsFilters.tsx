'use client';

interface NewsFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function NewsFilters({ selectedCategory, onCategoryChange }: NewsFiltersProps) {
  const categories = [
    { value: 'all', label: 'All News', icon: 'ri-news-line' },
    { value: 'typhoon', label: 'Typhoon', icon: 'ri-typhoon-line' },
    { value: 'earthquake', label: 'Earthquake', icon: 'ri-earthquake-line' },
    { value: 'flood', label: 'Flood', icon: 'ri-flood-line' },
    { value: 'fire', label: 'Fire', icon: 'ri-fire-line' },
    { value: 'volcano', label: 'Volcano', icon: 'ri-mountain-line' },
    { value: 'safety', label: 'Safety Tips', icon: 'ri-shield-check-line' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Filter by Category</h2>
      
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