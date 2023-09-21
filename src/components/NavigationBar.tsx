import { FC } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { NavigationItem } from "./NavigationItem";

const NavigationBarContainer = styled(Flex)``;

export const NavigationBar: FC = () => {
  return (
    <NavigationBarContainer
      gap="30px"
      alignItems="center"
      justifyContent="center"
    >
      <NavigationItem linkTo="/" navigationItemText="about" />
      <NavigationItem linkTo="/" navigationItemText="Schedule" />
      <NavigationItem linkTo="/" navigationItemText="Leaderboard" />
      <NavigationItem linkTo="/" navigationItemText="Order of merit" />
      <NavigationItem linkTo="/" navigationItemText="News" />
      <NavigationItem linkTo="/" navigationItemText="players guide" />
      <NavigationItem linkTo="/" navigationItemText="faq & rules" />
    </NavigationBarContainer>
  );
};
