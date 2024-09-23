import Header from "../../components/Header/Header";
import PlaceList from "../../components/PlaceList/PlaceList";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <PlaceList />
      </div>
    </>
  );
}
