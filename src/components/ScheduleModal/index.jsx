import React, { useState } from 'react';
import { Modal, Button, Form, Input, DatePicker } from 'antd';

export default function ScheduleModal({ isOpen, toggleModal }) {
    // const [isModalVisible, setIsModalVisible] = useState(false);
    const { RangePicker } = DatePicker;
    const [time, setTime] = useState('');
    const [form] = Form.useForm();

    const timeChange = (date, dateString) => {
        setTime(dateString);
    };

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log('Form values:', values);
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
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};
