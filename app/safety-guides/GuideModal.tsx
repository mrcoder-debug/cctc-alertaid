'use client';

import { useEffect } from 'react';

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

interface GuideModalProps {
  guide: SafetyGuide;
  onClose: () => void;
}

export default function GuideModal({ guide, onClose }: GuideModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className={`${getCategoryIcon(guide.category)} text-red-600 text-xl`}></i>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{guide.title}</h2>
              <div className="flex items-center space-x-3 mt-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                  {guide.difficulty.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500">{guide.readTime} min read</span>
                <span className="text-sm text-gray-500">{guide.source}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <img
              src={guide.coverImage}
              alt={guide.title}
              className="w-full h-64 object-cover object-top rounded-lg mb-6"
            />

            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {guide.description}
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-list-ordered text-red-600"></i>
                </div>
                Step-by-Step Instructions
              </h3>

              <div className="space-y-6 mb-8">
                {guide.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {step.icon && (
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className={`${step.icon} text-red-600`}></i>
                          </div>
                        )}
                        <h4 className="font-semibold text-gray-800">{step.title}</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-6 h-6 flex items-center justify-center mr-2">
                  <i className="ri-lightbulb-line text-red-600"></i>
                </div>
                Important Tips & Reminders
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {guide.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-yellow-600"></i>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-information-line text-red-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-red-800">Remember</h3>
                </div>
                <p className="text-red-700 leading-relaxed">
                  In case of emergency, always prioritize your safety and the safety of your family. 
                  When in doubt, evacuate immediately and seek help from local authorities. 
                  For immediate emergency assistance, call the Philippines Emergency Hotline: <strong>911</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Last updated: {new Date(guide.lastUpdated).toLocaleDateString('en-PH', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <button 
              onClick={onClose}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium whitespace-nowrap"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}