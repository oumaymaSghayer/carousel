import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
//import "./Dark.css";
import Shopify from "./components/shopify/Shopify";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const getTheme = (val) => {
    setDarkMode(val);
  };
  return (
    <div className="App">
      <Shopify />
      {/**<Screen updateTheme={(val) => getTheme(val)} /> */}
    </div>
  );
}

export default App;
