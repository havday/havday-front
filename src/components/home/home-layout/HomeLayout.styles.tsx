import styled from "styled-components";

const smallViewport = "62rem";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    //height: 100vh;
  }
`;
