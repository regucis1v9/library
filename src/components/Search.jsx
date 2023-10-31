import SideBar from './SideBar';
import '../css/Search.css';

function Search() {
  return (
    <>
    <div className="mainSearch">
        <h1>Search for a book</h1>
        <div className="searchBox">
            <input type="text" name="" id="" />
            <button className='submit'>
                Search
                <div className="circle"></div>
            </button>
        </div>
    </div>
    </>
  );
}

export default Search;
