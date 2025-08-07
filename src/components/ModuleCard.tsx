import React from 'react';
import { Play, Clock, Star } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  duration?: string;
  imageUrl?: string;
  isNew?: boolean;
  pdfUrl?: string;
  onClick: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  duration = "15 min",
  imageUrl,
  isNew = false,
  pdfUrl,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
    >
      {isNew && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10 flex items-center">
          <Star className="w-3 h-3 mr-1" />
          NOVO
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-pink-100 to-red-100">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-red-200">
            <div className="text-6xl">🍓</div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <div className="bg-white bg-opacity-90 rounded-full p-3">
              <Play className="w-6 h-6 text-pink-600" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-pink-500 text-sm font-medium">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Ver Material
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;