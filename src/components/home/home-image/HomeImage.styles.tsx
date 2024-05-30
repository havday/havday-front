import styled from "styled-components";

const smallViewport = "62rem";

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper {
    display: block;
  }

  .swiper-mobile {
    display: none;
  }

  @media (max-width: ${smallViewport}) {
    .swiper {
      display: none;
    }

    .swiper-mobile {
      display: block;
    }
  }
`;
