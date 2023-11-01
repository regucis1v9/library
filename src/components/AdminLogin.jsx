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
            window.location.href = "localhost:3000/dashboard";
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
      <div className="mainRegister">
        <div className="left">
          <div className="imageBox">
            <div className='message'>Welcome back!</div>
            <img src="https://cdn.discordapp.com/attachments/1124484480141377566/1169096113463246928/image0.jpg?ex=6554289a&is=6541b39a&hm=251273b862d14a8e6d4a04de2e7d283821fb36d4418d31431c279ca893db2f30&" alt="" />
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
                Log in
                <div className="circle"></div>
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
