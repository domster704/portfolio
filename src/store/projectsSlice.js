import {createSlice} from '@reduxjs/toolkit';

import PP from '../assets/image/project/compressed/PP.webp'
import berest from '../assets/image/project/compressed/berest.webp'
import MARS_app from '../assets/image/project/compressed/MARS_app.webp'
import fillWordQT from '../assets/image/project/compressed/fillWordQT.webp'
import YandexGoTest from '../assets/image/project/compressed/YandexGoTest.webp'
import siteSQB from '../assets/image/project/compressed/siteSQB.webp'
import RehabCenter from '../assets/image/project/compressed/RehabCenter.webp'
import LCT from '../assets/image/project/compressed/LCT.webp'
import PBS from '../assets/image/project/compressed/PBS.webp'
import tu from '../assets/image/project/compressed/tu.webp'

// https://www.simpleimageresizer.com/resize/webp

const initialState = {
    list: [{
        active: true,
        image: tu,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/tu.webp',

        name: "Tayelsizdik-urpaktary",
        about: "С 2021 года, по инициативе Президента Касым-Жомарта Кемелевича Токаева ежегодно на конкурсной основе для молодежи присуждается грант «Тәуелсіздік ұрпақтары».",
        skills: ["React.JS", "PostgreSQL", "JavaScript", "Linux", "Nginx", "Figma", "HTML5", "CSS3", "Flexbox"],

        links: [{
            name: "WebSite",
            link: "https://t-u.kz/",
            main: true
        }, {
            name: "GitHub",
            link: "https://github.com/domster704/descendants-of-independence-front"
        }, {
            name: "Figma",
            link: "https://www.figma.com/design/rJZ2EYnHJSMhAJDlkJSY36/Tayelsizdik-urpaktary-(Copy)?t=ZCxfFReFO0SOcNIm-0"
        }],
        year: 2024,
        target: "Министерство информации и общественного развития Казахстана",
    }, {
        active: true,
        image: PP,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/PP.webp',

        name: "ГК \"Проектная ПРАКТИКА\"",
        about: "ГК \"Проектная ПРАКТИКА\". Комплексные решения управления проектами: консалтинг, автоматизация, обучение, аутсорсинг проектных офисов.",
        skills: ["Bitrix CMS", "JavaScript", "HTML5", "CSS3", "Ajax", "PHP8", "БЭМ", "Figma", "AdaptiveDesign"],

        links: [{
            name: "WebSite",
            link: "https://pmpractice.ru/training/corporate/",
            main: true
        }, {
            name: "Figma",
            link: "https://www.figma.com/file/ItgOYh4tFSqwObdxrJSx4M/Проектная-практика?node-id=4807%3A25476"
        }],
        year: 2023,
        target: "ГК \"Проектная ПРАКТИКА\"",
    }, {
        active: true,
        image: berest,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/berest.webp',

        name: "Сайт для \"Берест\"",
        about: "Интернет-магазин для компании ООО «БЕРЕСТ» по продаже каркасных домов.",
        skills: ["Bitrix CMS", "JavaScript", "HTML5", "CSS3", "AdaptiveDesign"],

        links: [{
            name: "WebSite",
            link: "https://berest-dom.ru/",
            main: true
        }],
        year: 2023,
        target: "ООО «БЕРЕСТ»",
    }, {
        active: true,
        image: MARS_app,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/MARS_app.webp',

        name: "Онлайн-магазин на Android",
        about: "Онлайн-магазин для ограниченного круга лиц в сфере косметики и парфюмерии, написанный на Java с помощью AndroidAPI.",
        skills: ["Android", "Java", "MySQL", "XML", "FTP", "DBF"],

        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/MARS-work",
            main: true
        }],
        year: "2021",
        target: "ООО Янтарь+",
    }, {
        active: true,
        image: fillWordQT,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/fillWordQT.webp',

        name: "Филлворд на QT",
        about: "Приложения для визуализации филворда для помощи ученикам школ и других образовательных учреждений в изучении слов английского языка разной сложности.",
        skills: ["C++", "QT5", "CMake", "QSS", "MinGW", "SnakeAlgorithm"],

        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/fillWord-qt",
            main: true
        }],
        year: 2023,
        target: "НИТУ МИСИС",
    }, {
        active: true,
        image: YandexGoTest,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/YandexGoTest.webp',

        name: "Тестовое задание для YandexGo",
        about: "Тестовое задание в виде верстки для Yandex Crowd",
        skills: ["ReactJS", "JavaScript", "WebPack5", "Babel", "HTML", "CSS"],

        links: [{
            name: "WebSite",
            link: "https://domster704.github.io/yandex-testTask-react/",
            main: true
        }, {
            name: "GitHub",
            link: "https://github.com/domster704/yandex-testTask-react"
        }, {
            name: "Figma",
            link: "https://www.figma.com/file/CcNXFQa0aSxk1Pdw1P0IZ8/go-scooter-pass?node-id=0%3A1&mode=dev"
        }],
        year: 2023,
        target: "ООО \"ЯНДЕКС КРАУД\"",
    }, {
        active: true,
        image: siteSQB,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/siteSQB.webp',

        name: "Кредит онлайн на карту",
        about: "Веб-страница для компании, занимающейся кредитами.",
        skills: ["HTML", "CSS", "JavaScript", "AdaptiveDesign"],
        links: [{
            name: "WebSite",
            link: "https://domster704.github.io/credit-online-sqb-frontEnd/",
            main: true
        }, {
            name: "GitHub",
            link: "https://github.com/domster704/credit-online-sqb-frontEnd"
        }, {
            name: "Figma",
            link: "https://www.figma.com/file/vA01M8jr3EJxuiOxoVCfuW/CreditOnlineQSB?type=design&node-id=0-1&mode=design&t=0BLjfRxdmciGTTbs-0"
        }],
        year: 2023,
        target: "ITConstruct",
    }, {
        active: true,
        image: RehabCenter,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/RehabCenter.webp',

        name: "Реабилитационный центр",
        about: "Веб-страница для реабилитационного центра.",
        skills: ["HTML", "CSS", "JavaScript", "AdaptiveDesign"],

        links: [{
            name: "WebSite",
            link: "https://domster704.github.io/rehab-center-frontEnd/",
            main: true
        }, {
            name: "GitHub",
            link: "https://github.com/domster704/rehab-center-frontEnd"
        }, {
            name: "Figma",
            link: "https://www.figma.com/file/w09wpKUB0tgmN1yB4C0UiK/RecoverCenter?type=design&node-id=1-3&mode=design"
        }],
        year: 2023,
        target: "ITConstruct",
    }, {
        active: true,
        image: PBS,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/PBS.webp',

        name: "PolarBearSearch",
        about: "Приложение по поиску белых медведей в Арктике по снимкам с самолёта.",
        skills: ["Python", "Flask", "OpenCV", "C#", "Windows Forms"],

        links: [{
            name: "Web-server",
            link: "https://github.com/domster704/polar-bear-server",
            main: true
        }, {
            name: "Windows App",
            link: "https://github.com/nikitakaralius/polar-bear-search"
        }, {
            name: "Presentation",
            link: "https://docs.google.com/presentation/d/1W6TYky-1J5u0NYLySvSMae3_9TNV22Un0rMTcUU4gtM/edit?usp=sharing"
        }],
        year: 2021,
        target: "Цифровой прорыв",
    }, {
        image: LCT,
        image_full: 'https://portfolio.ln-kr.ru/data/image/project/full/LCT.webp',

        name: "Расчет стоимости недвижимости",
        about: "Сервис автоматизирует процесс расчета стоимости квартир и позволяет ускорить процедуру выдачи экспертных заключений о стоимости квартир и избежать сделок, при которых имущество продается по цене ниже рыночной.",
        skills: ["Python", "Flask", "JWT-token", "YandexAPI", "Flutter", "HTML", "SQL"],

        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/calc-value-real-estate"
        }, {
            name: "Documentation",
            link: "https://docs.google.com/document/d/1HpV5P3-jPuAqcvheBeXZuVYLP_j4Lgj5FY8Zawyhgn4/edit#heading=h.1w2u5joy8ub6"
        }],
        year: 2022,
        target: "ЛЦТ",
    }, {
        name: "Филлворд на React",
        about: '',
        skills: ["ReactJS", "Redux/Toolkit", "Webpack5", "Babel", "HTML", "CSS", "JavaScript"],

        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/fillWord-react"
        }, {
            name: "WebSite",
            link: "https://domster704.github.io/fillWord-react/"
        }],
        year: 2023,
        target: "Pet-project",
    }, {
        name: "VR-визуализация каталитического крекинга",
        about: '',
        skills: ["Unity", "C#", "SteamVR"],

        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/https://github.com/domster704/catalytic-cracking-vr"
        }, {
            name: "Video",
            link: "https://drive.google.com/file/d/1qvcbCWMlOofYf0SUGdOZUqAYU1gTqj_1/view?usp=sharing"
        }],
        year: 2021,
        target: "ПАО Роснефть",
    }, {
        name: "WebServerGeneration",
        about: '',
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "Python", "Flask", "SQLAlchemy"],

        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/web-server-generation"
        }],
        year: 2021,
        target: "Pet-project",
    }, {
        name: "Игра-клон Osu",
        about: '',
        skills: ["HTML", "JavaScript", "Canvas2D"],

        links: [{
            name: "GitHub",
            link: "https://github.com/domster704/osu-web"
        }, {
            name: "WebSite",
            link: "https://domster704.github.io/osu-web/"
        }],
        year: 2021,
        target: "Pet-project",
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