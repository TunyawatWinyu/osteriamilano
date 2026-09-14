import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Menu from "./Page/Menu";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
