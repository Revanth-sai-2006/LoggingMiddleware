import React from "react";
import LoginButton from "./components/LoginButton";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Frontend Logging System</h1>
        <LoginButton />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
