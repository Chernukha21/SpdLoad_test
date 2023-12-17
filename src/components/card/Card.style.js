import styled from "styled-components";
import {FavoriteButton} from "../header/Header.style.js";

export const CardWrapper = styled.div`
  width: 411px;
  min-width: 300px;
  flex-wrap: wrap;
  min-height: 572px;
  border: 1px solid #D3EAFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  margin: 32px 0 0 0;
  padding: 16px 32px 64px 32px;
  & > :first-child {
    font-family: Syne;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0;
    text-align: center;
    margin: 0 0 0 16px;
    color: #1E1E1E;
  }
  & > :last-child {
    font-family: Lato;
    font-size: 24px;
    font-weight: 300;
    line-height: 29px;
    letter-spacing: 0;
    text-align: center;
    color: #556B84;
  }

`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  margin: 0 0 24px 0;
`;

export const LikeButton = styled.button`
  background: #ECECEC;
  width: 53px;
  height: 53px;
  outline: none;
  border: none;
  svg {
    width: 24px;
    height: 24px;
  }
`
export const BuyButton = styled.button`
  width: 278px;
  height: 53px;
  text-transform: uppercase;
  color: #000;
  font-family: Syne;
  font-size: 24px;
  outline: none;
  border: none;
  background: #D3EAFF;

`;