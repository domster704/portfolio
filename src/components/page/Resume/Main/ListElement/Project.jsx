import React from 'react';
import * as style from './ListElement.module.css'
import link from "../../../../../assets/image/svg/link.svg";

const Project = ({project}) => {
    return (
        <div className={`${style.element} ${style.element_mobile_reverse}`}>
            <div className={style.elementHeader}>
                <div className={style.imageBlock}>
                    <a href={project.image_full} target="blank">
                        <img className={style.image}
                             src={project.image}
                             alt=""
                             loading='lazy'/>
                    </a>
                </div>
            </div>
            <a href={project.links?.find(element => element?.main === true)?.link} target="blank">
                <div>
                    <div className={style.specialization}>
                        <div className={style.elementBlockHeader}>
                            <div>
                                {project.name}
                                <span className={style.elementBlockHeader_linkDefault}>
                                    <img
                                        className={style.elementBlockHeader_link}
                                        src={link}
                                        alt=""/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={style.specializationAbout}>
                        {project.about}
                    </div>
                    <div className={style.skillsList}>
                        {
                            project.skills.map((skill, index) => {
                                return <p key={index}
                                          className={style.skill}>
                                    {skill}
                                </p>
                            })
                        }
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Project;