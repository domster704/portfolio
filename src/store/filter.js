import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    project: null
};

export const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setProject: (state, action) => {
            state.project = action.payload
        }
    }
});

export const {setProject} = filter.actions;
export default filter.reducer;