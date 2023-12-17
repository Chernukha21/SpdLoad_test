import React, {useState} from 'react';
import {ButtonsWrapper, BuyButton, CardWrapper, Content, LikeButton} from './Card.style.js';
import spaceGirl from "../../assets/images/space_girl.png";
import Heart from "../../assets/images/heart.svg?react";
import Basket from "../../assets/images/busket.svg?react";

const Card = ({ description,name, onAdd, onRemove, isAdded }) => {

    const text = description;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const handleClick = () => {
        if (isAdded && onRemove) {
            onRemove();
        } else if (!isAdded && onAdd) {
            onAdd();
        }
    };

    return (
        <CardWrapper>
            <img src={spaceGirl} alt="#"/>
            <Content>
                <p>{name}</p>
                <p>
                    {isReadMore ? text.slice(0, 100) : text}
                    <span
                        onClick={toggleReadMore}
                        className="read-or-hide"
                        style={{ color: "#051527", fontWeight: "400" }}
                    >
                    {isReadMore ? "...read more" : " show less"}
                    </span>
                </p>
            </Content>
            <ButtonsWrapper>
                <BuyButton>buy</BuyButton>
                {isAdded ?<LikeButton onClick={handleClick}><Basket/></LikeButton>
                    : <LikeButton onClick={handleClick}><Heart/></LikeButton>
                }
            </ButtonsWrapper>
        </CardWrapper>
    );
};

export default Card;