import React, { useState } from 'react';
import '../AllBooks.css';

function AllBooks() {
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

  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false); // State for filter window visibility
  const [collapsed, setCollapsed] = useState(true); // State for collapsing the filter window

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openFilter = () => {
    setShowFilter(true);
    setCollapsed(false); // Expand the filter window when opened
  };

  const closeFilter = () => {
    setShowFilter(false);
    setCollapsed(true); // Collapse the filter window when closed
  };

  const handleOverlayClick = () => {
    closeFilter();
  };

  const handleFilterClick = (e) => {
    e.stopPropagation(); // Prevent event propagation to the overlay
  };

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
          <div className={`FilterIconBox ${collapsed ? 'collapsed' : ''}`} onClick={openFilter}>
            <img src={process.env.PUBLIC_URL + '/images/Filter_icon.png'} alt="Filter Icon" className="FilterIcon" />
          </div>
        </div>
      </div>

      <div className="BooksContainer">
        {filteredBooks.map((book, index) => (
          <div key={index} className="Book">
            <div className="BookImage">
              <img src={book.image} alt={book.title} />
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

      {showFilter && (
        <div className="FilterOverlay" onClick={handleOverlayClick}>
          <div className={`FilterWindow ${collapsed ? 'collapsed' : ''}`} onClick={handleFilterClick}>
            <div className="FilterContent">
              <div className="FilterClose" onClick={closeFilter}>X</div>
              <div className="FilterBox">Sort</div>
              <select className="FilterDropdown">
                <option value="" disabled selected>Availability</option>
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
              </select>
              <select className="FilterDropdown">
                <option value="" disabled selected>Genre</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
              </select>
              <select className="FilterDropdown">
                <option value="" disabled selected>Release Date</option>
                <option value="last-week">Last Week</option>
                <option value="last-month">Last Month</option>
                <option value="last-year">Last Year</option>
              </select>
              <select className="FilterDropdown">
                <option value="" disabled selected>Author</option>
                <option value="author1">Author 1</option>
                <option value="author2">Author 2</option>
              </select>
              <select className="FilterDropdown">
                <option value="" disabled selected>Reviews</option>
                <option value="5-stars">5 Stars</option>
                <option value="4-stars">4 Stars</option>
                <option value="3-stars">3 Stars</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllBooks;
