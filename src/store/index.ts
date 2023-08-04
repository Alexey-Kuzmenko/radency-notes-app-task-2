import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import menuReducer from './menuSlice';

const store = configureStore({
    reducer: {
        notes: notesReducer,
        menu: menuReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;