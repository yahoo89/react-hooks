import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Alert } from './components/Alert'
import { AlertState } from "./context/alert/AlertState";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert alert={{ text: 'Test alert' }} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
