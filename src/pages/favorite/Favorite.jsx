import React, {useState,useEffect} from 'react';
import Header from "../../components/header/Header.jsx";
import {FavoriteWrapper, FavoriteCards, Divider} from "./Favorite.style.js";
import {useRecoilState, useRecoilValue} from 'recoil';
import { favoritesState } from '../../recoil/Atom.js';
import Card from "../../components/card/Card.jsx";
import {Container} from "../../components/container/Container.style";


const Favorite = () => {
    const [favorites, setFavorites] = useRecoilState(favoritesState);
    console.log("1",favorites);

    const removeFromFavorites = (id) => {
        const updatedFavorites = favorites.filter((item) => item.id !== id);
        console.log(updatedFavorites);
        setFavorites(updatedFavorites);
    };

    const handlerRemoveAll = () => {
        setFavorites([]);
    }

    return (
        <>
            <FavoriteWrapper>
                <Header isFavorite/>
            </FavoriteWrapper>
            <Container>
                <Divider onClick={handlerRemoveAll}>Clear all</Divider>
                <FavoriteCards>
                    {favorites.map(item => <Card onRemove={() => removeFromFavorites(item.id)} isAdded={true} name={item.name} description={item.description} id={item.id}/>)}
                </FavoriteCards>
            </Container>
        </>

    );
};

export default Favorite;