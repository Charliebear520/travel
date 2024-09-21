import FavoriteBar from "../components/FavoriteBar/FavoriteBar";
import Header from "../components/Header/Header";
import PlaceBar from "../components/PlaceBar/PlaceBar";
import PlaceList from "../components/PlaceList/PlaceList";
import ScheduleBar from "../components/ScheduleBar/ScheduleBar";

export default function Home() {
  return (
    <>
      <Header />
      <PlaceBar />
      <FavoriteBar />
      <ScheduleBar />
      <PlaceList/>
    </>
  );
}
