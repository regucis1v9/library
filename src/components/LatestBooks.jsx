import React, { useState, useEffect } from 'react';
import '../css/LatestBooks.css';

function LatestBooks() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleBooks, setVisibleBooks] = useState(3);
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < bookData.length - visibleBooks) {
      setStartIndex(startIndex + 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleBooks(1);
      } else {
        setVisibleBooks(3);
      }
    };

    // Initial check on component load
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost/regnars/library/getAll.php')
      .then((response) => response.json())
      .then((data) => {
        setBookData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const showBooks = bookData.slice(startIndex, startIndex + visibleBooks);

  return (
    <div className="LatestBooks">
      <h2 className="Title">Latest Books</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="BooksContainer">
          <div className="Arrows" onClick={handlePrev}>
            <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} className="PrevArrow" alt="Previous" />
          </div>
          <div className="Books">
            {showBooks.map((book, index) => (
              <a key={index} className="Book" href={'http://localhost:3000/book?id='+book.id}>
                <div className="BookImage">
                  <img src={book.imageURL}  />
                </div>
                <div className="BookTitle">{book.title}</div>
                <div className="AuthorRating">
                  <div className="BookAuthor">By: {book.author}</div>
                </div>
                <div className="Description">{book.description}</div>
              </a>
            ))}
          </div>
          <div className="Arrows" onClick={handleNext}>
            <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} className="NextArrow" alt="Next" />
          </div>
        </div>
      )}
    </div>
  );
}

export default LatestBooks;
