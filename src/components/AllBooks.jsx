import React, { useState, useEffect } from 'react';
import '../css/AllBooks.css';

function AllBooks() {
  const [bookData, setBookData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false); // State for filter window visibility
  const [collapsed, setCollapsed] = useState(true); // State for collapsing the filter window
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [availabilityFilter, setAvailabilityFilter] = useState('available'); // State for availability filter

  const filteredBooks = bookData.filter((book) =>
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

  const handleSortClick = () => {
    console.log("Selected Availability: ", availabilityFilter);
    fetchBooks(); // Trigger a new fetch when sorting
  };

  const fetchBooks = () => {
    setLoading(true);

    // Include the availability filter in the URL
    fetch(`http://localhost/regnars/library/getAll.php?availability=${availabilityFilter}`)
      .then((response) => response.json())
      .then((data) => {
        setBookData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
        setLoading(false);
      });

  };

  useEffect(() => {
    fetchBooks(); // Initial fetch when the component mounts
  }, [availabilityFilter]); // Re-fetch when availabilityFilter changes

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
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredBooks.map((book, index) => (
            <a key={index} className="Book" href={'http://localhost:3000/book?id='+book.id}>
              <div className="BookImage">
                <img src={book.imageURL} alt={book.title} />
              </div>
              <div className="BookTitle">{book.title}</div>
              <div className="AuthorRating">
                <div className="BookAuthor">{book.author}</div>
                <div className="BookRating">{book.rating}</div>
              </div>
              <div className="Description">{book.description}</div>
            </a>
          ))
        )}
      </div>

      {showFilter && (
        <div className="FilterOverlay" onClick={handleOverlayClick}>
        <div className={`FilterWindow ${collapsed ? 'collapsed' : ''}`} onClick={handleFilterClick}>
          <div className="FilterContent">
            <div className="FilterClose" onClick={closeFilter}>X</div>
            <button className="FilterBox" onClick={handleSortClick}>Sort</button>
            <select className="FilterDropdown" value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)}>
              <option value="available">Available</option>
              <option value="unavailable">Not Available</option>
            </select>
            <select className="FilterDropdown">
              <option value="" disabled selected>Genre</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              {/* Add more genre options as needed */}
            </select>
            <select className="FilterDropdown">
              <option value="" disabled selected>Release Date</option>
              <option value="last-week">Last Week</option>
              <option value="last-month">Last Month</option>
              <option value="last-year">Last Year</option>
              {/* Add more release date options as needed */}
            </select>
            <select className="FilterDropdown">
              <option value="" disabled selected>Reviews</option>
              <option value="5-stars">5 Stars</option>
              <option value="4-stars">4 Stars</option>
              <option value="3-stars">3 Stars</option>
              {/* Add more review options as needed */}
            </select>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default AllBooks;
