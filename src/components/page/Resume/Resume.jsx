import React from "react";
import * as style from './Resume.module.css'
import Header from "./Header/Header";
import Main from "./Main/Main";

const Resume = () => {
    return (
        <div className={style.headerMain}>
            <Header/>
            <Main/>
        </div>
    );
}

export default Resume;