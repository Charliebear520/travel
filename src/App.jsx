import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Place from "./pages/Place";
import Favorite from "./pages/Favorite/Favorite";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places/id/:placeId" element={<Place />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
