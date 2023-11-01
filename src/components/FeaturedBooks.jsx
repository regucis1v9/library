import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/FeaturedBooks.css';

function FeaturedBooks() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/regnars/library/getAll.php')
      .then((response) => response.json())
      .then((data) => setBookData(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="FeaturedBooks">
      <Carousel autoPlay infiniteLoop interval={3000} className="featuredBooks">
        {bookData.slice(-3).map((book) => (
          <a className="carouselItem" key={book.id} href={'http://localhost:3000/book?id='+book.id}>
            <img src={book.imageURL} alt="" className='featuredImage' />
            <div className="featuredInfo">
              <div className="featuredTitle">{book.title}</div>
              <div className="featuredAuthor">{book.author}</div>
              <div className="featuredDescription">{book.description}</div>
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
}

export default FeaturedBooks;
