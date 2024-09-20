import styles from "./header.module.css"
import Logo from "../../assets/travel.png"
import { Divider } from "antd"

export default function Header(){
    return(
        <div>
            <img src={Logo} alt='logo' width={'80px'}/>
            <h1 className={styles.title}>Travel</h1>
            <Divider style={{  borderColor: '#ffffff' }}/>
        </div>
    )
}