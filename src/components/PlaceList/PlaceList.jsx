import { EnvironmentFilled } from "@ant-design/icons";
import styles from './place.module.css'

export default function PlaceList(){
    return(
        <div className={styles.navbox}>
            <EnvironmentFilled style={{fontSize:'24px',color: 'bisque'}}/>
            <h1 className={styles.title}>Site</h1>
        </div>
    )
}