import '../css/LoginRegister.css';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleRegister = async () => { // Mark the function as async
    if (username === '') {
      setUsernameError('Fill out this field');
    } else {
      setUsernameError('');
    }
    if (password === '') {
      setPasswordError('Fill out this field');
    } else {
      setPasswordError('');
    }

    if (username !== '' && password !== '') {
      try {
        if (username !== '' && password !== '') {
          const data = {
            username,
            password,
          };
          const response = await fetch('http://localhost/regnars/library/login.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            // Handle a successful login (e.g., redirect the user)
            const responseData = await response.json(); // Parse the JSON response
            let username = responseData.user['username'];
            Cookies.set('username', username, { expires: 7 });

            const usernameFromCookie = Cookies.get('username');
            if (usernameFromCookie) {
              console.log('Username from cookie:', usernameFromCookie);
            } else {
              console.log('No username cookie found');
            }
          } else {
            // Handle login errors
            console.error('Login failed');
          }
        }
      } catch (error) {
        // Handle network errors
        console.error('Network error', error);
      }
    }
  };
  return (
    <>
    <div className="main">

      <div className="left">
        <div className="imageBox">
          <div className='message'>Welcome back!</div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0AiOka_RCC_moHZ5u4vx1hJ7qUxM03X_jXyPbgmjO3fafVhs" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="registerForm">
          <h1>Log in</h1>
          <div className="inputContainer">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="errMsg" id="userErr">{usernameError}</p>
            </div>
            <div className="inputContainer">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="errMsg" id="passErr">{passwordError}</p>
            </div>
          <div className='box'>
          <button className="submit" onClick={handleRegister}>
                Login
                <div className="circle"></div>
              </button>
          <p>Don't have an account?</p>
          <a href='register'>Register</a>
          </div> 
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
