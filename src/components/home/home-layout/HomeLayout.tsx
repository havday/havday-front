import * as styles from "./HomeLayout.styles";
import HomeImage from "@/components/home/home-image/HomeImage";
import HomeContent from "@/components/home/home-content/HomeContent";

const HomeLayout = () => {
  return (
    <styles.Container>
      <HomeImage />
      <HomeContent />
    </styles.Container>
  );
};

export default HomeLayout;
