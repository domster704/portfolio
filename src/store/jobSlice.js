import {createSlice} from '@reduxjs/toolkit';
import {fetchCategories} from './applicationThunk';

const initialState = {
    list: [{
        date: "сентябрь 2021 — декабрь 2023",
        position: "Android-developer",
        subPosition: ["Middle Engineer"],
        companyName: "Янтарь+",
        companyURL: "https://amberizh.ru/",
        about: "Разработка мобильного сервиса по оформлению заказов для торговых представителей, просмотру своей статистики и задолженности. " +
            "<br> Улучшил интерфейс программы, ускорил работу алгоритмов более чем в 2.5 раза, оптимизировал SQL-запросы",
        skills: ["Android", "Java", "MySQL", "XML", "FTP", "DBF"]
    }, {
        date: "июнь — июль 2023",
        position: "Full-stack developer",
        subPosition: ["Junior Engineer"],
        companyName: "ПРОНЕТКОМ",
        companyURL: "https://pronetcom.ru/",
        about: "Поддержка уществующего проекта, code-reviewing, написание SQL-запросов, мобильная разработка.<br> Ускорил многие SQL-запросы в среднем на 40%.",
        skills: ["JavaScript", "HTML", "CSS", "Cordova", "SVN", "PostgreSQL", "Node.js", "RESTful", "SFA системы"]
    }, {
        date: "октябрь 2023 — сейчас",
        position: "Front-end developer",
        subPosition: ["Web-разработчик", "Контент-менеджер"],
        companyName: "Dial Digital Agency",
        companyURL: "https://dialweb.ru/",
        about: "Верстка, разработка сайтов под CMS Битрикс.<br> Выполнение работ на существующих сайтах",
        skills: ["JavaScript", "HTML5", "CSS3", "CMS", "Bitrix CMS", "Figma", "PHP", "Bitrix24", "Flexbox", "БЭМ"]
    }].reverse()
};

const jobSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, {payload}) => {
            state.categories = payload;
        });
    }
});

export default jobSlice.reducer;