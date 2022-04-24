import React from "react";
import NavBar from "./components/navigation";
import Routes from "./routes";
import "./styles/App.css";

function App() {
  return (
    <div className="mainApp">
      <div className="app">
        <NavBar />
        <Routes />
      </div>
    </div>
  );
}

export default App;
