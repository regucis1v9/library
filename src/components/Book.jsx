import '../App.css';
import React, { useState } from 'react';
import Image from './bigBook.png';
import Heart from './heart.png';
function Book() {


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
                    src={Image}
                    alt="Sample Image"
                    className="img-big"
                  />
                </div>
              </div>
              <div className="info-box">
                <div style={{ justifyContent: 'right' }} className="row">
                  <div className="title-box">
                    <div style={{ justifyContent: 'space-between' }} className="row">
                      <h1>Gramatas nosaukums</h1>
                      <div className="x-box">
                        <div style={{ marginTop: '-34px', fontSize: '25px' }} className="row">
                          <h1>X</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ justifyContent: 'space-evenly' }} className="row">
                  <h2>Autors</h2>
                  <img
                    src={Heart}
                    alt="Sample Image"
                    className="img-heart"
                  />
                </div>
                <div className="row">
                  <div className="desc-box2">
                    <div className="row">
                      <h2> Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts AprakstsApraksts Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts Apraksts vApraksts Apraksts Apraksts Apraksts</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h2>Atsauksmes</h2>
                </div>
                <div className="row">
                  <Review
                    review="Review Review Review Review Review Review v Review Review vReview Review Review ReviewvReview ReviewReview Review Review Review Review Review v vvReview ReviewReview ReviewReview Review Review Review vvvReview Review vv Review Review vv  vv v  vvv Review Review Review Review vvReview ReviewvvvReview ReviewReview Review Review Review Review Review v"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function Review({ review }) {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpand = () => {
      setExpanded(!expanded);
    };
  
    const reviewClass = expanded ? "review-box expanded" : "review-box";
    const maxReviewHeight = expanded ? '9999px' : '100px'; // Adjust the max height as needed
  
    return (
      <div className="desc-box3">
        <div style={{ width: '565px' }} className="rew-content-box">
          <div style={{ justifyContent: 'space-between', margin: '10px' }} className="row">
            <h2 style={{ fontWeight: '700' }}>Username</h2>
            <h2>3/5</h2>
          </div>
          <div style={{ marginTop: '-40px' }} className="row">
            <div className={reviewClass} style={{ maxHeight: maxReviewHeight }}>
              <h2>{review}</h2>
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
      </div>
    );
  }
  export default Book;



