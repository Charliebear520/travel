import { HeartFilled } from "@ant-design/icons";
import styles from './favorite.module.css'

export default function FavoriteList(){
    return(
        <div className={styles.navbox}>
            <HeartFilled style={{fontSize:'24px',color: 'bisque'}}/>
            <h1 className={styles.title}>Favorite</h1>
        </div>
    )
}