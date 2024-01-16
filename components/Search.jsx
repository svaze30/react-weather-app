import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="City" spellCheck="false" name="" id="" />
      <button>
        {/* <img src="" alt="bro" /> */}
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};

export default Search;
