


import React, { useState } from 'react';
import { PaperClipIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Footer: React.FC = () => {
  const [message, setMessage] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAttachedFile(event.target.files[0]);
    }
  };

  const handleSendMessage = () => {
    if (message || attachedFile) {
      // Handle sending the message and file here
      console.log("Message:", message);
      console.log("Attached File:", attachedFile);
      setMessage('');
      setAttachedFile(null);
    }
  };

  return (
    <div className="fixed bottom-4 w-full flex items-center justify-center text-gray-500">
      <div className="flex items-center space-x-2 w-3/5 border border-gray-300 rounded-lg p-2 bg-white shadow-md">
        {/* Attachment Icon */}
        <label htmlFor="file-input" className="cursor-pointer">
          <PaperClipIcon className="h-6 w-6 text-gray-500" />
          <input
            id="file-input"
            type="file"
            accept="image/*, .pdf, .doc, .docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Text Input */}
        <input
          type="text"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow border-none focus:outline-none focus:ring-0"
        />

        {/* Send Button */}
         <button onClick={handleSendMessage} className="bg-blue-500 text-white p-1 rounded-full">
           <PaperAirplaneIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
