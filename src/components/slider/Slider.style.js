import styled from "styled-components";


export const SliderWrapper = styled.div`
  margin: 0 0 400px 0;
  position: relative;
  height: 720px;

  .swiper {
    height: 720px;
    display: flex;
  }

  //.swiper-wrapper {
  //  flex-wrap: wrap;
  //  display: flex;
  //}
  //
  .swiper-slide {
    min-width: 300px;
  }
  .swiper-button-prev, .swiper-button-next {
    display: none;
  }

  swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -4px;
    display: block;
  }

  .swiper-button-next,
  .swiper-button-prev {
    background-color: white;
    padding: 8px 16px;
    border-radius: 100%;
    border: 2px solid black;
    color: red;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }

  .swiper-pagination span {
    margin: 0 5px;
  }

  .swiper-pagination .swiper-pagination-bullet {
    opacity: 0.5;
    transition: opacity 0.3s ease;
    width: 24px;
    height: 24px;
    background: transparent;
    border: 1px solid #000;
    position: relative;
  }

  .swiper-pagination-bullet-active::before {
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    height: 10px;
    width: 10px;
    display: block;
    border-radius: 50%;
    color: #000;
    z-index: 100;
    background: #000;
  }

  .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
    opacity: 1;
  }

  .swiper-container {
    width: 480px;
  }

  @media screen and (min-width: 640px) {
    .swiper-container {
      width: 640px;
    }
  }

  @media screen and (min-width: 768px) {
    .swiper-container {
      width: 768px;
    }
  }

`;

export const SliderButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoSection = styled.div`
  margin: 96px auto 40px auto;

  font-family: Syne;
  font-size: 32px;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`;

export const SliderButton = styled.button`
  outline: none;
  border: none;
  background: #ECECEC;
  width: 44px;
  height: 44px;
  margin: 0 16px 0 0;
`;

