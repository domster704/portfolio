import React from 'react';
import * as style from './Skill.module.css'

const Skill = ({children}) => {
    return (
        <p className={style.skill}>
            {children}
        </p>
    );
}

export default Skill;