import React, { useState } from 'react';
import '../App.css';
import sampleImage from './robrats.png';
import Image from './book.png';
import SideBar from './SideBar';

function App() {

 

  return (
    <>
    <SideBar />
    <div className="main">
      
      <div style={{ marginTop: '70px' }} className="row">
        <h1>Hello, username!</h1>
      </div>
      <div className="row">
        <div className="content-box">
          <div className="row">
            <div className="fav-box">
              <div className="row">
                <h1>Your favorites</h1>
              </div>
              <div className="row">
                <div className="fav-content">
                  <div className="row">
                    <div className="long-box">
                      <div className="row">
                        <div className="book-box">
                          <div className="row">
                            <img
                              style={{ height: '220px', width: '180px', margin: '10px' }}
                              src={Image}
                              alt="Sample Image"
                              className="img-style"
                            />
                          </div>
                        </div>
                        <div className="author-box">
                          <div style={{ marginTop: '-10px' }} className="row">
                            <h3>Author: Kevin Anderson</h3>
                          </div>
                        </div>
                        <div style={{ marginTop: '15px' }} className="row">
                          <div className="author-box">
                            <div style={{ marginTop: '-10px', justifyContent: 'space-between' }} className="row">
                              <h3>Title</h3>
                              <h3>4.5/5</h3>
                            </div>
                          </div>
                        </div>
                        <div style={{ marginTop: '15px' }} className="row">
                          <div className="desc-box">
                            <div className="row">
                              <h3>Description Description Description Description</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="long-box">
                      <div className="row">
                        <div className="book-box">
                          <div className="row">
                            <img
                              style={{ height: '220px', width: '180px', margin: '10px' }}
                              src={Image}
                              alt="Sample Image"
                              className="img-style"
                            />
                          </div>
                        </div>
                        <div className="author-box">
                          <div style={{ marginTop: '-10px' }} className="row">
                            <h3>Author: Kevin Anderson</h3>
                          </div>
                        </div>
                        <div style={{ marginTop: '15px' }} className="row">
                          <div className="author-box">
                            <div style={{ marginTop: '-10px', justifyContent: 'space-between' }} className="row">
                              <h3>Title</h3>
                              <h3>4.5/5</h3>
                            </div>
                          </div>
                        </div>
                        <div style={{ marginTop: '15px' }} className="row">
                          <div className="desc-box">
                            <div className="row">
                              <h3>Description Description Description Description</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
          <div  className="rew-box">
            <div style={{ marginTop: '0px' }} className="row">
              <h1>Your reviews</h1>
            </div>
            <div className="row">
            <div className="rew-content">
  <Comment description="Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review" />
  <Comment description="Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review Review" />
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </> );
}

function Comment({ description }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const commentClass = expanded ? "comment-box expanded" : "comment-box";

  return (
    <div className="rew-content-box">
      <div style={{ margin: '10px', justifyContent: 'space-between' }} className="row">
        <h1 style={{ fontWeight: '700' }}>Title</h1>
        <h1>3/5</h1>
      </div>
      <div style={{ marginTop: '-40px' }} className="row">
      <div className={commentClass}>
        <h2>
          {description}
        </h2>
      </div>
      </div>
      <div className="row">
        {expanded ? (
          <h4 style={{ marginTop: '-0px', marginRight: '87%', fontWeight: '700', cursor: 'pointer' }} onClick={toggleExpand}>
            View less
          </h4>
        ) : (
          <h4 style={{ marginTop: '-0px', marginRight: '87%', fontWeight: '700', cursor: 'pointer' }} onClick={toggleExpand}>
            View more
          </h4>
        )}
      </div>
    </div>
  );
 
}

export default App;
