import { useState, useEffect } from "react";
import { Button, Radio, Space, Modal, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addSchedule } from "../redux/addToSchedule";
import { selectScheduleName } from "../redux/addToSchedule";
import styles from "./addToSchedule.module.css";

export default function AddToSchedule({ landmark }) {
    useEffect(() => {
        const storedScheduleItem = localStorage.getItem('scheduleItem');
        if (storedScheduleItem) {
            setSelectedSchedule(storedScheduleItem);
        }
    }, []);

    const saveScheduleItemToLocalStorage = (landmark) => {
        localStorage.setItem('scheduleItem', JSON.stringify(landmark));
    };

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
        console.log('scheduleItem:',scheduleItem)
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const scheduleItem = useSelector(selectScheduleName) || [];
    const [selectedSchedule, setSelectedSchedule] = useState('');

    const onChange = (e) => {
        const newSchedule = e.target.value;
        setSelectedSchedule(newSchedule);
        setValue(e.target.value);
    };

    const handleOk = () => {
        if (scheduleItem.length > 0) {
            addToFav();
        }
        notification.success({
            message: '成功新增景點!',
            description: `已添加 ${landmark.name} 到${selectedSchedule}中`,
            placement: 'top'
        });
        saveScheduleItemToLocalStorage(selectedSchedule);
    };

    const addToFav = () => {
        dispatch(addSchedule({
            scheduleName: selectedSchedule,
            landmark: {
                name: landmark.name,
                id: landmark.id,
                image: landmark.image,
                position: landmark.position,
                description: landmark.description,
                end_time: landmark.end_time,
                qty: 1,
            },
        }));
    };

    return (
        <div>
            <Button type="primary" className={styles.addbox} onClick={showModal}>
                加入行程
            </Button>

            <Modal
                title="加入行程"
                centered
                open={open}
                onOk={handleOk}
                okType="default"
                onCancel={handleCancel}
                className={styles.drawer}
            >
                {scheduleItem.length === 0 ? (<div>請先建立行程!</div>) : (
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                            {scheduleItem.map((item, index) => (
                                <Radio key={index} value={item.scheduleName}>{item.scheduleName}</Radio>
                            ))}
                        </Space>
                    </Radio.Group>)}
            </Modal>
        </div>
    );
}