import * as styles from "./Navbar.styles";
import Logo from "@assets/icons/MainLogo.svg";
import MenuOpen from "@assets/icons/MenuOpenIcon.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <styles.Header>
      <styles.MenuButton>
        MENU <MenuOpen />
      </styles.MenuButton>
      <styles.LogoBox>
        <Link href="/">
          <Logo />
        </Link>
      </styles.LogoBox>
      <styles.Menu>
        <styles.MenuItem className="menu">
          <styles.Button>LOGIN</styles.Button>
        </styles.MenuItem>
        <styles.MenuItem className="menu">
          <styles.Button>SEARCH</styles.Button>
        </styles.MenuItem>
        <styles.MenuItem>
          <styles.Button>CART</styles.Button>
        </styles.MenuItem>
      </styles.Menu>
    </styles.Header>
  );
};

export default Navbar;
