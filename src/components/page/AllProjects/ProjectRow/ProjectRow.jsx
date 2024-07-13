import React from 'react';
import * as styleAllProject from '../AllProjects.module.css'
import * as styleJob from '../../Resume/Main/ListElement/ListElement.module.css'

import linkGray from '../../../../assets/image/svg/link_gray.svg'
import linkBlue from '../../../../assets/image/svg/link_blue.svg'
import link from '../../../../assets/image/svg/link.svg'

const ProjectRow = ({project}) => {
    return (
        <div className={styleAllProject.row}>
            <div className={styleAllProject.col1}>{project.year}</div>
            <div className={`${styleAllProject.col2} ${styleAllProject.col2_desk}`}>{project.name}</div>
            <div className={styleAllProject.col2_new}>
                <a href={project.links[0].link}>
                    <div className={`${styleAllProject.col2} ${styleAllProject.col2_mobile}`}>
                        <div>{project.name}</div>
                        <div><img className={styleAllProject.col5_link} src={link} alt=""/></div>
                    </div>
                </a>
            </div>
            <div className={styleAllProject.col3}>{project.target}</div>
            <div className={styleAllProject.col4}>
                {
                    project.skills.map((skill, index) => {
                        return <div key={index} className={styleJob.skill}>{skill}</div>
                    })
                }
            </div>
            <div className={styleAllProject.col5}>
                {
                    project.links.map((link, index) => {
                        return <div key={index} className={styleAllProject.link_element}>
                            <a href={link.link} target="_blank">
                                <div>
                                    <div className={styleAllProject.col5_text}>{link.name}</div>
                                    <div className={styleAllProject.link_element_default}>
                                        <img className={styleAllProject.col5_link}
                                             src={linkGray}
                                             alt=""/>
                                    </div>
                                    <div className={styleAllProject.link_element_hover}>
                                        <img className={styleAllProject.col5_link}
                                             src={linkBlue}
                                             alt=""/>
                                    </div>
                                </div>
                            </a>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default ProjectRow;