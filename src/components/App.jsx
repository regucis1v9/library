import React from 'react';
import '../App.css';
import SideBar from './SideBar';
import FeaturedBooks from './FeaturedBooks';

function App() {
  return (
    <div className="Main">
      <div className="SideBarCont">
        <SideBar />
      </div>
      <div className="FeaturedBooksCont">
        <h2>Featured Books</h2>
        <FeaturedBooks />
      </div>
    </div>
  );
}

export default App;
