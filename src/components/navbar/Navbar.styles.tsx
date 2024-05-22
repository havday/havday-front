import styled from "styled-components";

const smallViewport = "62rem";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: transparent;

  @media (max-width: ${smallViewport}) {
    height: 240px;
    flex-direction: column;

    &.none-menu {
      height: 77px;
    }
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  height: 100%;
  left: 0;

  color: #040000;
  font-size: 12px;
  font-family: bellefair, serif;

  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.nav`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 20px;
  right: 0;

  @media (max-width: ${smallViewport}) {
    flex-direction: column;
    padding-top: 5px;
    padding-left: 0;
    padding-right: 0;
    margin: 0;

    &.none-menu {
      display: none;
    }
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  padding: 0 5px;

  @media (max-width: ${smallViewport}) {
    text-align: center;
    padding: 5px 0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5%;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: 0;

  color: #040000;
  font-size: 12px;
  font-family: bellefair, serif;

  @media (max-width: ${smallViewport}) {
    font-size: 16px;
  }

  &:hover {
    color: #ffffff;
    background-color: #a07d5a;
    opacity: 0.8;
  }
`;
