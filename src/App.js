import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from './components/Portfolio';

function App() {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/hello`)
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(() => setApiMessage("API not reachable"));
  }, []);

  return (
    <div className="App">
      <p>Laravel API says: {apiMessage}</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;