import styles from "./favorite.module.css";
import Logo from "../../assets/travel.png";
import {
  DeleteFilled,
  DeleteOutlined,
  DeleteTwoTone,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { Row, Col, Button, Modal } from "antd";
import { getTwoToneColor, setTwoToneColor } from "@ant-design/icons";

setTwoToneColor("#eb2f96");
getTwoToneColor(); // #eb2f96

const { confirm } = Modal;
const showPromiseConfirm = () => {
  confirm({
    title: "Do you want to delete these items?",
    icon: <ExclamationCircleFilled />,
    content:
      "When clicked the OK button, this dialog will be closed after 1 second",
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {},
  });
};

export default function FavoriteItem() {
  return (
    <>
      <div className={styles.favoritebox}>
        <div className={styles.placebox}>
          <img src={Logo} alt="logo" width={"40px"} />
          <h2 className={styles.name}>Japan,Kyoto</h2>
        </div>
        <div>
          {/* <Button onClick={showPromiseConfirm}>With promise</Button> */}
          <Button
            type="text"
            onClick={showPromiseConfirm}
            icon={<DeleteTwoTone style={{ fontSize: "30px" }} />}
            danger
          />
        </div>
      </div>
    </>
  );
}
