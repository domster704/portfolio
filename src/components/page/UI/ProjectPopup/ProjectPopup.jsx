import React, {useEffect} from 'react';
import * as style from './ProjectPopup.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setProject} from "../../../../store/filter";
import Skill from "../Skill/Skill";


const ProjectPopup = () => {
    const dispatch = useDispatch();

    const filterStore = useSelector((state) => state.filter);
    const project = filterStore.project;

    useEffect(() => {
        function keydownEventHandler(event) {
            if (event.code === 'Escape') {
                dispatch(setProject(null));
            }
        }

        document.addEventListener('keydown', keydownEventHandler);

        return () => {
            document.removeEventListener('keydown', keydownEventHandler);
        }
    }, [])

    // useEffect(() => {
    //     document.body.style.overflow = !!project ? 'hidden' : '';
    // }, [project]);

    return (
        <div className={`${style.popup} ${!!project && style.active}`}>
            <div className={style.popup__overlay}
                 onClick={() => {
                     dispatch(setProject(null));
                 }}>
            </div>
            <span className={style.popup__close}
                 onClick={() => {
                     dispatch(setProject(null));
                 }}>
            </span>
            <div className={style.popup__content}>
                <h2 className={style.popup__header}>Информация о проекте </h2>

                <div className={style.popup__columns}>
                    <img className={style.popup__image}
                         src={project?.image}
                         alt=""
                         loading='lazy'/>
                    <div className={style.popup__info}>
                        <p><b>Проект:&nbsp;&nbsp;</b> {project?.name}</p>
                        <div>
                            <b>Технологии:&nbsp;&nbsp;</b>
                            {
                                project?.skills.map((skill, index) => {
                                    return <Skill key={index}>{skill}</Skill>
                                })
                            }
                        </div>
                    </div>
                </div>
                <p className={style.popup__description}>{project?.about}</p>
            </div>
        </div>
    );
}

export default ProjectPopup;