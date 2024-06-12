import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./routes/Home.js";
import Vega from "./routes/Vega.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vega" element={<Vega />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
