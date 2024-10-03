import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { addFavorite, removeFavorite } from '../redux/favoriteSlice';
import styles from './addToFavorite.module.css';

export default function AddToFavorite({ landmark }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    useEffect(() => {
        const isFav = favorites.some(fav => fav.id === landmark.id);
        setIsFavorite(isFav);
    }, [favorites, landmark.id]);

    const handleClick = (e) => {
        e.stopPropagation(); // 阻止點擊事件冒泡
        if (isFavorite) {
            dispatch(removeFavorite(landmark));
            console.log('removeFavorite:',landmark.name);
        } else {
            dispatch(addFavorite({
                id: landmark.id,
                name: landmark.name,
                image: landmark.image,
            }));
            console.log('addFavorite:',landmark.name)
        }
    };

    return (
        <div className={styles.buttonHeart} onClick={handleClick}>
            {isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </div>
    );
}