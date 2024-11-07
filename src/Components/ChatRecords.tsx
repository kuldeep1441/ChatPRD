import React from 'react';

const ChatRecords: React.FC = () => {
  return (
    <div className="mb-4">
      {/* "My Startup" and "Start New Chat" Section */}
      <button className="flex items-center p-1 text-blue-600 font-medium">
        <span className="bg-blue-200 p-1 rounded-full mr-2">🏢</span>
        My Startup
      </button>
      <button className="mt-1 w-full p-1 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-md">
        Start New Chat
      </button>

      {/* Sidebar Links */}
      <div className="text-gray-700 mt-2">
        <div className="flex items-center space-x-2 p-1">
          <span className="">💬</span>
          <span>Chats</span>
          <span className="">199</span>
        </div>
        <div className="flex items-center space-x-2 p-1">
          <span className="">📄</span>
          <span>Documents</span>
          <span className="">88</span>
        </div>
        <div className="flex items-center space-x-2 p-1">
          <span className="">📚</span>
          <span>Knowledge</span>
          <span className=""></span>
        </div>
        <div className="flex items-center space-x-2 p-1">
          <span className="">📂</span>
          <span>Templates</span>
        </div>
      </div>
    </div>
  );
};

export default ChatRecords;
