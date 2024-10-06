import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            const exists = state.some(favorite => favorite.id === action.payload.id);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            return state.filter(favorite => favorite.id !== action.payload.id);
        },
    },
});
export const selectFavItems = (state) => state.favorites.schedules;
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;