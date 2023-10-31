import React, { useState, useEffect } from 'react';
import '../LatestBooks.css';

function LatestBooks() {
  const books = [
    {
      image: process.env.PUBLIC_URL + '/images/book1.png',
      title: "Book 1",
      author: "Author 1",
      rating: "4.5/5",
      description: "Description for Book 1",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book.png',
      title: "Book 2",
      author: "Author 2",
      rating: "4.0/5",
      description: "Description for Book 2",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book1.png',
      title: "Book 3",
      author: "Author 3",
      rating: "4.2/5",
      description: "Description for Book 3",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book.png',
      title: "Book 4",
      author: "Author 4",
      rating: "3.8/5",
      description: "Description for Book 4",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book1.png',
      title: "Book 5",
      author: "Author 5",
      rating: "4.8/5",
      description: "Description for Book 5",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book.png',
      title: "Book 6",
      author: "Author 6",
      rating: "4.3/5",
      description: "Description for Book 6",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleBooks, setVisibleBooks] = useState(3);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < books.length - visibleBooks) {
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

  const showBooks = books.slice(startIndex, startIndex + visibleBooks);

  return (
    <div className="LatestBooks">
      <h2 className="Title">Latest Books</h2>
      <div className="BooksContainer">
        <div className="Arrows" onClick={handlePrev}>
          <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} className='PrevArrow' />
        </div>
        <div className="Books">
          {showBooks.map((book, index) => (
            <div key={index} className="Book">
              <div className="BookImage">
                <img src={book.image} />
              </div>
              <div className="BookTitle">{book.title}</div>
            <div className="AuthorRating">
              <div className="BookAuthor">{book.author}</div>
              <div className="BookRating">{book.rating}</div>
            </div>
            <div className="Description">{book.description}</div>
            </div>
          ))}
        </div>
        <div className="Arrows" onClick={handleNext}>
          <img src={process.env.PUBLIC_URL + '/images/Arrow_icon.png'} className='NextArrow' />
        </div>
      </div>
    </div>
  );
}

export default LatestBooks;
