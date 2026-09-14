import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Menu from "./Page/Menu";
import Chisiamo from "./Page/Chi_siamo";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/chi-siamo" element={<Chisiamo />} />
    </Routes>
  );
}

export default App;
