

// import React from 'react';
// import HelpOptionCard from './HelpOptionCard';
// import { FiFileText, FiEdit, FiMessageSquare } from 'react-icons/fi';
// import { FaRocket } from 'react-icons/fa';

// const HelpOptionsList: React.FC = () => {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
//       <div className="divide-y divide-gray-200">
//         <HelpOptionCard
//           title="Help me write a PRD"
//           description="Create a new Product Requirements Document."
//           icon={<FiFileText className="text-indigo-500 w-6 h-6" />}
//         />
//         <HelpOptionCard
//           title="Help me improve an existing document"
//           description="Get a review to make your work better."
//           isPro
//           icon={<FiEdit className="text-green-500 w-6 h-6" />}
//         />
//         <HelpOptionCard
//           title="Brainstorm new features"
//           description="Generate ideas for your product roadmap."
//           icon={<FaRocket className="text-yellow-500 w-6 h-6" />}
//         />
//         <HelpOptionCard
//           title="Get feedback on my ideas"
//           description="Receive insights on your product concepts."
//           icon={<FiMessageSquare className="text-blue-500 w-6 h-6" />}
//         />
//       </div>
//     </div>
//   );
// };

// export default HelpOptionsList;


import React from 'react';
import HelpOptionCard from './HelpOptionCard';
import { FiFileText, FiEdit, FiMessageSquare } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

const HelpOptionsList: React.FC = () => {
  return (
    <div className="w-1/2 mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="divide-y divide-gray-200">
        <HelpOptionCard
          title="Help me write a PRD"
          description="Create a new Product Requirements Document."
          icon={<FiFileText className="text-indigo-500 w-6 h-6" />}
        />
        <HelpOptionCard
          title="Help me improve an existing document"
          description="Get a review to make your work better."
          isPro
          icon={<FiEdit className="text-green-500 w-6 h-6" />}
        />
        <HelpOptionCard
          title="Brainstorm new features"
          description="Generate ideas for your product roadmap."
          icon={<FaRocket className="text-yellow-500 w-6 h-6" />}
        />
        <HelpOptionCard
          title="Get feedback on my ideas"
          description="Receive insights on your product concepts."
          icon={<FiMessageSquare className="text-blue-500 w-6 h-6" />}
        />
      </div>
    </div>
  );
};

export default HelpOptionsList;
