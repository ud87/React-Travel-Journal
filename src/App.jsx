import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./data.js";
import Nav from "./components/Nav.jsx";
import TravelCard from "./components/TravelCard.jsx";

function App() {
  const travelData = data.map((item) => {
    return <TravelCard item={item} />;
  });
  console.log(travelData);

  return (
    <div className="container">
      <Nav />
      {travelData}
    </div>
  );
}

export default App;
