import * as styles from "./Menubar.styles";
import MenubarData from "@/data/MenubarData";
import React, { SetStateAction } from "react";

interface MenubarProps {
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Menubar = ({ setIsMenuOpen }: MenubarProps) => {
  const {
    title,
    categoryContent1,
    categoryContent2,
    userContent1,
    userContent2,
  } = MenubarData || {
    title: "",
    categoryContent1: [],
    categoryContent2: [],
    userContent1: [],
    userContent2: [],
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <styles.BackgroundOpacity onClick={handleMenuClose}>
      <styles.MenuContainer onClick={handleMenuContainerClick}>
        <styles.CategoryTitle>{title}</styles.CategoryTitle>
        <styles.CategoryContainer>
          <styles.CategoryBox>
            {categoryContent1.map((category: string, index: number) => (
              <styles.Category key={index}>{category}</styles.Category>
            ))}
          </styles.CategoryBox>
          <styles.CategoryBox>
            {categoryContent2.map((category: string, index: number) => (
              <styles.Category key={index}>{category}</styles.Category>
            ))}
          </styles.CategoryBox>
          <styles.ImageBox className="image" />
        </styles.CategoryContainer>
        <styles.UserBox className="user">
          {userContent1.map((user: string, index: number) => (
            <styles.User key={index}>{user}</styles.User>
          ))}
        </styles.UserBox>
      </styles.MenuContainer>
    </styles.BackgroundOpacity>
  );
};

export default Menubar;
