import * as styles from "./Navbar.styles";
import Logo from "@assets/icons/MainLogo.svg";
import MenuOpen from "@assets/icons/MenuOpenIcon.svg";
import MenuClose from "@assets/icons/MenuCloseIcon.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menubar from "@/components/menubar/Menubar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <styles.Header>
        <styles.MenuButton onClick={handleMenuOpen}>
          MENU {isMenuOpen ? <MenuClose /> : <MenuOpen />}
        </styles.MenuButton>
        <styles.LogoBox>
          <Link href="/">
            <Logo />
          </Link>
        </styles.LogoBox>
        <styles.Nav>
          <styles.NavItem className="menu">
            <styles.Button>LOGIN</styles.Button>
          </styles.NavItem>
          <styles.NavItem className="menu">
            <styles.Button>SEARCH</styles.Button>
          </styles.NavItem>
          <styles.NavItem>
            <styles.Button>CART</styles.Button>
          </styles.NavItem>
        </styles.Nav>
      </styles.Header>
      {isMenuOpen && <Menubar setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};

export default Navbar;
