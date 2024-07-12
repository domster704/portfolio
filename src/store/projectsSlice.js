import {createSlice} from '@reduxjs/toolkit';

import PP from '../assets/image/project/PP.png'
import berest from '../assets/image/project/berest.jpg'
import MARS_app from '../assets/image/project/MARS_app.png'
import fillWordQT from '../assets/image/project/fillWordQT.png'
import YandexGoTest from '../assets/image/project/YandexGoTest.png'
import siteSQB from '../assets/image/project/siteSQB.png'
import RehabCenter from '../assets/image/project/RehabCenter.png'
import LCT from '../assets/image/project/LCT.png'
import PBS from '../assets/image/project/PBS.png'
import tu from '../assets/image/project/tu.png'

const initialState = {
    list: [{
        image: tu,
        projectName: "Tayelsizdik-urpaktary",
        subPosition: [],
        projectURL: "https://t-u.kz/",
        about: "С 2021 года, по инициативе Президента Касым-Жомарта Кемелевича Токаева ежегодно на конкурсной основе для молодежи присуждается грант «Тәуелсіздік ұрпақтары».",
        skills: ["React.JS", "PostgreSQL", "JavaScript", "Linux", "Nginx", "Figma", "HTML5", "CSS3", "Flexbox"]
    }, {
        image: PP,
        projectName: "ГК \"Проектная ПРАКТИКА\"",
        subPosition: [],
        projectURL: "https://pmpractice.ru/training/corporate/",
        about: "ГК \"Проектная ПРАКТИКА\". Комплексные решения управления проектами: консалтинг, автоматизация, обучение, аутсорсинг проектных офисов.",
        skills: ["Bitrix CMS", "JavaScript", "HTML5", "CSS3", "Ajax", "PHP8", "БЭМ", "Figma", "AdaptiveDesign"]
    }, {
        image: berest,
        projectName: "Сайт для \"Берест\"",
        subPosition: [],
        projectURL: "https://berest-dom.ru/",
        about: "Интернет-магазин для компании ООО «БЕРЕСТ» по продаже каркасных домов.",
        skills: ["Bitrix CMS", "JavaScript", "HTML5", "CSS3", "AdaptiveDesign"]
    }, {
        image: MARS_app,
        projectName: "Онлайн-магазин на Android",
        subPosition: [],
        projectURL: "https://github.com/domster704/MARS-work",
        about: "Онлайн-магазин для ограниченного круга лиц в сфере косметики и парфюмерии, написанный на Java с помощью AndroidAPI.",
        skills: ["Android", "Java", "MySQL", "XML", "FTP", "DBF"]
    }, {
        image: fillWordQT,
        projectName: "Филлворд на QT",
        subPosition: [],
        projectURL: "https://github.com/domster704/fillWord-qt",
        about: "Приложения для визуализации филворда для помощи ученикам школ и других образовательных учреждений в изучении слов английского языка разной сложности.",
        skills: ["C++", "QT5", "CMake", "QSS", "MinGW", "SnakeAlgorithm"]
    }, {
        image: YandexGoTest,
        projectName: "Тестовое задание для YandexGo",
        subPosition: [],
        projectURL: "https://domster704.github.io/yandex-testTask-react/",
        about: "Тестовое задание в виде верстки для Yandex Crowd",
        skills: ["ReactJS", "JavaScript", "WebPack5", "Babel", "HTML", "CSS"]
    }, {
        image: siteSQB,
        projectName: "Кредит онлайн на карту",
        subPosition: [],
        projectURL: "https://domster704.github.io/credit-online-sqb-frontEnd/",
        about: "Веб-страница для компании, занимающейся кредитами.",
        skills: ["HTML", "CSS", "JavaScript", "AdaptiveDesign"]
    }, {
        image: RehabCenter,
        projectName: "Реабилитационный центр",
        subPosition: [],
        projectURL: "https://domster704.github.io/rehab-center-frontEnd/",
        about: "Веб-страница для реабилитационного центра.",
        skills: ["HTML", "CSS", "JavaScript", "AdaptiveDesign"]
    }, {
        image: LCT,
        projectName: "Расчет стоимости недвижимости",
        subPosition: [],
        projectURL: "https://github.com/domster704/calc-value-real-estate",
        about: "Сервис автоматизирует процесс расчета стоимости квартир и позволяет ускорить процедуру выдачи экспертных заключений о стоимости квартир и избежать сделок, при которых имущество продается по цене ниже рыночной.",
        skills: ["Python", "Flask", "JWT-token", "YandexAPI", "Flutter", "HTML", "SQL"]
    }, {
        image: PBS,
        projectName: "PolarBearSearch",
        subPosition: [],
        projectURL: "https://github.com/domster704/polar-bear-server",
        about: "Приложение по поиску белых медведей в Арктике по снимкам с самолёта.",
        skills: ["Python", "Flask", "OpenCV", "C#", "Windows Forms"]
    }]
};

export const projectsSlice = createSlice({
    name: 'projectsSlice',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        }
    }
});

export const {setText} = projectsSlice.actions;
export default projectsSlice.reducer;