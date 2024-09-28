import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // 引入 useNavigate 和 useLocation 來進行導航和獲取當前路由
import { FloatButton } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons'; // 使用 Ant Design 的地圖圖標
import styles from './navigation.module.css'; // 引入 CSS 模塊

function NavigationButton() {
  const navigate = useNavigate(); // 使用 useNavigate 來獲取導航函數
  const location = useLocation(); // 使用 useLocation 來獲取當前路由

  // 如果當前路由是 "/map" 頁面，則不渲染 FloatButton
  if (location.pathname === '/map') {
    return null;
  }

  // 處理按鈕點擊事件
  const handleClick = () => {
    navigate('/map'); // 導航到 Map 頁面
  };

  return (
    <FloatButton
      icon={<EnvironmentOutlined style={{ fontSize: '24px' }} />} // 使用較大的圖標
      description="Map" // 顯示文字
      className={styles.floatButton} // 使用 CSS 模塊中的樣式
      type="text" // 設置按鈕類型
      onClick={handleClick} // 點擊事件處理
    />
  );
}

export default NavigationButton;
