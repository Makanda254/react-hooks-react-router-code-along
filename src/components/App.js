import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />} />
       </ Route>
      </Routes>
    </div>
  );
}

export default App;