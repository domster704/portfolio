import React from 'react';
import * as style from './ListElement.module.css'

import link from '../../../../../assets/image/svg/link.svg'

const Job = ({job}) => {
    return (
        <a href={job.companyURL} target="blank">
            <div className={style.element}>
                <div className={style.elementHeader}>{job.date}</div>
                <div>
                    <div className={style.specialization}>
                        <div className={style.elementBlockHeader}>
                            <div>
                                {job.position}&nbsp;·&nbsp;{job.companyName}
                                <span className={style.elementBlockHeader_linkDefault}>
                                    <img
                                        className={style.elementBlockHeader_link}
                                        src={link}
                                        alt=""/>
                                </span>
                            </div>
                        </div>
                        <div className={style.elementBlockUnderHeader}>
                            {
                                job.subPosition.map((pos, index) =>
                                    <div key={index}>
                                        {pos}
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className={style.specializationAbout}>{job.about}</div>
                    <div className={style.skillsList}>
                        {
                            job.skills.map((skill, index) => {
                                return <div key={index}
                                            className={style.skill}>
                                    {skill}
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Job;