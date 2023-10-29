
import React from 'react';
import '../App.css';
import sampleImage from './robrats.png';
import Image from './book.png';

function App() {

  

  return (
    <div className="main">
      
        <div  className="mini-box">
          <div className="row-box">
        <img src={sampleImage} alt="Sample Image" className="img-style" />
        </div>
      </div>
      <div style={{ marginTop: '70px' }} className="row">
        <h1>
          Hello, username!
        </h1>
      </div>
      <div className="row">
        <div className="content-box">
          <div className="row">
          <div className="fav-box">
<div className="row">
  <h1>
    Your favorites
  </h1>
</div>
<div className="row">
  <div className="fav-content">
    <div className="row">
      <div className="long-box">
        <div className="row">
          <div className="book-box">
            <div className="row">
            <img style={{ height: '220px', width:'180px',margin:'10px' }}  src={Image} alt="Sample Image" className="img-style" />
            </div>
            </div>
            
              <div className="author-box">
              <div style={{marginTop:'-10px' }} className="row">
                <h3>
                  Author: Kevin Anderson
                </h3>
              </div>
              
            </div>
            <div style={{marginTop:'15px' }} className="row">
              <div className="author-box">
              <div style={{marginTop:'-10px', justifyContent:'space-between' }} className="row">
                <h3>
                  Title 
                </h3>
                <h3>4.5/5</h3>
              </div>
              </div>
            </div>
            <div style={{marginTop:'15px' }} className="row">
              <div className="desc-box">
                <div className="row">
                <h3>
                  Desciption Desciption Desciption Desciption 
                </h3>
                </div>
              </div>
           

          </div>
        </div>
      </div>
      <div className="long-box">
      <div className="row">
          <div className="book-box">
            <div className="row">
            <img style={{ height: '220px', width:'180px',margin:'10px' }}  src={Image} alt="Sample Image" className="img-style" />
            </div>
            </div>
            
              <div className="author-box">
              <div style={{marginTop:'-10px' }} className="row">
                <h3>
                  Author: Kevin Anderson
                </h3>
              </div>
              
            </div>
            <div style={{marginTop:'15px' }} className="row">
              <div className="author-box">
              <div style={{marginTop:'-10px', justifyContent:'space-between' }} className="row">
                <h3>
                  Title 
                </h3>
                <h3>4.5/5</h3>
              </div>
              
            </div>
            <div style={{marginTop:'15px' }} className="row">
              <div className="desc-box">
                <div className="row">
                <h3>
                  Desciption Desciption Desciption Desciption 
                </h3>
                </div>
              </div>
            </div>

          
        </div>
      </div>
      </div>
    </div>
  </div>
  </div>
          </div>
          <div className="rew-box">
            <div style={{marginTop:'70px' }} className="row">
              <h1>
                Your reviews
              </h1>
            </div>
            <div className="row">
              
              <div className="rew-content">
                <div  style={{marginTop:'10px' }} className="row">
              <div className="rew-content-box">
                <div  style={{margin:'10px', justifyContent:'space-between' }} className="row">
                  <h1 style={{fontWeight:'700' }}>
                    Title
                  </h1>
                  <h1>
                    3/5
                  </h1>
                </div>
                <div className="row">
                  <h2>Review Review Review Review Review Review Review Review Review Review .......</h2>
                  <h4 style={{marginTop:'-10px', marginRight:'87%', fontWeight:'700'  }} >View more</h4>
                  
                </div>
                </div>
                </div>
                <div  style={{marginTop:'10px' }} className="row">
              <div className="rew-content-box">
                <div  style={{margin:'10px', justifyContent:'space-between' }} className="row">
                  <h1 style={{fontWeight:'700' }}>
                    Title
                  </h1>
                  <h1>
                    3/5
                  </h1>
                </div>
                <div className="row">
                  <h2>Review Review Review Review Review Review Review Review Review Review .......</h2>
                  <h4 style={{marginTop:'-10px', marginRight:'87%', fontWeight:'700'  }} >View more</h4>
                  
                </div>
                </div>
                </div>
              </div>
             
              
            </div>

            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
