import styles from "./favorite.module.css";
import Logo from "/travel.png";
import {
  DeleteFilled,
  DeleteOutlined,
  DeleteTwoTone,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { Row, Col, Button, Modal } from "antd";
import { getTwoToneColor, setTwoToneColor } from "@ant-design/icons";
import { removeFavorite } from "../redux/favoriteSlice";
import { useDispatch } from "react-redux";


export default function FavoriteItem({place}) {
  const dispatch = useDispatch();
  const handleRemove =() =>{
    dispatch(removeFavorite(place));
  }
  console.log("placename",place.name);
  return (
    <>
      <div className={styles.favoritebox}>
        <div className={styles.placebox}>
          <img src={place.image} alt={place.image} width={"150px"} />
          <h2 className={styles.name}>{place.name}</h2>
        </div>
        <div>
          {/* <Button onClick={showPromiseConfirm}>With promise</Button> */}
          <Button
            type="text"
            onClick={handleRemove}
            icon={<DeleteTwoTone style={{ fontSize: "30px" }} />}
            danger
          />
        </div>
      </div>
    </>
  );
}
