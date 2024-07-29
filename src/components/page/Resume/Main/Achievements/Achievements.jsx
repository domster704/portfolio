import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './Achievements.module.css';

import arrow_back from "../../../../../assets/image/svg/arrow_back.svg";
import arrow_next from "../../../../../assets/image/svg/arrow_next.svg";
import {setActive} from "../../../../../store/achievementsSlice";

const AchievementsList = ({
                              sliderBlockRef,
                              sliderBlockArrowBackRef,
                              sliderBlockArrowNextRef
                          }) => {
    const [currentSliderPosition, setCurrentSliderPosition] = React.useState(0);
    const achievementsStore = useSelector(state => state.achievements);
    const dispatch = useDispatch();

    useEffect(() => {
        let sliderBlock = sliderBlockRef.current;
        let sliderElements = Array.from(sliderBlock.children);
        let arrowBack = sliderBlockArrowBackRef.current;
        let arrowNext = sliderBlockArrowNextRef.current;

        function onClickArrowBack(event) {
            event.stopPropagation();
            if (currentSliderPosition - 1 < 0) {
                setCurrentSliderPosition(sliderElements.length - 1);
            } else {
                setCurrentSliderPosition(currentSliderPosition - 1);
            }
        }

        function onClickArrowNext(event) {
            event.stopPropagation();
            if (currentSliderPosition + 1 >= sliderElements.length) {
                setCurrentSliderPosition(0);
            } else {
                setCurrentSliderPosition(currentSliderPosition + 1);
            }
        }

        arrowBack.addEventListener('click', onClickArrowBack);
        arrowNext.addEventListener('click', onClickArrowNext);

        return () => {
            arrowBack.removeEventListener('click', onClickArrowBack);
            arrowNext.removeEventListener('click', onClickArrowNext);
        }
    }, [currentSliderPosition]);

    useEffect(() => {
        achievementsStore.list.forEach((el, index) => {
            if (index === currentSliderPosition) {
                if (el.isActive) {
                    return;
                }
                dispatch(setActive({
                    index: index,
                    isActive: true
                }));
                return;
            }

            if (el.isActive === false) {
                return;
            }
            dispatch(setActive({
                index: index,
                isActive: false
            }));
        });
    }, [currentSliderPosition]);

    return (
        <div className={style.achievementsImgBlockList}>
            {
                achievementsStore.list.map((el, index) => {
                    return (
                        <div key={index}
                             className={`${style.achievementImgBlock} ${el.isActive && style.active}`}>
                            <a href={el.pdf} target="_blank">
                                <img src={el.png} alt="" loading='lazy'/>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    );
}

const Achievements = () => {
    const sliderBlockRef = React.useRef(null);
    const sliderBlockArrowBackRef = React.useRef(null);
    const sliderBlockArrowNextRef = React.useRef(null);

    return (
        <div ref={sliderBlockRef} className={style.achievements} id="slider-block">
            <div className={style.achievementsArrow}>
                <div ref={sliderBlockArrowBackRef}
                     style={{
                         backgroundImage: `url(${arrow_back})`
                     }}
                     id="slider-arrow-back"></div>
            </div>
            <AchievementsList sliderBlockRef={sliderBlockRef}
                              sliderBlockArrowBackRef={sliderBlockArrowBackRef}
                              sliderBlockArrowNextRef={sliderBlockArrowNextRef}/>
            <div className={style.achievementsArrow}>
                <div ref={sliderBlockArrowNextRef}
                     style={{
                         backgroundImage: `url(${arrow_next})`
                     }}
                     id="slider-arrow-next"></div>
            </div>
        </div>
    );
}

export default Achievements;