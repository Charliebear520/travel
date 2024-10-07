import styles from "./map.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, AutoComplete, Input } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // 引入 Leaflet 的樣式
import { HeartFilled, HeartOutlined, } from "@ant-design/icons";
import landmarks from "../../json/place.json";
import AddToFavorite from "../AddToFavorite";
import CreateSchedule from "../CreateSchedule";
import AddToSchedule from "../AddToSchedule";


export default function MapItem() {
    const center = [36.23541690015412, 137.97220383903155];
    const markerIcon = new L.Icon({
        iconUrl: "/pin.png",
        iconSize: [35, 35],
    });
    const certerIcon = new L.Icon({
        iconUrl: "/location.png",
        iconSize: [35, 35],
    });

    // const ButtonClick = (landmark) => {
    //     setClick(!click);
    //     dispatch(addFavorite({
    //         id: landmark.id,
    //         name: landmark.name,
    //         image: landmark.image,
    //     }));
    // };

    const [options, setOptions] = useState([]);  // 搜尋選項
    const navigate = useNavigate();
    // 當使用者輸入時動態提供搜尋建議
    const handleSearch = (value) => {
        const searchResults = landmarks
            .filter(landmark => landmark.name.toLowerCase().includes(value.toLowerCase()))
            .map(landmark => ({
                value: landmark.name,
                id: landmark.id,  // 加入 ID 以便搜尋後導覽
            }));

        setOptions(searchResults);
    };

    // 搜尋後導覽到對應景點
    const onSelect = (value, option) => {
        navigate(`/places/id/${option.id}`);
    };

    // 處理按下 Enter 鍵後的行為
    const onSearch = (value) => {
        const selectedPlace = landmarks.find(landmark => landmark.name.toLowerCase() === value.toLowerCase());
        if (selectedPlace) {
            navigate(`/places/id/${selectedPlace.id}`);
        }
    };

    return (

        <div className={styles.fullScreen}>
            {/* 搜尋欄 */}
            <Row justify="center" className={styles.searchRow}>
                <Col span={18}>
                    <AutoComplete
                        options={options}
                        onSearch={handleSearch}
                        onSelect={onSelect}
                        style={{ width: '65%' }}
                    >
                        <Input.Search
                            placeholder="搜尋景點"
                            enterButton
                            onSearch={onSearch}  // 處理 Enter 鍵觸發導航
                        />
                    </AutoComplete>
                </Col>
            </Row>
            <Row className={styles.mapContainer}>
                <Col span={24} className={styles.mapCol}>
                    <MapContainer center={center} zoom={7} className={styles.map}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={center} icon={certerIcon}>
                            <Popup>
                                地圖中心
                            </Popup>
                        </Marker>
                        {/* 從 landmarks 中匯入的 Marker */}
                        {landmarks.map((landmark) => (
                            <Marker key={landmark.id} position={landmark.position} icon={markerIcon}>
                                <Popup className={styles.popup}>
                                    <div className={styles.landmarkName}>
                                        {landmark.name}
                                    </div>
                                    <img
                                        src={landmark.image}
                                        className={styles.img}
                                    />
                                    <div className={styles.buttonContainer}>
                                        <AddToFavorite landmark={landmark} />
                                        <AddToSchedule landmark={landmark}/>
                                        {/* <Button type="primary">加入行程</Button> */}
                                    </div>

                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </Col>
            </Row>
            <CreateSchedule />
        </div>
    );
}