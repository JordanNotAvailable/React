// import './App.css';
import Home from "./componets/home";
import Login from "./componets/login";
import Signup from "./componets/singup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" element={<Login/>}/>
          <Route path= "/signup" element={<Signup/>}/>
          <Route path= "/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
