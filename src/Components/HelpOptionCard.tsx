

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

interface HelpOptionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isPro?: boolean;
}

const HelpOptionCard: React.FC<HelpOptionCardProps> = ({ title, description, icon, isPro }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center space-x-4">
        <div className="text-gray-600">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        {isPro && (
          <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">
            Pro
          </span>
        )}
      </div>
      <FiChevronRight className="text-gray-400" />
    </div>
  );
};

export default HelpOptionCard;
