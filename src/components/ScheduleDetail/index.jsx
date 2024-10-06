import React from 'react';
import { useRef } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import styles from './schedule.module.css';
import { selectScheduleName, updateLandmarkOrder } from '../redux/addToSchedule';

const ScheduleDetail = () => {
    const { scheduleId } = useParams(); // 從路由中獲取行程 ID
    const schedules = useSelector(selectScheduleName);
    const dispatch = useDispatch();
    const schedule = schedules.find(s => s.scheduleId === scheduleId); // 根據 ID 獲取行程

    const startDate = new Date(schedule.time[0]);
    const endDate = new Date(schedule.time[1]);
    const startTime = `${startDate.getMonth() + 1}/${startDate.getDate()}`;
    const endTime = `${endDate.getMonth() + 1}/${endDate.getDate()}`;

    if (!schedule) {
        return <div>行程不存在</div>;
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(schedule.landmarks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        dispatch(updateLandmarkOrder({ scheduleName: schedule.scheduleName, newLandmarks: items }));
    };

    return (
        <>
            <div className={styles.containerbox}>
                <Row gutter={[32, 32]}>
                    <Col span={24}>
                        <a style={{ color: '#fff', fontSize: '2.2rem', marginRight: '1.5rem' }}>{schedule.scheduleName}</a>
                        <a style={{ color: '#fff', fontSize: '1.8rem' }}>日期: {startTime}~{endTime}</a>
                        <p style={{ color: '#fff', fontSize: '1.4rem' }}>加入的景點:</p>
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="landmark">
                            {(provided) => (
                                <div
                                    className={styles.favoritebox}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {schedule.landmarks.map((landmark, index) => (
                                        <Draggable 
                                            key={landmark.id || `${landmark.name}-${index}`} 
                                            draggableId={landmark.id ? landmark.id.toString() : `${landmark.name}-${index}`} 
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    className={styles.placebox}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                        cursor: 'move',
                                                    }}
                                                >
                                                    <img src={landmark.image} alt={landmark.name} width="150px" />
                                                    <h2 className={styles.name}>{landmark.name}</h2>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ScheduleDetail;