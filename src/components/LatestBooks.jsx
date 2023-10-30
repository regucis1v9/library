import React from 'react';
import '../LatestBooks.css';

function LatestBooks() {
  const scrollLeft = () => {
    const booksCont = document.querySelector('.BooksCont');
    booksCont.scrollLeft -= 500; // Adjust the scroll distance as needed
  };

  const scrollRight = () => {
    const booksCont = document.querySelector('.BooksCont');
    booksCont.scrollLeft += 500; // Adjust the scroll distance as needed
  };

  return (
    <div className="LatestBooks">
      <div className="Virsraksts">
        <h2>Latest Books</h2>
      </div>
      <div className="ArrowLeft" onClick={scrollLeft}>
          <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} alt="Arrow Left" />
        </div>
      <div className="BooksCont">
        <div className="Book">Book 1</div>
        <div className="Book">Book 2</div>
        <div className="Book">Book 3</div>
        <div className="Book">Book 4</div>
        <div className="Book">Book 5</div>
        <div className="Book">Book 6</div>
      </div>
      <div className="ArrowRight" onClick={scrollRight}>
          <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} alt="Arrow Right" />
        </div>
    </div>
  );
}

export default LatestBooks;
