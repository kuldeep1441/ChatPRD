

import { useState } from 'react';
import ChatRecords from './ChatRecords';
import ChatHistory from './chatHistory';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300 bg-white shadow-lg overflow-hidden`}>
      <div className="flex flex-col h-full">
        {/* Profile Section */}
        <div className="p-4 flex items-center justify-between border-b">
          {isOpen && (
            <div className="flex items-center space-x-2">
              <div className="bg-gray-300 rounded-full h-6 w-6"></div> {/* Placeholder for profile icon */}
              <span className="font-semibold text-md">ChatPRD</span>
            </div>
          )}
          <button onClick={toggleSidebar} className="text-gray-600">
            {isOpen ? <ChevronLeftIcon className="h-6 w-6 text-gray-600" /> : <ChevronRightIcon className="h-6 w-6 text-gray-600" />}
          </button>
        </div>

        {/* Conditionally Render Component2 and Component3 */}
        <div className="flex-1 p-3 overflow-y-auto">
          {isOpen && (
            <>
              <ChatRecords />
              <ChatHistory />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
