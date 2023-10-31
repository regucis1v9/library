import SideBar from './SideBar';
import '../css/App.css';

function App() {
  return (
    <>
    <SideBar />
    <div className="main">
      <div className="left">
        <div className="imageBox">
          <div>Lets get started</div>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUiwISyFWQSsOmqPiIUCiRet5XXrtP2sBWBwHnj7HOimxnqELO" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="registerForm">
          <h1>Register</h1>
          <input type="text" placeholder="Username"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Password"/> 
          <div className='box'>
          <button className='submit'>
              Register
              <div className="circle"></div>
          </button> 
          <p>Already have an account?</p>
          <a href='google.com'>Log in</a>
          </div> 
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
