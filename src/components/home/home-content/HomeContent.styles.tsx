import styled from "styled-components";

const smallViewport = "62rem";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 95%;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  width: 65%;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: #040000;
  font-size: 16px;
  font-family: bellefair, serif;
`;

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 49%;
  word-break: break-word;
  text-align: justify;
  color: #040000;
  font-size: 12px;
  font-family: bellefair, serif;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;

  display: flex;
  text-decoration: underline;
  color: #787878;
  font-size: 14px;
  font-family: bellefair, serif;
`;
