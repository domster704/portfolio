import {configureStore} from '@reduxjs/toolkit'
import jobSlice from './jobSlice';
import achievementsSlice from "./achievementsSlice";
import projectsSlice from "./projectsSlice";
import filter from "./filter";

const store = configureStore({
    reducer: {
        jobs: jobSlice,
        achievements: achievementsSlice,
        projects: projectsSlice,
        filter: filter
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;