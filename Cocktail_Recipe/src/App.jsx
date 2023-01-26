import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Home /> */}
      <h1>Your ultimate cocktail guide</h1>
      <button>
        <Link to="Home">Home</Link>
      </button>

      <button>
        <Link to="AboutUs">About Us</Link>
      </button>
      <br />
      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
