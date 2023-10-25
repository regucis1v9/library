import React from 'react';
import '../FeaturedBooks.css';

function FeaturedBooks() {
  return (
    <div className="FeaturedBooks">
        <div className="ArrowLeft">
            <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} alt="Arrow Left" />
        </div>
        <div className="ArrowRight">
            <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} alt="Arrow Right"/>
        </div>
    </div>
  );
}

export default FeaturedBooks;
