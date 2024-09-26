import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import PlaceDetail from "../components/PlaceDetail/PlaceDetail";
import places from "../json/place.json";

export default function Place() {
  const { placeId } = useParams();
  const place = places.find(
     (x) => x.id === placeId
  );

  return (
    <div>
      <Header />
      <PlaceDetail place={place} />
    </div>
  );
}
