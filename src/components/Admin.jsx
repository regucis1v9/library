import '../Admin.css';
import React, { useState } from 'react';
import AdminPicture from './admin-sign.png';
import Shape from './Shape.png';
function Admin() {
  const [isNavigationVisible, setNavigationVisible] = useState(false);

  const toggleNavigation = () => {
    setNavigationVisible(!isNavigationVisible);
  };

  


  return (
    <div className="main">
      <div className="row">
        {isNavigationVisible ? null : (
          <div className="register-box">
            <div style={{ justifyContent: 'space-between' }} className="row">
              <div className="left">
                <div className="imageBox">
                  <div className="message">Let's get started!</div>
                  <img
                    src={AdminPicture}
                    alt="Sample Image"
                    className="img-admin"
                  />
                </div>
              </div>
              <div className="right">
                <div className="registerForm">
                  <h1>Sign in</h1>
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Surname" />
                  <input type="text" placeholder="Your password" />
                  <div className="box">
                    <button className="submit" onClick={toggleNavigation}>
                      Sign in
                      <div className="circle">
                      <div style={{marginTop:'7px' }} className="row">
                      <img
                    src={Shape}
                    alt="Sample Image"
                    className="img-shape"
                  />
                  </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isNavigationVisible && (
        <div className="row">
          <div className="admin-navigation">
            <div style={{ marginTop: '120px' }} className="row">
              <div className="mid-box">
                <div className="row">
                  <h1
                    style={{
                      marginTop: '15px',
                      color: '#2F2323',
                      fontSize: '60px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                    }}
                  >
                    Add genre
                  </h1>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '50px' }} className="row">
              <div className="mid-box">
                <div className="row">
                  <h1
                    style={{
                      marginTop: '15px',
                      color: '#2F2323',
                      fontSize: '60px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                    }}
                  >
                    Add book
                  </h1>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '50px' }} className="row">
              <div className="mid-box">
                <div className="row">
                  <h1
                    style={{
                      marginTop: '15px',
                      color: '#2F2323',
                      fontSize: '60px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                    }}
                  >
                    Search book
                  </h1>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '50px' }} className="row">
              <div className="mid-box">
                <div className="row">
                  <h1
                    style={{
                      marginTop: '15px',
                      color: '#2F2323',
                      fontSize: '60px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                    }}
                  >
                    Edit book
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <div  className="genre-box">
            <div className="row">
                <div className="genre-head">
                    <div style={{ justifyContent: 'space-evenly' }} className="row">
                <h1 style={{
                      marginTop: '15px',
                      color: 'black',
                      fontSize: '60px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                    }}>Add genre </h1>
                    <h4>Back</h4>
                    </div>
                    </div>
            </div>
            <div style={{ marginTop: '5%' }} className="row">
                <div className="genre-content">
                        <div style={{ marginTop: '20%' }} className="row">
                        <input type="text" placeholder="Genre name" />
                        </div>
                        <div className="row">
                        <button  style={{ backgroundColor: '#A77F32', color:'black' }} className="submit" >
                      Submit
                      <div className="circle">
                      <div style={{marginTop:'7px' }} className="row">
                      <img
                    src={Shape}
                    alt="Sample Image"
                    className="img-shape"
                  />
                  </div>
                      </div>
                    </button>
                        </div>
                </div>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="addBook-box">
            <div className="row">
                <div className="bookAdd-content">
                    <div style={{marginTop:'7%' }} className="row">
                    <input type="text" placeholder="Title" />
                    </div>
                    <div style={{marginTop:'2%' }} className="row">
                    <input type="text" placeholder="Author" />
                    </div>
                    <div style={{marginTop:'2%' }} className="row">
                    <input type="text" placeholder="Genre                   " />
                    </div>
                    <div style={{marginTop:'2%' }} className="row">
                    <input type="date" placeholder="Release date" />
                    </div>
                    <div style={{marginTop:'2%' }} className="row">
                    <input style={{height:'200px' }} type="text" placeholder="Description" />
                    </div>
                    <div  className="row">
                        <button  style={{ backgroundColor: '#A77F32', color:'black' }} className="submit" >
                      Add book
                      <div className="circle">
                        <div style={{marginTop:'7px' }} className="row">
                      <img
                    src={Shape}
                    alt="Sample Image"
                    className="img-shape"
                  />
                  </div>
                      </div>
                    </button>
                        </div>
                    
                </div>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="search-box">
            <div className="row">
                <div className="genre-head">
                    <div style={{ justifyContent: 'space-evenly' }} className="row">
                        <h1 style={{
                      marginTop: '15px',
                      color: 'black',
                      fontSize: '60px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                    }}>Search book</h1>
                        <h4>Back</h4>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'8%' }}className="row">
                <div className="search-content">
                    <div style={{marginTop:'14%' }} className="row">
                    <input type="text" placeholder="Title"></input>  
                    </div>
                    <div style={{marginTop:'4%' }} className="row">
                        <button  style={{ backgroundColor: '#A77F32', color:'black' }} className="submit" >
                      Add book
                      <div className="circle">
                        <div style={{marginTop:'7px' }} className="row">
                      <img
                    src={Shape}
                    alt="Sample Image"
                    className="img-shape"
                  />
                  </div>
                      </div>
                    </button>
                        </div>
                </div>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="edit-box">
            <div className="row">
                <h3>Back</h3>
            </div>
            <div className="row">
                <div className="edit-content">
                    <div style={{marginTop:'7%' }} className="row">
                    <input type="text" placeholder="Title"></input>
                    </div>
                    <div style={{marginTop:'2%' }} className="row">
                    <input type="text" placeholder="Author"></input>
                    </div>
                    <div style={{marginTop:'2%' }} className="row">
                    <input type="text" placeholder="Genre"></input>
                    </div>
                    <div style={{marginTop:'2%' }} className="row">
                    <input type="date" placeholder="Release date"></input>
                    </div>
                    <div style={{marginTop:'2%' }} className="row">
                    <input style={{height:'200px' }} type="text" placeholder="Description"></input>
                    </div>
                    <div  className="row">
                        <button  style={{ backgroundColor: '#A77F32', color:'black' }} className="submit" >
                      Edit book
                      <div className="circle">
                        <div style={{marginTop:'7px' }} className="row">
                      <img
                    src={Shape}
                    alt="Sample Image"
                    className="img-shape"
                  />
                  </div>
                      </div>
                    </button>
                        </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;