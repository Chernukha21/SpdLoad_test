import React,{useRef, useEffect} from 'react';
import {HomePageWrapper} from './Home.page.style.js';
import Header from "../../components/header/Header.jsx";
import Banner from "../../components/banner/Banner.jsx";
import Slider from "../../components/slider/Slider.jsx";



const HomePage = () => {
    const ref = useRef(null);
    console.log(ref);

    function handleClick() {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <>
            <HomePageWrapper>
                <Header/>
                <Banner handleClick={handleClick}/>
            </HomePageWrapper>
            <Slider ref={ref}/>
        </>
    );
};

export default HomePage;