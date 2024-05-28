import styled from "styled-components";

const smallViewport = "62rem";

export const Footer = styled.footer`
  height: 120px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const Box = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 18%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #787878;
  font-size: 10px;
  line-height: 17px;
  white-space: pre-line;
  font-family: bellefair, serif;
  background-color: pink;

  @media (max-width: ${smallViewport}) {
    font-size: 6px;
    line-height: 14px;
  }
`;

export const IconBox = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  background-color: transparent;

  cursor: pointer;
  outline: none;
  border: 0;

  color: #787878;
  font-size: 10px;
  line-height: 17px;
  font-family: bellefair, serif;

  @media (max-width: ${smallViewport}) {
    font-size: 6px;
    line-height: 14px;
  }
`;
