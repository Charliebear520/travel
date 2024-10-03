import React, { useState } from 'react';
import { Modal, Button, Form, Input, DatePicker, notification } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { addScheduleItems } from '../redux/scheduleSlice';

export default function ScheduleModal({ isOpen, toggleModal }) {
    // const [isModalVisible, setIsModalVisible] = useState(false);
    const { RangePicker } = DatePicker;
    const [form] = Form.useForm();

    const [time, setTime] = useState('');
    const timeChange = (date, dateString) => {
        setTime(dateString);
    };

    const [scheduleName, setScheduleName] = useState('');
    const nameChange = (name) => {
        setScheduleName(name);
    }

    const handleOk = () => {
        form.validateFields().then(values => {
            dispatch(addScheduleItems({
                scheduleName: values['schedule name:'],
                time: time,
            }));
            console.log('Action dispatched');
            notification.success({
                message: '已新增行程!',
                description: `已添加 ${values['schedule name:']} 到行程中`,
                placement: 'top'
            });
            toggleModal();
            form.resetFields();
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
    };

    const handleCancel = () => {
        toggleModal();
        form.resetFields();
    };

    const dispatch = useDispatch();


    return (
        <div>
            <Modal
                title="新增行程"
                open={isOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="date"
                        label="日期"
                        rules={[{ required: true, message: '請選擇日期' }]}
                    >
                        <RangePicker onChange={timeChange} />
                    </Form.Item>
                    <Form.Item
                        name="schedule name:"
                        label="行程名稱"
                        rules={[{ required: true, message: '請輸入行程名稱' }]}
                    >
                        <Input onChange={(e) => nameChange(e.target.value)} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>

    );
};

