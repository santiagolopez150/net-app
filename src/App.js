import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
// TODO

// 1. HEADER

// 2. BODY

// 3. MODAL PARA VER INFORMACION COMPLETA DE LA IMAGEN

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
