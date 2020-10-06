import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Signup from "./views/Signup";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </BrowserRouter>
  );
}

export default App;
