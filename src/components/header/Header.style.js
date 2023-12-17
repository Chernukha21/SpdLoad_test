import styled from "styled-components";


export const HeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.48);
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  flex-wrap: wrap;
  img {
    width: 229px;
    height: 42px;
  }
  @media screen and (max-width: 940px){
    height: 200px;
    flex-direction: column;
    padding: 20px;
  }
`;

export const Navigation = styled.nav`
  display: flex;

  a {
    margin: 0 32px 0 0;
    transition: color 0.2s linear;
    display: inline-flex;
    vertical-align: top;
    position: relative;
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    list-style: none;
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 1px;
      background-color: #fff;
      transition: width 0.35s;
    }

    &:hover:before {
      width: 100%;
    }
  }
`;

export const AccountButtons = styled.div`
  display: flex;
  justify-content: space-between;

  & > :first-child {
    margin: 0 12px 0 0;
  }
`;


export const FavoriteButton = styled.button`
  width: 53px;
  height: 53px;
  background: ${p => p.isFavorite ? "#DD377D" : "#ECECEC"};
  position: relative;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  &:after {
    content: "";
    background: #4B4646FF;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;

  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
  svg {
    width: 24px;
    height: 24px;
    & path {
      fill: ${p => p.isFavorite ? "#fff" : "#000"};
    }
  }

`;

export const SignInButton = styled.button`
  background: #D3EAFF;
  width: 163px;
  font-family: Syne;
  font-weight: 600;
  font-size: 24px;
  height: 53px;
  text-transform: uppercase;

  &:active {
    background-color: #6ba9ee;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

