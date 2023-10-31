import React, { useState } from 'react';
import '../AllBooks.css';

function AllBooks() {
  const books = [
    {
      image: process.env.PUBLIC_URL + '/images/book1.png',
      title: "Book 1",
      author: "Author 1",
      rating: "4.5",
      description: "Description for Book 1",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book.png',
      title: "Book 2",
      author: "Author 2",
      rating: "4.0",
      description: "Description for Book 2",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book1.png',
      title: "Book 3",
      author: "Author 3",
      rating: "4.2",
      description: "Description for Book 3",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book.png',
      title: "Book 4",
      author: "Author 4",
      rating: "3.8",
      description: "Description for Book 4",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book1.png',
      title: "Book 5",
      author: "Author 5",
      rating: "4.8",
      description: "Description for Book 5",
    },
    {
      image: process.env.PUBLIC_URL + '/images/book.png',
      title: "Book 6",
      author: "Author 6",
      rating: "4.3",
      description: "Description for Book 6",
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Split the books into rows with three books in each row
  const rows = [];
  for (let i = 0; i < filteredBooks.length; i += 3) {
    rows.push(filteredBooks.slice(i, i + 3));
  }

  return (
    <div className="AllBooks">
      <div className="AllBooksTitleCont">
        <h2 className="Title">All Books</h2>
        <div className="SearchCont">
          <input
            type="text"
            placeholder="Search bar"
            className="SearchBar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="SearchIconBox">
            <img src={process.env.PUBLIC_URL + '/images/Search_icon.png'} alt="Search Icon" className="SearchIcon" />
          </div>
        </div>
        <div className="FilterCont">
          <div className="FilterIconBox">
            <img src={process.env.PUBLIC_URL + '/images/Filter_icon.png'} alt="Filter Icon" className="FilterIcon" />
          </div>
        </div>
      </div>

      <div className="BooksContainer">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="BooksRow">
            {row.map((book, index) => (
              <div key={index} className="Book">
                <div className="BookImage">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="Author">{book.author}</div>
                <div className="TitleRating">
                  <div className="BookTitle">{book.title}</div>
                  <div className="BookRating">{book.rating}</div>
                </div>
                <div className="Description">{book.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
