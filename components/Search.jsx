import { useState } from "react";
import "./search.css";

const Search = (props) => {
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="City"
        spellCheck="false"
        name=""
        id=""
        value={name}
        onChange={(e) => handleName(e)}
      />
      <button onClick={() => props.func(name)}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};

export default Search;
