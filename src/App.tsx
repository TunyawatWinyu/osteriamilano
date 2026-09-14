import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Menu from "./Page/Menu";
import Chisiamo from "./Page/Chi_siamo";
import Gallery from "./Page/Gallery";
import Contatti from "./Page/Contatti";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/chi-siamo" element={<Chisiamo />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contatti" element={<Contatti />} />
    </Routes>
  );
}

export default App;
