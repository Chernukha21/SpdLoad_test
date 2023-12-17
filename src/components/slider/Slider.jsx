import React, {forwardRef, useState} from 'react';
import Card from "../card/Card.jsx";
import {gql, useQuery} from "@apollo/client";
import {LogoSection, SliderButton, SliderButtons, SliderWrapper} from "./Slider.style.js";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper/modules';
import {Container} from "../container/Container.style";
import Prev from "../../assets/images/arrow_left.svg?react";
import Next from "../../assets/images/arrow_right.svg?react";
import {useRecoilState} from "recoil";
import {favoritesState} from "../../recoil/Atom.js";

const rockets_query = gql`
  query rockets_query {
    rockets {
       id
       description
       name
 }
}`;


const Slider = forwardRef((props, ref) => {
    const {loading, error, data} = useQuery(rockets_query);
    const [swiperRef, setSwiperRef] = useState(null);
    const [favorites, setFavorites] = useRecoilState(favoritesState);


    const handleAddToFavorites = (item) => {
        const updateFavorites = [...favorites];
        updateFavorites.push(item);
        setFavorites(updateFavorites);
    };

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const {rockets} = data;

    console.log(favorites)
    return (
        <>
            <SliderWrapper ref={ref}>
                <Container>
                    <LogoSection>
                        popular tours
                        <SliderButtons>
                            <SliderButton onClick={prevHandler}><Prev/></SliderButton>
                            <SliderButton onClick={nextHandler}><Next/></SliderButton>
                        </SliderButtons>
                    </LogoSection>
                    <Swiper
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        onSwiper={(swiper) => setSwiperRef(swiper)}
                        slidesPerView={3}
                        spaceBetween={24}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {rockets.map((item) => {
                            return <SwiperSlide>
                                        <Card actionType="add"
                                              id={item.id}
                                              onAdd={() => handleAddToFavorites(item)} isAdded={false}
                                              name={item.name}
                                              description={item.description}/>
                                </SwiperSlide>
                        })}
                    </Swiper>
                </Container>
            </SliderWrapper>
        </>
    );
});

export default Slider;