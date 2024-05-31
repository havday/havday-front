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
  z-index: 3;
  background-color: transparent;

  @media (max-width: ${smallViewport}) {
    height: 77px;
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  left: 0;
  padding-left: 20px;

  color: #040000;
  font-size: 12px;
  font-family: bellefair, serif;

  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;

  @media (max-width: ${smallViewport}) {
    padding-left: 10px;
    font-size: 10px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  right: 0;

  @media (max-width: ${smallViewport}) {
    .menu {
      display: none;
    }
  }
`;

export const NavItem = styled.li`
  list-style: none;
  padding: 0 5px;

  @media (max-width: ${smallViewport}) {
    padding: 0 3px;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;

  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;

  color: #040000;
  font-size: 12px;
  font-family: bellefair, serif;

  @media (max-width: ${smallViewport}) {
    font-size: 10px;
  }

  &:hover {
    background-color: #ffffff;
    opacity: 0.8;
  }
`;
