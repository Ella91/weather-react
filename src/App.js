import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello from React</h1>
       <Weather city="Tokyo"/>
      </header>
      <div>
    <small>
      <a href="https://github.com/Ella91/weather-react" target="blank">
        This site was coded by Ella</a>
    </small>
    </div>
    </div>
  );
}

export default App;
