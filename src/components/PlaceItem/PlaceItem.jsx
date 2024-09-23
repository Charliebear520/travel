import styles from "./place.module.css";

export default function PlaceItem({ place }) {
  return (
    <>
      <div>
        <img src={place.image} alt="" width="200px" />
        <h2 className={styles.name}>{place.name}</h2>
      </div>
    </>
  );
}
