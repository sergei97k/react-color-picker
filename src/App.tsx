import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please, run <code>yarn storybook</code> to see the component example.
        </p>
        <a
          className="App-link"
          href="http://localhost:6006/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open localhost:6006
        </a>
      </header>
    </div>
  );
}

export default App;
