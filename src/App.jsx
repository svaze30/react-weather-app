import Search from "../components/Search";
import Weather from "../components/Weather";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <Search />
        <Weather />
      </div>
    </>
  );
}

export default App;
