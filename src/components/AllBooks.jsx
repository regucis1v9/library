import React, { useState } from 'react';
import '../AllBooks.css';

function AllBooks() {
  const books = [
    {
      title: "Book 1",
      author: "Author 1",
      rating: "4.5",
      description: "Description for Book 1",
    },
    {
      title: "Book 2",
      author: "Author 2",
      rating: "4.0",
      description: "Description for Book 2",
    },
    {
      title: "Book 3",
      author: "Author 3",
      rating: "4.2",
      description: "Description for Book 3",
    },
    {
      title: "Book 4",
      author: "Author 4",
      rating: "3.8",
      description: "Description for Book 4",
    },
    {
      title: "Book 5",
      author: "Author 5",
      rating: "4.8",
      description: "Description for Book 5",
    },
    {
      title: "Book 6",
      author: "Author 6",
      rating: "4.3",
      description: "Description for Book 6",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showBooks = filteredBooks.slice(startIndex, startIndex + 3);

  return (
    <div className="AllBooks">

        <div className="AllBooksTitleCont">
            <h2 className="Title">
                All Books
            </h2>
            <div className="SearchCont">
                <input type="text" placeholder="Search bar" className="SearchBar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <div className="SearchIconBox">
                    <img src={process.env.PUBLIC_URL + '/images/Search_icon.png'} alt="Search Icon" className="SearchIcon"/>
                </div>
            </div>
            <div className="FilterCont">
                <div className="FilterIconBox">
                    <img src={process.env.PUBLIC_URL + '/images/Filter_icon.png'} alt="Filter Icon" className="FilterIcon"/>
                </div>
            </div>
        </div>

      <div className="BooksContainer">
        <div className="Books">
          {showBooks.map((book, index) => (
            <div key={index} className="Book">
              <div className="BookImage">Book Image</div>
              <div className="Author">{book.author}</div>
              <div className="TitleRating">
                <div className="BookTitle">{book.title}</div>
                <div className="BookRating">{book.rating}</div>
              </div>
              <div className="Description">{book.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
