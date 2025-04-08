import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/style.css';
import Home from "./pages/Home.js";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
