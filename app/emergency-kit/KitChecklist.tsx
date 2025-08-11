'use client';

import { useState } from 'react';

interface ChecklistItem {
  id: string;
  name: string;
  category: string;
  quantity: string;
  notes?: string;
  priority: 'high' | 'medium' | 'low';
  checked: boolean;
}

export default function KitChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const checklistItems: ChecklistItem[] = [
    { id: '1', name: 'Water (1 gallon per person per day)', category: 'water', quantity: '3-day supply', priority: 'high', checked: false },
    { id: '2', name: 'Non-perishable food', category: 'food', quantity: '3-day supply', priority: 'high', checked: false },
    { id: '3', name: 'First aid kit', category: 'medical', quantity: '1 kit', priority: 'high', checked: false },
    { id: '4', name: 'Flashlights', category: 'tools', quantity: '2-3 units', priority: 'high', checked: false },
    { id: '5', name: 'Battery-powered radio', category: 'communication', quantity: '1 unit', priority: 'high', checked: false },
    { id: '6', name: 'Extra batteries', category: 'tools', quantity: 'Multiple sets', priority: 'high', checked: false },
    { id: '7', name: 'Cell phone chargers', category: 'communication', quantity: '1 per phone', priority: 'high', checked: false },
    { id: '8', name: 'Cash', category: 'documents', quantity: 'Small bills', priority: 'high', checked: false },
    { id: '9', name: 'Emergency contact information', category: 'documents', quantity: '1 copy', priority: 'high', checked: false },
    { id: '10', name: 'Copies of important documents', category: 'documents', quantity: '1 set', priority: 'high', checked: false },
    { id: '11', name: 'Prescription medications', category: 'medical', quantity: '7-day supply', priority: 'high', checked: false },
    { id: '12', name: 'Blankets/sleeping bags', category: 'shelter', quantity: '1 per person', priority: 'medium', checked: false },
    { id: '13', name: 'Change of clothing', category: 'personal', quantity: '1 set per person', priority: 'medium', checked: false },
    { id: '14', name: 'Personal hygiene items', category: 'personal', quantity: 'Basic supplies', priority: 'medium', checked: false },
    { id: '15', name: 'Matches (waterproof)', category: 'tools', quantity: '1 box', priority: 'medium', checked: false },
    { id: '16', name: 'Whistle', category: 'tools', quantity: '1 per person', priority: 'medium', checked: false },
    { id: '17', name: 'Duct tape', category: 'tools', quantity: '1 roll', priority: 'medium', checked: false },
    { id: '18', name: 'Plastic sheeting', category: 'shelter', quantity: '10x20 feet', priority: 'medium', checked: false },
    { id: '19', name: 'Can opener (manual)', category: 'tools', quantity: '1 unit', priority: 'medium', checked: false },
    { id: '20', name: 'Local area maps', category: 'documents', quantity: '1 set', priority: 'low', checked: false },
    { id: '21', name: 'Baby supplies (if needed)', category: 'personal', quantity: 'As needed', priority: 'high', checked: false },
    { id: '22', name: 'Pet supplies (if needed)', category: 'personal', quantity: 'As needed', priority: 'medium', checked: false },
    { id: '23', name: 'Fire extinguisher', category: 'safety', quantity: '1 unit', priority: 'medium', checked: false },
    { id: '24', name: 'Emergency blankets', category: 'shelter', quantity: '2-4 units', priority: 'low', checked: false }
  ];

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'water', label: 'Water' },
    { value: 'food', label: 'Food' },
    { value: 'medical', label: 'Medical' },
    { value: 'tools', label: 'Tools' },
    { value: 'communication', label: 'Communication' },
    { value: 'documents', label: 'Documents' },
    { value: 'shelter', label: 'Shelter' },
    { value: 'personal', label: 'Personal' },
    { value: 'safety', label: 'Safety' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? checklistItems 
    : checklistItems.filter(item => item.category === selectedCategory);

  const toggleCheck = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'low': return 'border-green-200 bg-green-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const completedCount = checkedItems.size;
  const totalCount = checklistItems.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Emergency Kit Progress</h2>
          <span className="text-2xl font-bold text-red-600">{completionPercentage}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
          <div 
            className="bg-red-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        
        <p className="text-sm text-gray-600">
          {completedCount} of {totalCount} items completed
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold text-gray-800 mb-3">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${ 
                selectedCategory === category.value
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`border rounded-lg p-4 transition-all duration-200 ${ 
              checkedItems.has(item.id) 
                ? 'bg-green-50 border-green-200' 
                : getPriorityColor(item.priority)
            }`}
          >
            <div className="flex items-start space-x-3">
              <button
                onClick={() => toggleCheck(item.id)}
                className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-1 ${ 
                  checkedItems.has(item.id)
                    ? 'bg-green-600 border-green-600 text-white'
                    : 'border-gray-300 hover:border-red-400'
                }`}
              >
                {checkedItems.has(item.id) && (
                  <i className="ri-check-line text-sm"></i>
                )}
              </button>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h4 className={`font-medium ${ 
                    checkedItems.has(item.id) 
                      ? 'text-green-800 line-through' 
                      : 'text-gray-800'
                  }`}>
                    {item.name}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0 ${ 
                    item.priority === 'high' ? 'bg-red-100 text-red-800' :
                    item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {item.priority.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Quantity: {item.quantity}</span>
                  <span className="capitalize">Category: {item.category}</span>
                </div>
                
                {item.notes && (
                  <p className="text-sm text-gray-500 mt-1">{item.notes}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
            <i className="ri-checkbox-line text-2xl text-gray-400"></i>
          </div>
          <p className="text-gray-500">No items found for the selected category.</p>
        </div>
      )}
    </div>
  );
}
