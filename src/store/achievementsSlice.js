import {createSlice} from '@reduxjs/toolkit';

import ITS from '/src/assets/image/certificate/ITS_S.webp';
import CP from '/src/assets/image/certificate/CP_S.webp';
import KM from '/src/assets/image/certificate/KM_S.webp';

const initialState = {
    list: [{
        png: ITS,
        pdf: 'https://portfolio.ln-kr.ru/data/docs/ITS.pdf',
        isActive: true,
    }, {
        png: CP,
        pdf: 'https://portfolio.ln-kr.ru/data/docs/CP.pdf',
        isActive: false,
    }, {
        png: KM,
        pdf: 'https://portfolio.ln-kr.ru/data/docs/KM.pdf',
        isActive: false,
    },],
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