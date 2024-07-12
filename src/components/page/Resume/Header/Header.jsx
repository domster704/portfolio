import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './Header.module.css'

import githubLogo from '../../../../assets/image/svg/github.svg';
import mailLogo from '../../../../assets/image/svg/mail.svg';
import whatsappLogo from '../../../../assets/image/svg/whatsapp.svg';
import tgLogo from '../../../../assets/image/svg/tg.svg';

export const SocialNetwork = ({isMobile = false}) => {
    return (
        <div className={`${style.socialNetworks} ${!isMobile ? style.iconsDesktop : style.iconsMobile}`}>
            <a href="https://github.com/domster704" target="_blank">
                <div className={style.socialNetworks_element}
                     style={{
                         backgroundImage: `url(${githubLogo})`
                     }}>
                </div>
            </a>
            <a href="https://t.me/domster704" target="_blank">
                <div className={style.socialNetworks_element}
                     style={{
                         backgroundImage: `url(${tgLogo})`
                     }}>
                </div>
            </a>
            <a href="https://wa.me/79127458900" target="_blank">
                <div className={style.socialNetworks_element}
                     style={{
                         backgroundImage: `url(${whatsappLogo})`
                     }}>
                </div>
            </a>
            <a href="mailto:domster704@mail.ru" target="_blank">
                <div className={style.socialNetworks_element}
                     style={{
                         backgroundImage: `url(${mailLogo})`
                     }}>
                </div>
            </a>
        </div>
    )
}

const Header = (props) => {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    return (
        <header className={style.headerBlock}>
            <h2 className={style.header}>Исупов Григорий</h2>
            <h3 className={style.subHeader}>Full-stack developer</h3>
            <p className={style.description}>Разработка сайтов, мобильных приложений, кроссплатформенных решений</p>
            <div className={style.blockLinkList}>
                <div className={`${style.blockLinkList_element} ${style.active}`} id="main-about">
                    <span className={style.blockLinkList_element_line}></span>
                    <p className={style.blockLinkList_element_text}>О себе</p>
                </div>
                <div className={style.blockLinkList_element} id="main-job-place-list">
                    <span className={style.blockLinkList_element_line}></span>
                    <p className={style.blockLinkList_element_text}>Опыт</p>
                </div>
                <div className={style.blockLinkList_element} id="main-project-list">
                    <span className={style.blockLinkList_element_line}></span>
                    <p className={style.blockLinkList_element_text}>Проекты</p>
                </div>
            </div>
            <SocialNetwork/>
        </header>
    );
}

export default Header;