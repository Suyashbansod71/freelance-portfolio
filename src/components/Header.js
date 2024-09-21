import React from 'react';
import "../styles/header.css";

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <div className="container">
      <div className="title">P</div>
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'MY WORK' ? 'active' : ''}`} 
          onClick={() => setActiveTab('MY WORK')}
        >
          MY WORK
        </div>
        <div 
          className={`tab ${activeTab === 'ABOUT ME' ? 'active' : ''}`} 
          onClick={() => setActiveTab('ABOUT ME')}
        >
          ABOUT ME
        </div>
        <div 
          className={`tab ${activeTab === 'REACH OUT' ? 'active' : ''}`} 
          onClick={() => setActiveTab('REACH OUT')}
        >
          REACH OUT
        </div>
      </div>
      <div className="ux-design">UI UX DESIGN</div>
    </div>
  );
}

export default Header;
