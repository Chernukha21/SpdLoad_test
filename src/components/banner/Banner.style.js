import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  z-index: 101;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Content = styled.div`
  margin: 152px 0 0 0;
  & > :first-child {
    font-family: Syne;
    font-weight: 800;
    font-size: calc(2vw + 2vh);
  }
  & > :last-child {
    font-family: Syne;
    font-weight: 800;
    font-size: calc(11vw + 10vh);
    padding: 0;
    text-transform: uppercase;
    line-height: 0.5;
    margin: 0;
  }
`;
export const Expand = styled.div`
  -webkit-text-stroke:  1px #000; 
  color: #fff;
  margin-top: auto;
  padding-bottom: 33px;
  font-family: Lato;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  svg {
    position: absolute;
    top: 3px;
    right: -40px;
  }
`;