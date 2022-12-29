import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Navigate from "./components/Navigate";
import Idea from "./pages/Idea";

function App() {
  return (
      <BrowserRouter>
          <div>
              <header>
                  <Navigate />
              </header>
              <main className={"container"}>
                  <Routes>
                      <Route path={"/"} element={<Home />} />
                      <Route path={"/idea"} element={<Idea />} />
                  </Routes>
              </main>
          </div>
      </BrowserRouter>
  )
}

export default App
