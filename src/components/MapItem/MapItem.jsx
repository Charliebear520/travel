import styles from "./map.module.css"
import { Row, Col } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // 引入 Leaflet 的樣式
import landmarks from "../../json/place.json"

export default function MapItem() {
    const center =[36.23541690015412, 137.97220383903155];
    const markerIcon = new L.Icon({
        iconUrl: "/public/pin.png",
        iconSize: [35, 35],
      });

    return (
        
        <div className={styles.fullScreen}>
            <Row className={styles.mapContainer}>
                <Col span={24} className={styles.mapCol}>
                    <MapContainer center={center} zoom={7} className={styles.map}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={center} >
                            <Popup>
                                地圖中心
                            </Popup>
                        </Marker>
                        {/* 從 landmarks 中匯入的 Marker */}
                        {landmarks.map((landmark) => (
                            <Marker key={landmark.id} position={landmark.position} icon={markerIcon}>
                                <Popup>{landmark.name}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </Col>
            </Row>
        </div>
    );
}