import React from 'react';
import * as styleAllProject from '../AllProjects.module.css'
import * as styleJob from '../../Resume/Main/ListElement/ListElement.module.css'

import linkGray from '../../../../assets/image/svg/link_gray.svg'
import link from '../../../../assets/image/svg/link.svg'

const ProjectRow = ({project}) => {
    return (
        <div className={styleAllProject.row}>
            <div className={styleAllProject.col1}>{project.year}</div>
            <div className={styleAllProject.col2}>
                <a href={project.links[0].link}>
                    {project.name}
                    <span className={styleAllProject.linkSvg_block}>
                        <img className={styleAllProject.linkSvg_block__imgLink}
                             src={link}
                             alt=""/>
                    </span>
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
                        return (
                            <div key={index} className={styleAllProject.link_element}>
                                <a className={styleAllProject.col5_text}
                                   href={link.link}
                                   target="_blank">
                                    {link.name}
                                    <span className={styleAllProject.linkSvg_block}>
                                        <img className={styleAllProject.linkSvg_block__imgLink}
                                             src={linkGray}
                                             alt=""/>
                                    </span>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ProjectRow;