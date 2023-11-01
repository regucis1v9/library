import '../css/Book.css';
import React, { useState, useEffect } from 'react';
function Book() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get('id');

    const [data, setBook] = useState({
        title: '',
        author: '',
        description: '', 
        imageURL: '',
      });

    useEffect(() => {
      fetch(`http://localhost/regnars/library/getByID.php?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
            const bookData = data[0] || {}; // Ensure we have valid data
            setBook({
              title: bookData.title,
              author: bookData.author,
              description: bookData.description ,
              imageURL: bookData.imageURL,
            });
          })
        .catch((error) => console.log('Error fetching data:', error));
    }, []);

    
const [heartColor, setHeartColor] = useState('white');

  const toggleHeartColor = () => {
    setHeartColor(heartColor === 'white' ? 'green' : 'white');
  };

    return (
      <div className="main">
        <div className="row">
          <div className="view-box">
            <div className="row">
              <div className="book-img">
                <div style={{ margin: '25px' }} className="row">
                  <img
                    src={data.imageURL}
                    alt="Sample Image"
                    className="img-big"
                  />
                </div>
              </div>
              <div className="info-box">
                <div style={{ justifyContent: 'right' }} className="row">
                  <div className="title-box">
                    <div style={{ justifyContent: 'space-between' }} className="row">
                      <h1>{data.title}</h1>
                      <div className="x-box">
                        <div style={{ marginTop: '-34px', fontSize: '25px' }} className="row">
                          <h1>X</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ justifyContent: 'space-evenly' }} className="row">
                  <h2>{data.author}</h2>
                  <img
                    src='\public\images\heart.png'
                    alt="Sample Image"
                    className="img-heart"
                  />
                </div>
                <div className="row">
                  <div className="desc-box2">
                    <div className="row">
                      <h2> {data.description}</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h2>Atsauksmes</h2>
                </div>
                <div className="row">
                  <Review/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function Review() {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpand = () => {
      setExpanded(!expanded);
    };
  
    const reviewClass = expanded ? "review-box expanded" : "review-box";
    const maxReviewHeight = expanded ? '9999px' : '100px'; // Adjust the max height as needed

    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get('id');
  
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(`http://localhost/regnars/library/getReviews.php?book_id=${id}`)
        .then((response) => response.json())
        .then((reviewsData) => { // Rename the variable to reviewsData
          setReviews(reviewsData); // Update the reviews state with the fetched data
          setLoading(false);
        })
        .catch((error) => {
          console.log('Error fetching data:', error);
          setLoading(false);
        });
    }, [id]);
    return (
      <div className="desc-box3">
        {reviews.map((review, index) => (
        <div style={{ width: '565px' }} className="rew-content-box" key={id}>
        <div style={{ justifyContent: 'space-between', margin: '10px' }} className="row">
          <h2 style={{ fontWeight: '700' }}>{review.username}</h2>
          <h2>{review.review_score}</h2>
        </div>
        <div style={{ marginTop: '-40px' }} className="row">
          <div className={reviewClass} style={{ maxHeight: maxReviewHeight }}>
            <h2>{review.review}</h2>
          </div>
        </div>
        <div className="row">
          <h4
            style={{ marginTop: '0', marginRight: '85%', fontWeight: '700', cursor: 'pointer' }}
            onClick={toggleExpand}
          >
            {expanded ? "View less" : "View more"}
          </h4>
        </div>
      </div>
            ))}
      </div>
    );
  }
  export default Book;



