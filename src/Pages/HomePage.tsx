import React from 'react';
import Sidebar from '../Components/Sidebar';
import MainHeader from '../Components/MainHeader';
import Footer from '../Components/Footer';



const HomePage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        <MainHeader />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
