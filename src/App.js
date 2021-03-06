import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Search from "./views/Search";
import Recipe from "./views/Recipe";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/search" component={Search} />
        <Route path="/recipe/:id" component={Recipe} />
      </div>
    </BrowserRouter>
  );
}

export default App;
