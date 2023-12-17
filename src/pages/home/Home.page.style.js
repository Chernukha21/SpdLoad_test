import styled from "styled-components";
import spaceBoat from '../../assets/images/space_boat.png'



export const HomePageWrapper = styled.div`
  position: relative;
  z-index: 100;
  height: 740px;
  background-image: url("${spaceBoat}");
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
