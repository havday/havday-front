import * as styles from "./Footer.styles";
import FooterData from "@/data/FooterData";
import InstagramIcon from "@assets/icons/Instagram.svg";

const Footer = () => {
  const { item1, item2, item3, item4, item5, item6 } = FooterData || {
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    item6: "",
  };

  return (
    <styles.Footer>
      <styles.Box>
        <styles.Content>{item1}</styles.Content>
        <styles.Content>{item2}</styles.Content>
        <styles.Content>{item3}</styles.Content>
        <styles.Content>
          <styles.IconBox>
            <InstagramIcon />
            {item4}
          </styles.IconBox>
        </styles.Content>
        <styles.Content>
          <styles.Button>{item5}</styles.Button>
          <styles.Button>{item6}</styles.Button>
        </styles.Content>
      </styles.Box>
    </styles.Footer>
  );
};

export default Footer;
