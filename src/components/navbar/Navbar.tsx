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
          <Logo width={86} height={35} />
        </Link>
      </styles.LogoBox>
      <styles.Menu>
        <styles.MenuItem>
          <styles.Button>LOGIN</styles.Button>
        </styles.MenuItem>
        <styles.MenuItem>
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
