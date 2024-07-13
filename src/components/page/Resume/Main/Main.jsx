import React from 'react';
import {useSelector} from "react-redux";
import * as style from './Main.module.css'

import next from '../../../../assets/image/svg/next.svg';

import resumePDF from '../../../../assets/docs/resume.pdf';

import {SocialNetwork} from "../Header/Header";
import Job from "./ListElement/Job";
import Project from "./ListElement/Project";
import {Link} from "react-router-dom";
import Achievements from "./Achievements/Achievements";

const Main = () => {
    const jobs = useSelector(state => state.jobs);
    const projects = useSelector(state => state.projects);

    return (
        <main className={style.main}>
            <div>
                <div className="mobile-about">О себе</div>
                <div className={style.about}>
                    <p>
                        Я — Full-stack разработчик с опытом, специализирующийся на создании веб-приложений,
                        веб-серверов,
                        UI/UX и
                        конфигурации виртуальных машин.
                    </p>
                    <p>
                        Мобильную разработку я изучил в <a href="https://www.samsung.com/ru/inrussia/school/"
                                                           target="_blank"> IT School Samsung</a>.
                        После этого я работал в компании <a href="https://amberizh.ru/" target="_blank">Янтарь+</a> 3
                        года.
                        Параллельно с этим набирал опыт в следующих компаниях: ПРОНЕТКОМ и Dial Digital Agency.
                    </p>
                    <p>
                        В <a href="https://amberizh.ru/" target="_blank">Янтарь+</a> я занимал позицию
                        Android-разработчика, где улучшил интерфейс мобильного сервиса и
                        оптимизировал работу алгоритмов.

                        <br/>В <a href="https://pronetcom.ru/" target="_blank">ПРОНЕТКОМ</a>
                        я работал Full-stack разработчиком, занимался ускорением SQL-запросов
                        и улучшениями функционала существующего проекта <a href="https://easymerch.ru/"
                                                                           target="_blank">EasyMerch</a>.

                        <br/>В настоящее время я занимаю позицию Front-end разработчика в
                        <a href="https://dialweb.ru/" target="_blank">Dial Digital Agency</a>, где занимаюсь версткой и
                        разработкой сайтов под 1С-Битрикс: Управление сайтом. Имею <a
                        href="https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=34&INDEX=Y"
                        target="_blank">сертификацию
                        1C-Битрикс в области "Контент-менеджер".</a>
                    </p>
                    <div>
                        <p>Мои ключевые навыки включают: создание и настройка сайтов под управлением
                            <a href="https://www.1c-bitrix.ru/products/cms/" target="_blank">1С-Битрикс: Управление
                                сайтом</a>,
                            разработка клиент-серверных приложений, PWA, SPA на
                            <a href="https://react.dev/" target="_blank">ReactJS</a> +
                            <a href="https://palletsprojects.com/p/flask/" target="_blank">Flask</a>/
                            <a href="https://fastapi.tiangolo.com/" target="_blank">FastAPI</a>/
                            <a href="https://expressjs.com/ru/" target="_blank">ExpressJS</a>,
                            конфигурация Linux-серверов,
                            <a href="https://nginx.org/ru/" target="_blank">Nginx</a>,
                            <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>,
                            создание кроссплатформенного ПО на <a href="https://www.qt.io/" target="_blank">QT</a>.
                        </p>
                    </div>
                    <p>
                        Также я получаю высшее образование в <a href="https://misis.ru/" target="_blank">НИТУ МИСИС</a>
                        по специальности
                        <a href="https://misis.ru/applicants/admission/baccalaureate-and-specialty/faculties/math/"
                           target="_blank">прикладная математика</a> и продолжаю развиваться как Full&#8209;stack
                        разработчик.
                    </p>
                </div>
                <Achievements/>
                <SocialNetwork isMobile={true}/>
            </div>
            <div>
                <div className="mobile-exp">Опыт</div>
                <div className={style.jobsList}>
                    <a href={resumePDF} target="_blank">
                        <div className={style.viewFullResume}>
                            <p>Полное резюме</p>
                            <img src={next} alt=""/>
                        </div>
                    </a>
                    {
                        jobs.list.map((job, index) => {
                            return <Job key={index} job={job}/>
                        })
                    }
                </div>
            </div>
            <div>
                <div className="mobile-projects">Проекты</div>
                <div className={style.projectsList}>
                    <Link to="/projectList">
                        <div className={style.viewFullResume}>
                            <p>Полный список проектов</p>
                            <img src={next} alt=""/>
                        </div>
                    </Link>
                    {
                        projects.list.map((project, index) => {
                            return <Project key={index} project={project}/>
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default Main;