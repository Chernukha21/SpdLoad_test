import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";
import {HeaderWrapper, AccountButtons, Navigation, Inner, FavoriteButton, SignInButton} from "./Header.style.js";
import {Container} from "../container/Container.style.js";
import Heart from "../../assets/images/heart.svg?react";


const Header = ({isFavorite}) => {
    const navigate = useNavigate();
    function delayAndGo(e, path) {
        e.preventDefault();
        setTimeout(() =>navigate(path), 1000);
    }

    return (
        <HeaderWrapper>
            <Container>
                <Inner>
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <Navigation>
                        <Link to="/">home</Link>
                        <a>tours</a>
                        <a>about</a>
                        <a>help</a>
                    </Navigation>
                    <AccountButtons>
                        <Link to="/favorite" onClick={(e) => delayAndGo(e, "/favorite")}>
                            <FavoriteButton isFavorite={isFavorite}>
                                <Heart/>
                            </FavoriteButton>
                        </Link>
                        <SignInButton>sign in</SignInButton>
                    </AccountButtons>
                </Inner>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;