import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Page/Home";
import Menu from "./Page/Menu";
import Chisiamo from "./Page/Chi_siamo";
import Gallery from "./Page/Gallery";
import Contatti from "./Page/Contatti";
import Prenotazione from "./Page/Prenotazione";

function App() {
  return (
    <Routes>
      {/* Pagina iniziale */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/chi-siamo" element={<Chisiamo />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contatti" element={<Contatti />} />
      <Route path="/prenotazione" element={<Prenotazione />} />
    </Routes>
  );
}

export default App;
