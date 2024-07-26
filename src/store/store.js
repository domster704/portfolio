import {configureStore} from '@reduxjs/toolkit'
import jobSlice from './jobSlice';
import achievementsSlice from "./achievementsSlice";
import projectsSlice from "./projectsSlice";

const store = configureStore({
    reducer: {
        jobs: jobSlice,
        achievements: achievementsSlice,
        projects: projectsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;