import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Place from "./pages/Place/Place";
import Favorite from "./pages/Favorite/Favorite";
import Schedule from "./pages/Schedule/Schedule";
import ScheduleDetailPage from "./pages/ScheduleDetailPage";
import Map from "./pages/Map/map";
import NavigationButton from "./components/NavigationButton/NavigationButton";
import { Provider } from 'react-redux';
import { ConfigProvider } from "antd";
import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider>
          <NavigationButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="places/id/:placeId" element={<Place />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/schedule/:scheduleId" element={<ScheduleDetailPage />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </ConfigProvider>
      </BrowserRouter>

    </Provider>

  );
}

export default App;
