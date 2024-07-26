import {createSlice} from '@reduxjs/toolkit';

import CP_PDF from '../assets/docs/CP.pdf';
import ITS_PDF from '../assets/docs/ITS.pdf';
import KM_PDF from '../assets/docs/KM.pdf';

import ITS from '../assets/image/certificate/ITS_S.webp';
import CP from '../assets/image/certificate/CP_S.webp';
import KM from '../assets/image/certificate/KM_S.webp';

const initialState = {
    list: [{
        png: ITS,
        pdf: ITS_PDF,
        isActive: true,
    }, {
        png: CP,
        pdf: CP_PDF,
        isActive: false,
    }, {
        png: KM,
        pdf: KM_PDF,
        isActive: false,
    }, ],
};

export const achievementsSlice = createSlice({
    name: 'achievementsSlice',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.list[action.payload.index].isActive = action.payload.isActive;
        }
    }
});

export const {setActive} = achievementsSlice.actions;
export default achievementsSlice.reducer;