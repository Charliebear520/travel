import { ScheduleFilled } from "@ant-design/icons";
import styles from './schedule.module.css'

export default function ScheduleList(){
    return(
        <div className={styles.navbox}>
            <ScheduleFilled style={{fontSize:'24px',color: 'bisque'}}/>
            <h1 className={styles.title}>Schedule</h1>
        </div>
    )
}