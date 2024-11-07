


import React from 'react';
import HelpOptionsList from './HelpOptionsList';

const MainHeader: React.FC = () => {
  return (
    <div className=" mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        👋 How can I <span className="text-pink-500">help you today?</span>
      </h1>
      <HelpOptionsList />
      <p className='mt-4 w-1/2 mx-auto'>
        ChatPRD has a library of document templates for you to use!
        Just click the <span className="text-blue-500">➕</span> button or add your own custom templates.
      </p>
    </div>
  );
};

export default MainHeader;
