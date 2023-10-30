import SideBar from './SideBar';
import '../css/App.css';

function App() {
  return (
    <>
    <SideBar />
    <div className="main">
      <div className="left"></div>
      <div className="right">
        <div className="registerForm">
          <h1>Register</h1>
          <input type="text" />
          <input type="text" />
          <input type="text" />  
          <button className='submit'></button>      
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
