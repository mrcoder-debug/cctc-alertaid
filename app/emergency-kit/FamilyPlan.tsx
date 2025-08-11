'use client';

import { useState } from 'react';

interface FamilyMember {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  medicalNeeds?: string;
}

export default function FamilyPlan() {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    { id: '1', name: 'Juan Dela Cruz', relationship: 'Father', phone: '+639123456789' },
    { id: '2', name: 'Maria Dela Cruz', relationship: 'Mother', phone: '+639987654321' },
    { id: '3', name: 'Jose Dela Cruz', relationship: 'Son', phone: '+639555123456', medicalNeeds: 'Asthma medication' }
  ]);

  const [meetingPoints, setMeetingPoints] = useState([
    'Local Elementary School - Main Entrance',
    'Barangay Hall - Front Steps',
    'SM Mall - Customer Service Counter'
  ]);

  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: 'Emergency Services', phone: '911' },
    { name: 'Barangay Captain', phone: '+639123456789' },
    { name: 'Family Doctor', phone: '+639987654321' }
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Family Emergency Plan</h2>
        <p className="text-gray-600">
          Create a comprehensive emergency plan that includes all family members, meeting points, and important contacts.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg">
            <i className="ri-team-line text-blue-600"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Family Members</h3>
        </div>

        <div className="space-y-3">
          {familyMembers.map((member) => (
            <div key={member.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-gray-800">{member.name}</h4>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {member.relationship}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-phone-line"></i>
                      </div>
                      <span>{member.phone}</span>
                    </div>
                    {member.medicalNeeds && (
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-first-aid-kit-line text-red-500"></i>
                        </div>
                        <span className="text-red-600">{member.medicalNeeds}</span>
                      </div>
                    )}
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="ri-edit-line"></i>
                </button>
              </div>
            </div>
          ))}
          
          <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors">
            <i className="ri-add-line mr-2"></i>
            Add Family Member
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-lg">
            <i className="ri-map-pin-line text-green-600"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Meeting Points</h3>
        </div>

        <div className="space-y-3">
          {meetingPoints.map((point, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <span className="text-gray-800">{point}</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <i className="ri-edit-line"></i>
              </button>
            </div>
          ))}
          
          <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-green-400 hover:text-green-600 transition-colors">
            <i className="ri-add-line mr-2"></i>
            Add Meeting Point
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-lg">
            <i className="ri-phone-line text-red-600"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Emergency Contacts</h3>
        </div>

        <div className="space-y-3">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-lg">
                  <i className="ri-contacts-line text-red-600"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{contact.name}</h4>
                  <p className="text-sm text-gray-600">{contact.phone}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => window.location.href = `tel:${contact.phone}`}
                  className="text-green-600 hover:text-green-700"
                >
                  <i className="ri-phone-line"></i>
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="ri-edit-line"></i>
                </button>
              </div>
            </div>
          ))}
          
          <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-red-400 hover:text-red-600 transition-colors">
            <i className="ri-add-line mr-2"></i>
            Add Emergency Contact
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg">
            <i className="ri-file-text-line text-purple-600"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Emergency Plan Checklist</h3>
        </div>

        <div className="space-y-3">
          {[
            'Identify evacuation routes from your home',
            'Choose meeting points in and outside your neighborhood',
            'Practice your evacuation plan regularly',
            'Keep emergency supplies in accessible locations',
            'Ensure all family members know the plan',
            'Update contact information regularly',
            'Consider special needs of family members',
            'Designate an out-of-area contact person'
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <input 
                type="checkbox" 
                className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label className="text-gray-700 text-sm">{item}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-lg flex-shrink-0">
            <i className="ri-lightbulb-line text-yellow-600"></i>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">Planning Tips</h3>
            <div className="space-y-1 text-sm text-yellow-700">
              <p>• Practice your emergency plan every 6 months</p>
              <p>• Keep physical copies of your plan in multiple locations</p>
              <p>• Share your plan with trusted neighbors or relatives</p>
              <p>• Consider different types of emergencies in your planning</p>
              <p>• Make sure children know how to call for help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}