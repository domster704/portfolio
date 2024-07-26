import React from 'react';
import * as style from './ListElement.module.css'

const Project = ({project}) => {
    return (
        <div className={style.element}>
            <div className={`${style.elementHeader} ${style.elementHeaderImageDesktop}`}>
                <div className={style.imageBlock}>
                    <a href={project.image_full} target="blank">
                        <img className={style.image} src={project.image} alt=""/>
                    </a>
                </div>
            </div>
            <a href={project.links?.find(element => element?.main === true)?.link} target="blank">
                <div>
                    <div className={style.specialization}>
                        <div className={style.elementBlockHeader}>
                            <div>{project.name}</div>
                        </div>
                    </div>
                    <div className={style.specializationAbout}>
                        {project.about}
                    </div>
                    <div className={style.skillsList}>
                        {
                            project.skills.map((skill, index) => {
                                return <div key={index}
                                            className={style.skill}>
                                    {skill}
                                </div>
                            })
                        }
                    </div>
                </div>

                {/*Мобильное отображение фотографии*/}
                <div className={`${style.elementHeader} ${style.imageMobile}`}>
                    <div className={style.imageBlock}>
                        <img className={style.image} src={project.image} alt=""/>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Project;