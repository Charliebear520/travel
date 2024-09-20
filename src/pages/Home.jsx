import FavoriteList from "../components/FavoriteList/FavoriteList";
import Header from "../components/Header/Header";
import PlaceList from "../components/PlaceList/PlaceList";
import ScheduleList from "../components/ScheduleList/ScheduleList";

export default function Home() {
  return (
    <>
      <Header />
      <PlaceList />
      <FavoriteList/>
      <ScheduleList/>
    </>
  );
}
