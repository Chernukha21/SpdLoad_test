import React from 'react';
import {BannerWrapper, Content, Expand} from './Banner.style.js';
import Arrow from "../../assets/images/arrow_down.svg?react";

const Banner = ({ handleClick }) => {

    const onHandleClick = () => {
        handleClick();
    };

    return (
        <BannerWrapper>
            <Content>
                <p>The space is waiting for</p>
                <p>you</p>
            </Content>
            <Expand onClick={onHandleClick}>
                Explore tours
                <Arrow/>
            </Expand>
        </BannerWrapper>
    );
};

export default Banner;