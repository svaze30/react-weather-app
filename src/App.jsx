import { useState } from "react";
import Search from "../components/Search";
import Weather from "../components/Weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("bangalore");

  const changeCity = (childCity) => {
    setCity(childCity);
  };

  return (
    <>
      <div className="card">
        <Search func={changeCity} />
        <Weather city={city} />
      </div>
    </>
  );
}

export default App;
