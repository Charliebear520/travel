import PlaceItem from "../PlaceItem/PlaceItem";
import places from "../../json/place.json";
import styles from "./place.module.css";

const PlaceObj = {
  title: "This is Taiwan",
  detail: "good",
};

export default function PlaceList() {
  return (
    <>
      <div className={styles.containerbox}>
        <h1 className={styles.title}>Featured destinations</h1>
        <div className={styles.container}>
          {places.map((place) => (
            <PlaceItem key={place.id} place={place} />
          ))}
        </div>
      </div>
    </>
  );
}
