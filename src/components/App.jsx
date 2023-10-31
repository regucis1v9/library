import React from 'react';
import '../App.css';
import SideBar from './SideBar';
import FeaturedBooks from './FeaturedBooks';
import LatestBooks from './LatestBooks';
import AllBooks from './AllBooks';

function App() {
  return (
    <div className="Main">
      <div className="SideBarCont">
        <SideBar />
      </div>
      <div className="RightCont">
        <div className="FeaturedBooksCont">
          <h2>Featured Books</h2>
          <FeaturedBooks />
        </div>
        
        <div className="LatestBooksCont">
          <LatestBooks />
        </div>
        
        <div className="AllBooksCont"> 
          <AllBooks />
        </div>
      </div>
    </div>
  );
}

export default App;
