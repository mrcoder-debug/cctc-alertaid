
'use client';

interface SafetyTip {
  icon: string;
  title: string;
  description: string;
}

export default function SafetyTips() {
  const safetyTips: SafetyTip[] = [
    {
      icon: 'ri-flashlight-line',
      title: 'Emergency Kit Ready',
      description: 'Keep flashlight, batteries, first aid kit, and 3 days worth of food and water.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Stay Connected',
      description: 'Keep your phone charged and have backup power sources available.'
    },
    {
      icon: 'ri-route-line',
      title: 'Know Evacuation Routes',
      description: 'Plan and practice evacuation routes from your home, school, and workplace.'
    },
    {
      icon: 'ri-team-line',
      title: 'Family Emergency Plan',
      description: 'Create a communication plan with family members and designate meeting points.'
    }
  ];

  return (
    <section className="px-4 py-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Essential Safety Tips
          </h2>
          <p className="text-gray-600">
            Stay prepared with these important disaster readiness guidelines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyTips.map((tip, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow"
            >
              <div className="bg-red-100 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                <i className={`${tip.icon} text-red-600 text-xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
