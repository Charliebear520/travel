import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    schedules: [{
        scheduleId: '1',
        scheduleName: '範例行程',
        time: '2024-10-05',
        landmarks: [],
    },]
};
const addToScheduleSlice = createSlice({
    name: 'addToSchedules',
    initialState,
    reducers: {
        addSchedule: (state, action) => {
            const { scheduleName, scheduleId, time, landmarks, landmark } = action.payload;
            let isDuplicate = state.schedules.find(item => item.scheduleName === scheduleName);
            // const exists = state.some(favorite => favorite.id === action.payload.id);
            // if (!exists) {
            //     state.push(action.payload);
            // }
            if (!state.schedules) {
                console.error("State schedules is undefined");
                return;
            }
            if (!isDuplicate) {
                state.schedules.push({
                    scheduleId,
                    scheduleName,
                    time,
                    landmarks,
                });
            } else {
                console.log('行程名稱重複，無法添加');
                const existingSchedule = state.schedules.find(schedule => schedule.scheduleName === scheduleName);
                if (existingSchedule) {
                    // 檢查是否已存在相同的地標，避免重複添加
                    const existingLandmark = existingSchedule.landmarks.find(l => l.name === landmark.name);
                    if (!existingLandmark) {
                        // 如果没有找到相同的 landmark，添加新的 landmark
                        existingSchedule.landmarks.push(landmark);
                    }
                    // 如果地標已存在，則不進行任何操作
                } else {
                    // 如果没有找到对应的 scheduleName，创建一个新的条目
                    state.schedules.push({
                        scheduleName: scheduleName,
                        landmarks: [landmark] // 确保这里使用的是复数形式，与上文一致
                    });
                }
            }
        },
        removeSchedule: (state, action) => {
            // return state.filter(favorite => favorite.id !== action.payload.id);
            const { scheduleName, landmarkName } = action.payload;
            const scheduleIndex = state.schedules.findIndex(schedule => schedule.scheduleName === scheduleName);
            if (scheduleIndex !== -1) {
                const landmarks = state.schedules[scheduleIndex].landmarks;
                const filteredLandmarks = landmarks.filter(landmark => landmark.name !== landmarkName);
                state.schedules[scheduleIndex].landmarks = filteredLandmarks;
            }
        },
        updateLandmarkOrder: (state, action) => {
            const { scheduleName, newLandmarks } = action.payload;
            const scheduleIndex = state.schedules.findIndex(schedule => schedule.scheduleName === scheduleName);
            if (scheduleIndex >= 0) {
                state.schedules[scheduleIndex].landmarks = newLandmarks;
            }
        }
    },
});
// export state to global
export const selectScheduleName = (state) => state.addToSchedule.schedules;
export const { addSchedule, removeSchedule, updateLandmarkOrder } = addToScheduleSlice.actions;
export default addToScheduleSlice.reducer;
