import SideBar from './SideBar';
import '../css/App.css';

function Login() {
  return (
    <>
    <SideBar />
    <div className="main">
      <div className="left">
        <div className="imageBox">
          <div className='message'>Welcome back!</div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0AiOka_RCC_moHZ5u4vx1hJ7qUxM03X_jXyPbgmjO3fafVhs" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="registerForm">
          <h1>Register</h1>
          <input type="text" placeholder="Username"/>
          <input type="text" placeholder="Password"/> 
          <div className='box'>
          <button className='submit'>
              Log in
              <div className="circle">
                <img src="https://pin.it/3kQ27o3" alt="" />
              </div>
          </button> 
          <p>Don't have an account</p>
          <a href='login'>Register</a>
          </div> 
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
