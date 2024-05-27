import * as styles from "./HomeContent.styles";
import AboutContentData from "@/data/AboutContentData";

const HomeContent = () => {
  const { title, content1, content2 } = AboutContentData || {
    title: "",
    content1: "",
    content2: "",
  };

  return (
    <styles.Container>
      <styles.Box>
        <styles.ContentContainer>
          <styles.Title>{title}</styles.Title>
          <styles.ContentBox>
            <styles.Content>{content1}</styles.Content>
            <styles.Content>{content2}</styles.Content>
          </styles.ContentBox>
        </styles.ContentContainer>
        <styles.Button>SHOW NOW</styles.Button>
      </styles.Box>
    </styles.Container>
  );
};

export default HomeContent;
