import {configureStore} from '@reduxjs/toolkit'
import jobSlice from './jobSlice';
import achievementsSlice from "./achievementsSlice";
import projectsSlice from "./projectsSlice";
import projectsRowsSlice from "./projectsRowsSlice";

const store = configureStore({
    reducer: {
        jobs: jobSlice,
        achievements: achievementsSlice,
        projects: projectsSlice,
        projectsRowsSlice: projectsRowsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;