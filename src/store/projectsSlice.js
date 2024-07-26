import {createSlice} from '@reduxjs/toolkit';

import PP from '../assets/image/project/full/PP.webp'
import berest from '../assets/image/project/full/berest.webp'
import MARS_app from '../assets/image/project/full/MARS_app.webp'
import fillWordQT from '../assets/image/project/full/fillWordQT.webp'
import YandexGoTest from '../assets/image/project/full/YandexGoTest.webp'
import siteSQB from '../assets/image/project/full/siteSQB.webp'
import RehabCenter from '../assets/image/project/full/RehabCenter.webp'
import LCT from '../assets/image/project/full/LCT.webp'
import PBS from '../assets/image/project/full/PBS.webp'
import tu from '../assets/image/project/full/tu.webp'

import PP_s from '../assets/image/project/compressed/PP_s.webp'
import berest_s from '../assets/image/project/compressed/berest_s.webp'
import MARS_app_s from '../assets/image/project/compressed/MARS_app_s.webp'
import fillWordQT_s from '../assets/image/project/compressed/fillWordQT_s.webp'
import YandexGoTest_s from '../assets/image/project/compressed/YandexGoTest_s.webp'
import siteSQB_s from '../assets/image/project/compressed/siteSQB_s.webp'
import RehabCenter_s from '../assets/image/project/compressed/RehabCenter_s.webp'
import LCT_s from '../assets/image/project/compressed/LCT_s.webp'
import PBS_s from '../assets/image/project/compressed/PBS_s.webp'
import tu_s from '../assets/image/project/compressed/tu_s.webp'

const initialState = {
    list: [{
        image: tu_s,
        image_full: tu,
        projectName: "Tayelsizdik-urpaktary",
        subPosition: [],
        projectURL: "https://t-u.kz/",
        about: "С 2021 года, по инициативе Президента Касым-Жомарта Кемелевича Токаева ежегодно на конкурсной основе для молодежи присуждается грант «Тәуелсіздік ұрпақтары».",
        skills: ["React.JS", "PostgreSQL", "JavaScript", "Linux", "Nginx", "Figma", "HTML5", "CSS3", "Flexbox"]
    }, {
        image: PP_s,
        image_full: PP,
        projectName: "ГК \"Проектная ПРАКТИКА\"",
        subPosition: [],
        projectURL: "https://pmpractice.ru/training/corporate/",
        about: "ГК \"Проектная ПРАКТИКА\". Комплексные решения управления проектами: консалтинг, автоматизация, обучение, аутсорсинг проектных офисов.",
        skills: ["Bitrix CMS", "JavaScript", "HTML5", "CSS3", "Ajax", "PHP8", "БЭМ", "Figma", "AdaptiveDesign"]
    }, {
        image: berest_s,
        image_full: berest,
        projectName: "Сайт для \"Берест\"",
        subPosition: [],
        projectURL: "https://berest-dom.ru/",
        about: "Интернет-магазин для компании ООО «БЕРЕСТ» по продаже каркасных домов.",
        skills: ["Bitrix CMS", "JavaScript", "HTML5", "CSS3", "AdaptiveDesign"]
    }, {
        image: MARS_app_s,
        image_full: MARS_app,
        projectName: "Онлайн-магазин на Android",
        subPosition: [],
        projectURL: "https://github.com/domster704/MARS-work",
        about: "Онлайн-магазин для ограниченного круга лиц в сфере косметики и парфюмерии, написанный на Java с помощью AndroidAPI.",
        skills: ["Android", "Java", "MySQL", "XML", "FTP", "DBF"]
    }, {
        image: fillWordQT_s,
        image_full: fillWordQT,
        projectName: "Филлворд на QT",
        subPosition: [],
        projectURL: "https://github.com/domster704/fillWord-qt",
        about: "Приложения для визуализации филворда для помощи ученикам школ и других образовательных учреждений в изучении слов английского языка разной сложности.",
        skills: ["C++", "QT5", "CMake", "QSS", "MinGW", "SnakeAlgorithm"]
    }, {
        image: YandexGoTest_s,
        image_full: YandexGoTest,
        projectName: "Тестовое задание для YandexGo",
        subPosition: [],
        projectURL: "https://domster704.github.io/yandex-testTask-react/",
        about: "Тестовое задание в виде верстки для Yandex Crowd",
        skills: ["ReactJS", "JavaScript", "WebPack5", "Babel", "HTML", "CSS"]
    }, {
        image: siteSQB_s,
        image_full: siteSQB,
        projectName: "Кредит онлайн на карту",
        subPosition: [],
        projectURL: "https://domster704.github.io/credit-online-sqb-frontEnd/",
        about: "Веб-страница для компании, занимающейся кредитами.",
        skills: ["HTML", "CSS", "JavaScript", "AdaptiveDesign"]
    }, {
        image: RehabCenter_s,
        image_full: RehabCenter,
        projectName: "Реабилитационный центр",
        subPosition: [],
        projectURL: "https://domster704.github.io/rehab-center-frontEnd/",
        about: "Веб-страница для реабилитационного центра.",
        skills: ["HTML", "CSS", "JavaScript", "AdaptiveDesign"]
    }, {
        image: LCT_s,
        image_full: LCT,
        projectName: "Расчет стоимости недвижимости",
        subPosition: [],
        projectURL: "https://github.com/domster704/calc-value-real-estate",
        about: "Сервис автоматизирует процесс расчета стоимости квартир и позволяет ускорить процедуру выдачи экспертных заключений о стоимости квартир и избежать сделок, при которых имущество продается по цене ниже рыночной.",
        skills: ["Python", "Flask", "JWT-token", "YandexAPI", "Flutter", "HTML", "SQL"]
    }, {
        image: PBS_s,
        image_full: PBS,
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

export const {} = projectsSlice.actions;
export default projectsSlice.reducer;