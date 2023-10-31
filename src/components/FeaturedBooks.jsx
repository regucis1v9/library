import React, { useState } from 'react';
import '../FeaturedBooks.css';

function FeaturedBooks() {
  const books = [
    {
      image: process.env.PUBLIC_URL + '/images/FeaturedBook.jpg', // Image path for Book 1
    },
    {
      image: process.env.PUBLIC_URL + '/images/FeaturedBook1.jpg', // Image path for Book 2
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : books.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < books.length - 1 ? prevIndex + 1 : 0));
  };

  const currentBook = books[currentIndex];

  return (
    <div className="FeaturedBooks">
      <div className="ArrowLeft" onClick={handlePrev}>
        <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} alt="Arrow Left" />
      </div>

        <div className="FeaturedBookImage">
          <img src={currentBook.image} alt={`Featured Book ${currentIndex + 1}`} />
        </div>

      <div className="ArrowRight" onClick={handleNext}>
        <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} alt="Arrow Right" />
      </div>
    </div>
  );
}

export default FeaturedBooks;
