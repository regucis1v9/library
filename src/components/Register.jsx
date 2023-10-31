import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleRegister = async () => { // Mark the function as async
    if (username === '') {
      setUsernameError('Fill out this field');
    } else {
      setUsernameError('');
    }
    if (email === '') {
      setEmailError('Fill out this field');
    } else {
      setEmailError('');
    }
    if (password === '') {
      setPasswordError('Fill out this field');
    } else {
      setPasswordError('');
    }

    if (username !== '' && email !== '' && password !== '') {
      try {
        if (username !== '' && password !== '') {
          const data = {
            username,
            password,
            email
          };
          const response = await fetch('http://localhost/regnars/library/register.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            // Handle a successful login (e.g., redirect the user)
            const responseData = await response.json(); // Parse the JSON response
            console.log('Registration successful', responseData);
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
            <div className='message'>Lets get started!</div>
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUiwISyFWQSsOmqPiIUCiRet5XXrtP2sBWBwHnj7HOimxnqELO" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="registerForm">
            <h1>Register</h1>
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
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="errMsg" id="emailErr">{emailError}</p>
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
            <div className="box">
              <button className="submit" onClick={handleRegister}>
                Register
                <div className="circle"></div>
              </button>
              <p>Already have an account?</p>
              <a href="login">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
