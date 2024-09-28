import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Place from "./pages/Place/Place";
import Favorite from "./pages/Favorite/Favorite";
import Schedule from "./pages/Schedule/Schedule";
import Map from "./pages/Map/map";
import NavigationButton from "./components/NavigationButton/NavigationButton";

function App() {
  return (
    <BrowserRouter>
     <NavigationButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places/id/:placeId" element={<Place />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/map" element={<Map/>}/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
