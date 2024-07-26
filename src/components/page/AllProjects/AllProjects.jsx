import React from 'react';
import {useSelector} from "react-redux";
import * as style from './AllProjects.module.css'

import backSvg from "../../../assets/image/svg/back.svg"
import {Link} from "react-router-dom";
import ProjectRow from "./ProjectRow/ProjectRow";

const AllProjects = () => {
    const projects = useSelector(state => state.projects);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={style.projects}>
            <Link to="/">
                <div className={style.back}>
                    <div className={style.backImageBlock}>
                        <img alt="" src={backSvg}/>
                    </div>
                    <p>Полное резюме</p>
                </div>
            </Link>
            <h1 className={style.header}>Все проекты</h1>
            <div className={style.table}>
                <div className={`${style.row} ${style.tableHeader}`}>
                    <p className={style.col1}>Год</p>
                    <p className={style.col2}>Проект</p>
                    <p className={style.col3}>Цель</p>
                    <p className={style.col4}>Технологии</p>
                    <p className={style.col5}>Ссылки</p>
                </div>
                {
                    projects.list.map((item, index) => {
                        return <ProjectRow key={index} project={item}/>
                    })
                }
            </div>
        </div>
    );
}

export default AllProjects;