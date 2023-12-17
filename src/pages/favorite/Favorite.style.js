import styled from "styled-components";
import favorite from "../../assets/images/favorite.png";

export const FavoriteWrapper = styled.div`
  position: relative;
  z-index: 100;
  height: 440px;
  background-image: url("${favorite}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Change the color and opacity as needed */
  }
`;

export const FavoriteCards = styled.div`
  margin: 40px 0 104px 0;
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 0 20px 20px 0;
  }
`;

export const Divider = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 64px 0 0 0;
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
`;