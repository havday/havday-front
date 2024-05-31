import styled from "styled-components";

const smallViewport = "62rem";

export const BackgroundOpacity = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  z-index: 2;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const MenuContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 590px;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 110px 100px 20px 100px;
  z-index: 3;
  background-color: #ffffff;
  box-sizing: border-box;

  .user {
    display: none;
  }

  @media (max-width: ${smallViewport}) {
    height: 390px;
    padding: 97px 30px 10px 30px;

    .user {
      display: flex;
    }
  }
`;

export const CategoryTitle = styled.div`
  color: #040000;
  font-size: 12px;
  font-family: bellefair, serif;
`;

export const CategoryContainer = styled.div`
  height: 80%;
  margin-top: 25px;
  display: flex;
  flex-direction: row;

  .image {
    display: block;
  }

  @media (max-width: ${smallViewport}) {
    .image {
      display: none;
    }
  }
`;
export const CategoryBox = styled.div`
  width: 20%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${smallViewport}) {
    width: 50%;
    //gap: 10px;
  }
`;

export const Category = styled.button`
  color: #040000;
  font-size: 14px;
  font-family: bellefair, serif;

  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;

  @media (max-width: ${smallViewport}) {
    font-size: 13px;
  }
`;

export const ImageBox = styled.div`
  width: 60%;
  background-color: #e7fdd8;
`;

export const UserBox = styled.div`
  height: 10%;
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const User = styled.button`
  display: flex;
  color: #040000;
  font-size: 13px;
  font-family: bellefair, serif;

  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;
`;
