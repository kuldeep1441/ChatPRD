import React from 'react';

const ChatHistory: React.FC = () => {
  return (
    <div className="">
      <h3 className="text-sm text-gray-500 mb-1">Recent</h3>
      <div className="text-gray-700">
        <div className="flex items-center space-x-2 p-1">
          <span className="text-gray-400 text-xs">Previous 7 Days</span>
        </div>
        <div className="pl-4 text-gray-700">
          <div className="flex items-center justify-between">
            <span>New User Onboarding</span>
            <span className="text-gray-400">...</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Pricing Upsells in App</span>
            <span className="text-gray-400">...</span>
          </div>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default ChatHistory;
