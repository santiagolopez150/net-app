import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import Favorites from "./pages/favorites";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
