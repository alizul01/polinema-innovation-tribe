import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar";

function App() {
  return (
      <BrowserRouter>
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/about"} element={<About />} />
            </Routes>
          </main>
      </BrowserRouter>
  )
}

export default App
