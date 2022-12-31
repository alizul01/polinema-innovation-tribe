import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Idea from "./pages/Idea";
import Competition from "./pages/Competition";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar />
        </header>
        <main className="m-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/idea" element={<Idea />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
