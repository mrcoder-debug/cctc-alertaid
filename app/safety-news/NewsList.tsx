'use client';


import { useMemo } from 'react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  source: string;
  priority: 'high' | 'medium' | 'low';
  imageUrl: string;
  readTime: number;
}

interface NewsListProps {
  selectedCategory: string;
}

export default function NewsList({ selectedCategory }: NewsListProps) {
  const newsArticles: NewsArticle[] = [
    {
      id: '1',
      title: 'Super Typhoon Approaching Northern Luzon - Signal No. 3 Raised',
      summary: 'PAGASA warns of strong winds and heavy rainfall as Super Typhoon approaches Northern Luzon provinces. Residents advised to prepare for evacuation.',
      category: 'typhoon',
      date: '2024-12-16',
      source: 'PAGASA',
      priority: 'high',
      imageUrl: 'https://readdy.ai/api/search-image?query=Super%20typhoon%20satellite%20view%20with%20dark%20storm%20clouds%20swirling%20over%20Philippines%2C%20dramatic%20weather%20system%20approaching%20land%20with%20intense%20cloud%20formations%2C%20meteorological%20satellite%20imagery%20showing%20powerful%20storm%20system&width=400&height=250&seq=typhoon1&orientation=landscape',
      readTime: 3
    },
    {
      id: '2',
      title: '6.2 Magnitude Earthquake Strikes Mindanao - No Tsunami Warning',
      summary: 'PHIVOLCS reports a 6.2 magnitude earthquake off the coast of Mindanao. No tsunami warning issued but aftershocks expected.',
      category: 'earthquake',
      date: '2024-12-15',
      source: 'PHIVOLCS',
      priority: 'high',
      imageUrl: 'https://readdy.ai/api/search-image?query=Earthquake%20seismograph%20readings%20showing%20magnitude%20data%2C%20scientific%20monitoring%20equipment%20displaying%20seismic%20waves%2C%20modern%20earthquake%20detection%20facility%20with%20digital%20displays%20and%20monitoring%20screens&width=400&height=250&seq=earthquake1&orientation=landscape',
      readTime: 2
    },
    {
      id: '3',
      title: 'Flash Flood Safety: Essential Tips for Urban Areas',
      summary: 'Learn how to stay safe during flash floods in urban environments. Key preparations and emergency responses every Filipino should know.',
      category: 'safety',
      date: '2024-12-14',
      source: 'NDRRMC',
      priority: 'medium',
      imageUrl: 'https://readdy.ai/api/search-image?query=Urban%20flood%20safety%20preparation%20scene%20with%20emergency%20kit%2C%20waterproof%20bags%2C%20flashlight%2C%20and%20safety%20equipment%20arranged%20neatly%2C%20clean%20background%20with%20safety%20planning%20materials%20for%20Filipino%20families&width=400&height=250&seq=safety1&orientation=landscape',
      readTime: 5
    },
    {
      id: '4',
      title: 'Mayon Volcano Alert Level Raised to 2 - Residents on Standby',
      summary: 'PHIVOLCS raises Mayon Volcano alert level due to increased volcanic activity. Local authorities prepare evacuation plans for nearby communities.',
      category: 'volcano',
      date: '2024-12-13',
      source: 'PHIVOLCS',
      priority: 'high',
      imageUrl: 'https://readdy.ai/api/search-image?query=Mayon%20volcano%20in%20Philippines%20with%20slight%20volcanic%20activity%2C%20perfect%20cone%20shape%20mountain%20with%20some%20steam%20emission%2C%20beautiful%20landscape%20view%20with%20monitoring%20equipment%2C%20dramatic%20sky%20background&width=400&height=250&seq=volcano1&orientation=landscape',
      readTime: 4
    },
    {
      id: '5',
      title: 'Fire Safety in High-Rise Buildings: Emergency Evacuation Procedures',
      summary: 'BFP releases comprehensive guide on fire safety procedures for residents of high-rise buildings and condominiums.',
      category: 'fire',
      date: '2024-12-12',
      source: 'BFP',
      priority: 'medium',
      imageUrl: 'https://readdy.ai/api/search-image?query=Fire%20safety%20equipment%20in%20modern%20building%20including%20fire%20extinguisher%2C%20emergency%20exit%20signs%2C%20and%20safety%20protocols%20display%2C%20clean%20professional%20setup%20with%20fire%20prevention%20tools&width=400&height=250&seq=fire1&orientation=landscape',
      readTime: 6
    },
    {
      id: '6',
      title: 'Heavy Monsoon Rains Cause Flooding in Metro Manila',
      summary: 'MMDA reports widespread flooding in several Metro Manila areas due to heavy monsoon rains. Traffic rerouting implemented.',
      category: 'flood',
      date: '2024-12-11',
      source: 'MMDA',
      priority: 'medium',
      imageUrl: 'https://readdy.ai/api/search-image?query=Metro%20Manila%20flooding%20scene%20with%20emergency%20responders%20helping%20residents%2C%20rescue%20boats%20in%20flooded%20streets%2C%20urban%20flood%20response%20operations%20with%20safety%20personnel%20in%20action&width=400&height=250&seq=flood1&orientation=landscape',
      readTime: 3
    },
    {
      id: '7',
      title: 'Earthquake Preparedness: Building Family Emergency Plans',
      summary: 'Step-by-step guide to creating comprehensive family emergency plans for earthquake preparedness in Philippine households.',
      category: 'safety',
      date: '2024-12-10',
      source: 'Red Cross',
      priority: 'medium',
      imageUrl: 'https://readdy.ai/api/search-image?query=Filipino%20family%20planning%20emergency%20preparedness%20with%20maps%2C%20emergency%20contact%20lists%2C%20and%20safety%20supplies%20organized%20on%20table%2C%20warm%20family%20preparation%20scene%20with%20disaster%20planning%20materials&width=400&height=250&seq=safety2&orientation=landscape',
      readTime: 8
    },
    {
      id: '8',
      title: 'Typhoon Season 2024: What Filipinos Need to Know',
      summary: 'PAGASA releases comprehensive overview of the 2024 typhoon season, including seasonal forecasts and preparation recommendations.',
      category: 'typhoon',
      date: '2024-12-09',
      source: 'PAGASA',
      priority: 'low',
      imageUrl: 'https://readdy.ai/api/search-image?query=PAGASA%20weather%20monitoring%20station%20with%20meteorologists%20analyzing%20typhoon%20data%20on%20multiple%20screens%2C%20modern%20weather%20forecasting%20facility%20with%20radar%20displays%20and%20satellite%20imagery&width=400&height=250&seq=typhoon2&orientation=landscape',
      readTime: 7
    }
  ];

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') return newsArticles;
    return newsArticles.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
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
      case 'safety': return 'ri-shield-check-line';
      default: return 'ri-news-line';
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
    <div className="space-y-6">
      {filteredArticles.map((article) => (
        <article key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 md:h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            
            <div className="p-6 md:w-2/3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={`${getCategoryIcon(article.category)} text-red-600`}></i>
                  </div>
                  <span className="text-sm text-gray-600 capitalize">{article.category}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(article.priority)}`}>
                  {article.priority.toUpperCase()}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                {article.title}
              </h2>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.summary}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-calendar-line"></i>
                    </div>
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-building-line"></i>
                    </div>
                    <span>{article.source}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-time-line"></i>
                    </div>
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
                
                <button className="text-red-600 hover:text-red-700 font-medium whitespace-nowrap">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </article>
      ))}

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
            <i className="ri-news-line text-2xl text-gray-400"></i>
          </div>
          <p className="text-gray-500">No news articles found for the selected category.</p>
        </div>
      )}
    </div>
  );
}